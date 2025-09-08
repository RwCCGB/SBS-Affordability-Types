import { formField, IApplicant, toAffordabilityRequest } from "../../types";

describe("converters", () => {
  it("verify a collection of formfields is converted to a valid affordabilityRequest object", async () => {
    //Arrange
    const formFields: formField[] = [
      {
        id: 1,
        name: "numberOfApplicants",
        value: 2,
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
        value: 95,
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
    ];

    const applicant: IApplicant = {
      applicantId: 1,
      applicantIsFirstTimeBuyer: {
        id: 1000,
        name: "isFirstTimeBuyer",
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
      incomeData: [
        {
          id: 1000,
          name: "isFirstTimeBuyer",
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
          id: 1000,
          name: "isFirstTimeBuyer",
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
          id: 1000,
          name: "isFirstTimeBuyer",
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

    //Act
    const data = toAffordabilityRequest(formFields, [
      createApplicant(1),
      createApplicant(2),
      createApplicant(3),
      createApplicant(4),
    ]);

    //Assert
    expect(data).not.toBeNull();
  });
});
