import { z } from "zod";

export const ExpenditureSchema = z.object({
  maintenanceChildSupport: z.number().nonnegative(),
  nurseryChildCareCosts: z.number().nonnegative(),
  tuitionFees: z.number().nonnegative(),
  creditCards: z.number().nonnegative(),
  storeCards: z.number().nonnegative(),
  personalLoans: z.number().nonnegative(),
  studentLoans: z.number().nonnegative(),
  residentialMortgageBalance: z.number().nonnegative(),
  helpToBuyEquityLoanBalance: z.number().nonnegative(),
  serviceCharge: z.number().nonnegative(),
  sharedOwnershipRent: z.number().nonnegative(),
  groundRent: z.number().nonnegative(),
  estateRentCharge: z.number().nonnegative(),
});

export const IncomeDetailsSchema = z.object({
  annualBasicIncome: z.number().nonnegative(),
  hasOtherIncome: z.boolean().nullable(),
});

export const ApplicantSchema = z.object({
  firstTimeBuyer: z.boolean().nullable(),
  employmentStatus: z.string(),
  residentialStatus: z.string(),
  incomeDetails: IncomeDetailsSchema,
  expenditure: ExpenditureSchema,
});

export const ApplicationDetailsSchema = z.object({
  numberOfApplicants: z.number().int().min(1),
  totalAdultDependants: z.number().int().min(0),
  totalChildDependants: z.number().int().min(0),
  propertyPrice: z.number().nonnegative(),
  loanAmount: z.number().nonnegative(),
  interestRate: z.number().nullable(),
  isNewBuild: z.boolean().nullable(),
  wantsLongTermFixedRate: z.boolean().nullable(),
  repaymentType: z.string(),
  mortgageTermYears: z.number().int().min(0),
  mortgageTermMonths: z.number().int().min(0).max(11),
  regionOfProperty: z.string(),
  isMainResidence: z.boolean().nullable(),
  feeToBeAdded: z.number().nonnegative(),
});

export const MortgageApplicationSchema = z.object({
  applicationDetails: ApplicationDetailsSchema,
  applicants: z.array(ApplicantSchema).min(1),
});

export type DTOMortgageApplicationDetails = z.infer<typeof MortgageApplicationSchema>;