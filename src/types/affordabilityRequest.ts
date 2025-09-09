import * as z from "zod";
import { affordabilityRequestSchema } from "../schemas/affordability/affordabilityRequestSchema";

export type affordabilityRequest = z.infer<typeof affordabilityRequestSchema>;

export const oneApplicantAffordabilityRequest = (): affordabilityRequest => {
  return {
    numberOfApplicants: 1,
    interestOnlyAmount: 0,
    interestRateOfProduct: 0,
    isNewBuild: 0,
    isLongTermFixedProduct: 0,
    myMortgageApplication: {
      allApplicants: [
        {
          allExpenditureItems: [],
          allIncomeItems: [],
          employmentStatus: 1,
          firstTimeBuyer: 0,
          residentialStatus: 1,
        },
      ],
      applicationSource: 0,
      mortgageFees: 0,
      mySharedOwnershipDetails: 0,
      purchasePrice: 0,
      totalLoanAmount: 0,
      useDefaultFeeValue: 0,
    },
    numberOfDependents: 0,
    region: 1,
    repaymentType: 1,
    termMonths: 0,
    termYears: 0,
    willBeApplicantsMainResidence: 0,
  };
};

export const twoApplicantAffordabilityRequest = (): affordabilityRequest => {
  return {
    numberOfApplicants: 2,
    interestOnlyAmount: 0,
    interestRateOfProduct: 0,
    isNewBuild: 0,
    isLongTermFixedProduct: 0,
    myMortgageApplication: {
      allApplicants: [
        {
          allExpenditureItems: [],
          allIncomeItems: [],
          employmentStatus: 1,
          firstTimeBuyer: 0,
          residentialStatus: 0,
        },
        {
          allExpenditureItems: [],
          allIncomeItems: [],
          employmentStatus: 1,
          firstTimeBuyer: 0,
          residentialStatus: 0,
        },
      ],
      applicationSource: 0,
      mortgageFees: 0,
      mySharedOwnershipDetails: 0,
      purchasePrice: 0,
      totalLoanAmount: 0,
      useDefaultFeeValue: 0,
    },
    numberOfDependents: 0,
    region: 1,
    repaymentType: 1,
    termMonths: 0,
    termYears: 0,
    willBeApplicantsMainResidence: 0,
  };
};

export const threeApplicantAffordabilityRequest = (): affordabilityRequest => {
  return {
    numberOfApplicants: 3,
    interestOnlyAmount: 0,
    interestRateOfProduct: 0,
    isNewBuild: 0,
    isLongTermFixedProduct: 0,
    myMortgageApplication: {
      allApplicants: [
        {
          allExpenditureItems: [],
          allIncomeItems: [],
          employmentStatus: 1,
          firstTimeBuyer: 0,
          residentialStatus: 0,
        },
        {
          allExpenditureItems: [],
          allIncomeItems: [],
          employmentStatus: 1,
          firstTimeBuyer: 0,
          residentialStatus: 0,
        },
        {
          allExpenditureItems: [],
          allIncomeItems: [],
          employmentStatus: 1,
          firstTimeBuyer: 0,
          residentialStatus: 0,
        },
      ],
      applicationSource: 0,
      mortgageFees: 0,
      mySharedOwnershipDetails: 0,
      purchasePrice: 0,
      totalLoanAmount: 0,
      useDefaultFeeValue: 0,
    },
    numberOfDependents: 0,
    region: 1,
    repaymentType: 1,
    termMonths: 0,
    termYears: 0,
    willBeApplicantsMainResidence: 0,
  };
};

export const fourApplicantAffordabilityRequest = (): affordabilityRequest => {
  return {
    numberOfApplicants: 4,
    interestOnlyAmount: 0,
    interestRateOfProduct: 0,
    isNewBuild: 0,
    isLongTermFixedProduct: 0,
    myMortgageApplication: {
      allApplicants: [
        {
          allExpenditureItems: [],
          allIncomeItems: [],
          employmentStatus: 1,
          firstTimeBuyer: 0,
          residentialStatus: 0,
        },
        {
          allExpenditureItems: [],
          allIncomeItems: [],
          employmentStatus: 1,
          firstTimeBuyer: 0,
          residentialStatus: 0,
        },
        {
          allExpenditureItems: [],
          allIncomeItems: [],
          employmentStatus: 1,
          firstTimeBuyer: 0,
          residentialStatus: 0,
        },
        {
          allExpenditureItems: [],
          allIncomeItems: [],
          employmentStatus: 1,
          firstTimeBuyer: 0,
          residentialStatus: 0,
        },
      ],
      applicationSource: 0,
      mortgageFees: 0,
      mySharedOwnershipDetails: 0,
      purchasePrice: 0,
      totalLoanAmount: 0,
      useDefaultFeeValue: 0,
    },
    numberOfDependents: 0,
    region: 1,
    repaymentType: 1,
    termMonths: 0,
    termYears: 0,
    willBeApplicantsMainResidence: 0,
  };
};
