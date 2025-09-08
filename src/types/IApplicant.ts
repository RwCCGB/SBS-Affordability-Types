import { formField } from "./formField";

export interface IApplicant {
  applicantId: number;
  applicantIsFirstTimeBuyer: formField;
  incomeData: Array<formField>;
  expenditureData: Array<formField>;
}
