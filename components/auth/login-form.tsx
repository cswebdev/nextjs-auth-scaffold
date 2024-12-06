"use client";

import { CardWrapper } from "./card-wrapper";
import * as z from "zod";

import { LoginSchema } from "@/schemas";
import { Input } from "../ui/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { login } from "@/actions/login";
import { useTransition } from "react";

const LoginForm = () => {
   const [isPending, startTransition] = useTransition();

   const form = useForm<z.infer<typeof LoginSchema>>({
      resolver: zodResolver(LoginSchema),
      defaultValues: {
         email: "",
         password: "",
      },
   });

   const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
      startTransition(async () => {
         login(values);
      });
      // Should appear in the browser console
      console.log("Form submitted with values:", values);
      // Should trigger the server-side function
      // login(values);
   };

   //  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
   //     login(values);
   //  };

   return (
      <CardWrapper
         headerLabel="Welcome back"
         backButtonLabel="Don't have an account?"
         backButtonHref="/auth/register"
         showSocial
      >
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
               <div className="space-y-4">
                  <FormField
                     control={form.control}
                     name="email"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Email</FormLabel>
                           <FormControl>
                              <div className="relative">
                                 <Input
                                    {...field}
                                    disabled={isPending}
                                    placeholder="my.email@email.com"
                                    className="pr-10" // Add padding to the right to avoid overlapping with the icon
                                 />
                                 <MdOutlineMailOutline
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    size={20}
                                 />
                              </div>
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="password"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Password</FormLabel>
                           <FormControl>
                              <div className="relative">
                                 <Input
                                    {...field}
                                    disabled={isPending}
                                    placeholder="******"
                                    type="password"
                                    className="pr-10"
                                 />
                                 <RiLockPasswordLine
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    size={20}
                                 />
                              </div>
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
               </div>
               <FormError message="" />
               <FormSuccess message="" />

               <Button disabled={isPending} type="submit" className="w-full">
                  Login
               </Button>
            </form>
         </Form>
      </CardWrapper>
   );
};

export default LoginForm;
