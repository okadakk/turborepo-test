import { z } from "zod";

export interface Message {
  message: string;
}

export const CreateMessage = z.object({
  last_name: z.string().min(1).max(255),
  first_name: z.string().min(1).max(255),
});
