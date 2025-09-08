export interface formField {
  id: number;
  name: string;
  value: number;
  type: string;
  required: boolean;
  minAmount: number;
  maxAmount: number;
  labelText: string;
  labelSubtext: string;
  afterFieldText: string;
  isValid: boolean;
  errorMessage: string;
  validationGroup: number;
}
