import { affordabilityRequest, pingRequest } from "../../types";
import { validateAffordabilityRequest, validatePingRequest } from "../../utils";

describe("validator", () => {
  it("verifies that a valid ping request is successfully validated", async () => {
    //Act
    const validate = validatePingRequest({
      checkBackendOnline: true,
      checkDatabaseOnline: true,
    } as pingRequest);

    //Assert
    expect(validate.success).toBeTruthy();
  });

  it("verifies that a valid affordability request is successfully validated", async () => {
    //Arrange
    const json = {
      numberOfApplicants: 1,
      interestOnlyAmount: 100000,
      interestRateOfProduct: 3,
      isNewBuild: 0,
      isLongTermFixedProduct: 1,
      myMortgageApplication: {
        allApplicants: [
          {
            allExpenditureItems: [
              {
                myApplicant: 1,
                expenditureAmount: 1000.0,
                stcExpenditureType: 1,
              },
              {
                myApplicant: 1,
                expenditureAmount: 2000.0,
                stcExpenditureType: 1,
              },
            ],
            allIncomeItems: [
              {
                myApplicant: 1,
                annualAmount: 1000.0,
                stcIncomeType: 1,
              },
              {
                myApplicant: 1,
                annualAmount: 2000.0,
                stcIncomeType: 1,
              },
            ],
            employmentStatus: 1,
            firstTimeBuyer: 1,
            residentialStatus: 1,
          },
        ],
        applicationSource: 1,
        mortgageFees: 150,
        mySharedOwnershipDetails: 1,
        purchasePrice: 100000,
        totalLoanAmount: 10000,
        useDefaultFeeValue: 1,
      },
      numberOfDependents: 1,
      region: 1,
      repaymentType: 1,
      termMonths: 0,
      termYears: 25,
      willBeApplicantsMainResidence: 1,
    };

    //Act
    const validate = validateAffordabilityRequest(json as affordabilityRequest);

    //Assert
    expect(validate.success).toBe(true);
  });

  it("verifies that an invalid affordability request is not validated", async () => {
    //Arrange
    const json = {
      numberOfApplicants: 1,
      interestOnlyAmount: 100000,
      interestRateOfProduct: 3,
      isNewBuild: 1000000,
      isLongTermFixedProduct: 1,
      myMortgageApplication: {
        allApplicants: [
          {
            allExpenditureItems: [
              {
                myApplicant: 1,
                expenditureAmount: 1000.0,
                stcExpenditureType: 1,
              },
              {
                myApplicant: 1,
                expenditureAmount: 2000.0,
                stcExpenditureType: 1,
              },
            ],
            allIncomeItems: [
              {
                myApplicant: 1,
                annualAmount: 1000.0,
                stcIncomeType: 1,
              },
              {
                myApplicant: 1,
                annualAmount: 2000.0,
                stcIncomeType: 1,
              },
            ],
            employmentStatus: 1,
            firstTimeBuyer: 1,
            residentialStatus: 1,
          },
        ],
        applicationSource: 1,
        mortgageFees: 150,
        mySharedOwnershipDetails: 1,
        purchasePrice: 100000,
        totalLoanAmount: 10000,
        useDefaultFeeValue: 1,
      },
      numberOfDependents: 1,
      region: 1,
      repaymentType: 1,
      termMonths: 0,
      termYears: 25,
      willBeApplicantsMainResidence: 1,
    };

    //Act
    const validate = validateAffordabilityRequest(json as affordabilityRequest);

    //Assert
    expect(validate.success).toBe(false);
  });
});
