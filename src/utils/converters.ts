import {
  formField,
  IApplicant,
  affordabilityRequest,
  oneApplicantAffordabilityRequest,
  twoApplicantAffordabilityRequest,
  threeApplicantAffordabilityRequest,
  fourApplicantAffordabilityRequest,
} from "../types";

type Field = {
  name: string;
  applicantId: number;
  type: "Application" | "Income" | "Expenditure";
  id: number;
  value: number;
};

const getBaseAffordabilityRequest = (
  numberOfApplicants: number,
): affordabilityRequest => {
  switch (numberOfApplicants) {
    case 1:
      return oneApplicantAffordabilityRequest();
    case 2:
      return twoApplicantAffordabilityRequest();
    case 3:
      return threeApplicantAffordabilityRequest();
    case 4:
      return fourApplicantAffordabilityRequest();
    default:
      throw `Sorry, ${numberOfApplicants} applicant(s) is not supported`;
  }
};

const toField = (applicantId: number, field: formField): Field => ({
  name: field.name,
  applicantId: applicantId,
  type: "Application",
  id: field.id,
  value: field.value,
});

export const toAffordabilityRequest = (
  application: formField[],
  applicants: IApplicant[],
): affordabilityRequest => {
  const request: affordabilityRequest = getBaseAffordabilityRequest(
    applicants.length,
  );
  const getApplicationFields = (field: formField): Field => toField(0, field);
  const getIncomeFields = (applicant: IApplicant): Field[] => {
    return applicant.incomeData.map((field) => {
      return { ...toField(applicant.applicantId, field), type: "Income" };
    });
  };
  const getExpenditureFields = (applicant: IApplicant): Field[] => {
    return applicant.expenditureData.map((field) => {
      return { ...toField(applicant.applicantId, field), type: "Expenditure" };
    });
  };

  const fields: Array<Field> = application
    .map(getApplicationFields)
    .concat(applicants.flatMap(getIncomeFields))
    .concat(applicants.flatMap(getExpenditureFields));

  const keys = Object.keys(request).concat(
    Object.keys(request.myMortgageApplication),
  );

  const keyExists = (key: string): boolean => keys.indexOf(key) !== -1;

  /*TODO: use of any in this context is definitely wrong but run out of time to fix it*/
  for (let i = 0; i < fields?.length; i++) {
    const key = fields[i]?.name;
    const value = fields[i]?.value;
    if (key && keyExists(key)) {
      if (Object.hasOwn(request, key)) {
        (request as any)[key] = value;
      } else {
        (request["myMortgageApplication"] as any)[key] = value;
      }
    }
  }

  for (let i = 0; i < applicants?.length; i++) {
    /*...deal with each applicant, adding income & expenditure items for each*/
    const income = fields.filter(
      (field) => field.applicantId === i + 1 && field.type === "Income",
    );

    income.forEach(({ applicantId, value }) => {
      const newIncomeItem = {
        myApplicant: applicantId,
        annualAmount: value,
        stcIncomeType: 1,
      };
      (
        request.myMortgageApplication.allApplicants[i]?.allIncomeItems as any
      ).push(newIncomeItem);
    });

    const expenditure = fields.filter(
      (field) => field?.applicantId === i + 1 && field?.type === "Expenditure",
    );

    expenditure.forEach(({ applicantId, value }) => {
      const newExpenditureItem = {
        myApplicant: applicantId,
        expenditureAmount: value,
        stcExpenditureType: 1,
      };
      (request?.myMortgageApplication?.allApplicants as any)[
        i
      ]?.allExpenditureItems.push(newExpenditureItem);
    });
  }

  return request;
};
