import * as z from "zod";
import { affordabilityRequestSchema } from "../schemas/affordability/affordabilityRequestSchema";

export type affordabilityRequest = z.infer<typeof affordabilityRequestSchema>;
