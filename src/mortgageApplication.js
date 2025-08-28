"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MortgageApplicationSchema = exports.ApplicationDetailsSchema = exports.ApplicantSchema = exports.IncomeDetailsSchema = exports.ExpenditureSchema = void 0;
var zod_1 = require("zod");
exports.ExpenditureSchema = zod_1.z.object({
    maintenanceChildSupport: zod_1.z.number().nonnegative(),
    nurseryChildCareCosts: zod_1.z.number().nonnegative(),
    tuitionFees: zod_1.z.number().nonnegative(),
    creditCards: zod_1.z.number().nonnegative(),
    storeCards: zod_1.z.number().nonnegative(),
    personalLoans: zod_1.z.number().nonnegative(),
    studentLoans: zod_1.z.number().nonnegative(),
    residentialMortgageBalance: zod_1.z.number().nonnegative(),
    helpToBuyEquityLoanBalance: zod_1.z.number().nonnegative(),
    serviceCharge: zod_1.z.number().nonnegative(),
    sharedOwnershipRent: zod_1.z.number().nonnegative(),
    groundRent: zod_1.z.number().nonnegative(),
    estateRentCharge: zod_1.z.number().nonnegative(),
});
exports.IncomeDetailsSchema = zod_1.z.object({
    annualBasicIncome: zod_1.z.number().nonnegative(),
    hasOtherIncome: zod_1.z.boolean().nullable(),
});
exports.ApplicantSchema = zod_1.z.object({
    firstTimeBuyer: zod_1.z.boolean().nullable(),
    employmentStatus: zod_1.z.string(),
    residentialStatus: zod_1.z.string(),
    incomeDetails: exports.IncomeDetailsSchema,
    expenditure: exports.ExpenditureSchema,
});
exports.ApplicationDetailsSchema = zod_1.z.object({
    numberOfApplicants: zod_1.z.number().int().min(1),
    totalAdultDependants: zod_1.z.number().int().min(0),
    totalChildDependants: zod_1.z.number().int().min(0),
    propertyPrice: zod_1.z.number().nonnegative(),
    loanAmount: zod_1.z.number().nonnegative(),
    interestRate: zod_1.z.number().nullable(),
    isNewBuild: zod_1.z.boolean().nullable(),
    wantsLongTermFixedRate: zod_1.z.boolean().nullable(),
    repaymentType: zod_1.z.string(),
    mortgageTermYears: zod_1.z.number().int().min(0),
    mortgageTermMonths: zod_1.z.number().int().min(0).max(11),
    regionOfProperty: zod_1.z.string(),
    isMainResidence: zod_1.z.boolean().nullable(),
    feeToBeAdded: zod_1.z.number().nonnegative(),
});
exports.MortgageApplicationSchema = zod_1.z.object({
    applicationDetails: exports.ApplicationDetailsSchema,
    applicants: zod_1.z.array(exports.ApplicantSchema).min(1),
});
