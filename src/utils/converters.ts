import { formField, IApplicant, affordabilityRequest } from "../types";

export const toAffordabilityRequest = (
  application: formField[],
  applicants: IApplicant[],
): Partial<affordabilityRequest> => {
  const request: Partial<affordabilityRequest> = {};

  const lookup = (fieldName: string): Number => {
    return Number(application.find((field) => field.name === fieldName)?.value);
  };

  /*
  TODO: Work in progress
  request.numberOfApplicants = lookup("numberOfApplicants");
  request.region = lookup("region");
  request.interestOnlyAmount = lookup("interestOnlyAmount");
  request.isNewBuild = lookup("isNewBuild");
  request.myMortgageApplication = {
    allApplicants: [
      {
        employmentStatus: 1,
        firstTimeBuyer: 1,
        residentialStatus: 1,
        allIncomeItems: [],
        allExpenditureItems: [],
      },
    ],
  };
  */

  //console.log(request, "................");

  return request;
};
