import * as z from "zod";
import { affordabilityRequestSchema } from "../schemas/affordability/affordabilityRequestSchema";
import { pingRequestSchema } from "../schemas/ping/pingRequestSchema";
import { pingRequest, affordabilityRequest } from "../types";

export type validateResult =
  | {
      success: true;
    }
  | { success: false; errorMessage: string, errors: string[] };

export const validatePingRequest = (request: pingRequest): validateResult => {
  const data = pingRequestSchema.safeParse(request);
  const { success } = data;
  if (success) {
    return { success } as validateResult;
  } else {
    let error: z.ZodError = data.error;
    let prettyError = z.prettifyError(error);
    const errorMessage = `Ping request schema validation failure. See below for extra detail: ${prettyError}.`;
    const errors = prettyError.split("✖");
    return { success, errorMessage, errors } as validateResult;
  }
};

export const validateAffordabilityRequest = (
  request: affordabilityRequest,
): validateResult => {
  const data = affordabilityRequestSchema.safeParse(request);
  const { success } = data;
  if (success) {
    return { success } as validateResult;
  } else {
    let error: z.ZodError = data.error;
    let prettyError = z.prettifyError(error);
    const errorMessage = `Affordability request schema validation failure. See below for extra detail: ${prettyError}.`;
    const errors = prettyError.split("✖");
    return { success, errorMessage, errors } as validateResult;
  }
};
