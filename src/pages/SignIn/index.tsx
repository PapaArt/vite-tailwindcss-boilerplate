import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "../../components/ui/form";
import { Button, InputIcon } from "../../components";

import { FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/ui/input";

import { Loader2 } from "lucide-react";

import { Link } from "react-router-dom";
import Logo from "../../assets/biology 1.svg";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "The email must follow the pattern: email@example.com.",
  }),
  password: z.string().min(5, {
    message: "The password must have at least 5 characters.",
  }),
});

const SignIn: React.FC = () => {
  const [loading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const { email, password } = values;

      console.log(email, password);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="h-screen w-screen flex">
      <div className="hidden md:flex flex-col items-center justify-center w-1/2 h-full bg-main overflow-x-hidden overflow-y-hidden">
        <h1 className="font-roboto-slab text-4xl font-semibold text-primary-red mb-0 text-white">
          Anati Quanti
        </h1>
        <p className="mb-14 text-2xl text-white">
        Fueling Progress with Quantitative Analytics
        </p>
        <img className="scale-[2.5] mb-10" src={Logo} alt="logo image"/>
      </div>
      <div className="h-screen w-full md:w-1/2 bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="font-roboto text-4xl font-semibold text-primary-red mb-6">
          Sign in to Anati Quanti
        </h1>
        <div className="flex flex-col">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex">
                        <InputIcon
                          icon={FiMail}
                          className="bg-main border-black text-white"
                        />
                        <Input
                          placeholder="Email"
                          {...field}
                          className="h-14 text-base border border-l-0 bg-gray-200 text-black border-black placeholder-black rounded-r-md"
                        />
                      </div>
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex">
                        <InputIcon
                          icon={FiLock}
                          className=" bg-main border-black text-white"
                        />
                        <Input
                          type="password"
                          placeholder="Password"
                          {...field}
                          className="h-14 text-base border border-l-0 bg-gray-200 text-black border-black placeholder-black rounded-r-md"
                        />
                      </div>
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                disabled={loading}
                className="w-96 h-14 text-base bg-main hover:bg-green-900 text-white border border-green-800 transition-colors duration-300"
                type="submit"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" />
                    Please wait
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
            <Link
              to={"/signup"}
              className="font-roboto font-semibold text-end mt-6 text-primary-red underline text-main "
            >
              Sign Up
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
