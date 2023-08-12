import { z } from "zod";

export interface Hello {
  message: string;
}

export const CreateHelloObject = z.object({
  last_name: z.string().min(1).max(255),
  first_names: z.string().min(1).max(255),
});

export type CreateHello = z.infer<typeof CreateHelloObject>;
