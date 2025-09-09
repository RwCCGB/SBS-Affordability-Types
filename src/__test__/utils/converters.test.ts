import { formField, IApplicant, toAffordabilityRequest } from "../../types";

const formFields: formField[] = [
  {
    id: 1,
    name: "numberOfApplicants",
    value: 1,
    type: "number",
    required: true,
    minAmount: 1,
    maxAmount: 4,
    labelText: "Total number of applicants",
    labelSubtext: "",
    afterFieldText: "",
    isValid: true,
    errorMessage: "",
    validationGroup: 0,
  },
  {
    id: 2,
    name: "adultDependancies",
    value: 3,
    type: "number",
    required: true,
    minAmount: 0,
    maxAmount: 10,
    labelText: "Total number of adult dependants",
    labelSubtext:
      "The number of adults who are financially dependant on any of the applicants",
    afterFieldText: "",
    isValid: true,
    errorMessage: "",
    validationGroup: 0,
  },
  {
    id: 3,
    name: "childDependancies",
    value: 2,
    type: "number",
    required: true,
    minAmount: 0,
    maxAmount: 10,
    labelText: "Total number of child dependants",
    labelSubtext:
      "The number of children who are financially dependant on any of the applicants",
    afterFieldText: "",
    isValid: true,
    errorMessage: "",
    validationGroup: 0,
  },
  {
    id: 4,
    name: "region",
    value: 94,
    type: "select",
    required: true,
    minAmount: 1,
    maxAmount: 10,
    labelText: "Region of property",
    labelSubtext: "",
    afterFieldText: "",
    isValid: true,
    errorMessage: "",
    validationGroup: 0,
  },
  {
    id: 5,
    name: "isNewBuild",
    value: 1,
    type: "number",
    required: true,
    minAmount: 0,
    maxAmount: 1,
    labelText: "Is new build?",
    labelSubtext: "",
    afterFieldText: "",
    isValid: true,
    errorMessage: "",
    validationGroup: 0,
  },
  {
    id: 6,
    name: "interestOnlyAmount",
    value: 999999,
    type: "number",
    required: true,
    minAmount: 0,
    maxAmount: 1,
    labelText: "Is new build?",
    labelSubtext: "",
    afterFieldText: "",
    isValid: true,
    errorMessage: "",
    validationGroup: 0,
  },
  {
    id: 7,
    name: "purchasePrice",
    value: 750000,
    type: "number",
    required: true,
    minAmount: 0,
    maxAmount: 1,
    labelText: "Is new build?",
    labelSubtext: "",
    afterFieldText: "",
    isValid: true,
    errorMessage: "",
    validationGroup: 0,
  },
  {
    id: 8,
    name: "termYears",
    value: 25,
    type: "number",
    required: true,
    minAmount: 0,
    maxAmount: 1,
    labelText: "Is new build?",
    labelSubtext: "",
    afterFieldText: "",
    isValid: true,
    errorMessage: "",
    validationGroup: 0,
  },
];

const applicant: IApplicant = {
  applicantId: 1,
  applicantIsFirstTimeBuyer: {
    id: 1001,
    name: "isFirstTimeBuyer1",
    value: 0,
    type: "number",
    required: false,
    minAmount: 0,
    maxAmount: 1,
    labelText: "Is this applicant a first time buyer",
    labelSubtext: "Have they bought a house before?",
    afterFieldText: "",
    isValid: true,
    errorMessage: "",
    validationGroup: 2200,
  } as formField,
  incomeData: [
    {
      id: 1,
      name: "income field 1",
      value: 0,
      type: "number",
      required: false,
      minAmount: 0,
      maxAmount: 1,
      labelText: "Is this applicant a first time buyer",
      labelSubtext: "Have they bought a house before?",
      afterFieldText: "",
      isValid: true,
      errorMessage: "",
      validationGroup: 22,
    } as formField,
    {
      id: 2,
      name: "income field 2",
      value: 0,
      type: "number",
      required: false,
      minAmount: 0,
      maxAmount: 1,
      labelText: "Is this applicant a first time buyer",
      labelSubtext: "Have they bought a house before?",
      afterFieldText: "",
      isValid: true,
      errorMessage: "",
      validationGroup: 22,
    } as formField,
    {
      id: 3,
      name: "income field 3",
      value: 0,
      type: "number",
      required: false,
      minAmount: 0,
      maxAmount: 1,
      labelText: "Is this applicant a first time buyer",
      labelSubtext: "Have they bought a house before?",
      afterFieldText: "",
      isValid: true,
      errorMessage: "",
      validationGroup: 22,
    } as formField,
  ] as Array<formField>,
  expenditureData: [
    {
      id: 1,
      name: "expenditure field 1",
      value: 0,
      type: "number",
      required: false,
      minAmount: 0,
      maxAmount: 1,
      labelText: "Is this applicant a first time buyer",
      labelSubtext: "Have they bought a house before?",
      afterFieldText: "",
      isValid: true,
      errorMessage: "",
      validationGroup: 22,
    } as formField,
    {
      id: 2,
      name: "expenditure field 2",
      value: 0,
      type: "number",
      required: false,
      minAmount: 0,
      maxAmount: 1,
      labelText: "Is this applicant a first time buyer",
      labelSubtext: "Have they bought a house before?",
      afterFieldText: "",
      isValid: true,
      errorMessage: "",
      validationGroup: 22,
    } as formField,
  ] as Array<formField>,
} as IApplicant;

const createApplicant = (i: number) => {
  const json = JSON.stringify(applicant);
  const app = JSON.parse(json) as IApplicant;
  app.applicantId = i;
  return app;
};

const numberOfApplicantsField = (numberOfApplicants: number): formField => {
  return {
    id: 1,
    name: "numberOfApplicants",
    value: numberOfApplicants,
    type: "number",
    required: true,
    minAmount: 1,
    maxAmount: 4,
    labelText: "Total number of applicants",
    labelSubtext: "",
    afterFieldText: "",
    isValid: true,
    errorMessage: "",
    validationGroup: 0,
  } as formField;
};

describe("converters", () => {
  it("verify a collection of formfields for a single applicant is converted to a valid affordabilityRequest object", async () => {
    //Arrange
    const applicant = [createApplicant(1)];
    const fields = [...formFields, numberOfApplicantsField(1)];

    //Act
    const data = toAffordabilityRequest(fields, applicant);

    //Assert
    expect(data).not.toBeNull();
    expect(data.numberOfApplicants).toBe(1);
  });

  it("verify a collection of formfields for dual applicants is converted to a valid affordabilityRequest object", async () => {
    //Arrange
    const applicants = [createApplicant(1), createApplicant(2)];
    const fields = [...formFields, numberOfApplicantsField(2)];

    //Act
    const data = toAffordabilityRequest(fields, applicants);

    //Assert
    expect(data).not.toBeNull();
    expect(data.numberOfApplicants).toBe(2);
  });

  it("verify a collection of formfields for triple applicants is converted to a valid affordabilityRequest object", async () => {
    //Arrange
    const applicants = [
      createApplicant(1),
      createApplicant(2),
      createApplicant(3),
    ];
    const fields = [...formFields, numberOfApplicantsField(3)];

    //Act
    const data = toAffordabilityRequest(fields, applicants);

    //Assert
    expect(data).not.toBeNull();
    expect(data.numberOfApplicants).toBe(3);
  });

  it("verify a collection of formfields for quadruple applicants is converted to a valid affordabilityRequest object", async () => {
    //Arrange
    const applicants = [
      createApplicant(1),
      createApplicant(2),
      createApplicant(3),
      createApplicant(4),
    ];
    const fields = [...formFields, numberOfApplicantsField(4)];

    //Act
    const data = toAffordabilityRequest(fields, applicants);

    //Assert
    expect(data).not.toBeNull();
    expect(data.numberOfApplicants).toBe(4);
  });
});
