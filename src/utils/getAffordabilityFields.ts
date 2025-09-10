import { affordabilityRequestSchema } from "../schemas/affordability";

export const getAffordabilityFields = () : string[] => {
  return Object.keys(affordabilityRequestSchema.keyof().def.entries);
};
