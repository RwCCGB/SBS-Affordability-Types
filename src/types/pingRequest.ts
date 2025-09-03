import * as z from "zod";
import { pingRequestSchema } from "../schemas/ping/pingRequestSchema";

export type pingRequest = z.infer<typeof pingRequestSchema>;
