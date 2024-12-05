"user server";
import { z } from "zod";
import { LoginSchema } from "@/schemas";

type LoginValues = z.infer<typeof LoginSchema>;

export const login = (values: LoginValues) => {
  console.log("The Login function has been called on the server side");
  console.log(values);
  return values;
};
