"use server";

// import { z } from "zod";
// import { LoginSchema } from "@/schemas";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const login = async (values: any) => {
   console.log(values);
};

// Define type for login values
// type LoginValues = z.infer<typeof LoginSchema>;

// export const login = async (values: LoginValues) => {
//    console.log("Server Action: Login called");
//    console.log("Received values:", values);

//    // Simulate authentication logic
//    if (values.email === "test@test.com" && values.password === "password") {
//       console.log("Authentication successful!");
//       return { success: true };
//    } else {
//       console.log("Authentication failed!");
//       return { success: false, message: "Invalid credentials" };
//    }
// };
