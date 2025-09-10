import { pingRequestSchema } from "../schemas/ping";

export const getPingFields = () : string[] => {
  return Object.keys(pingRequestSchema.keyof().def.entries);
};
