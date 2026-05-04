"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, Building2 } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginFormValues) {
    setIsLoading(true);
    try {
      await login(data);
      toast.success("Welcome back!");
    } catch (error: any) {
      toast.error(error.message || "Failed to login. Please check your credentials.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4 bg-slate-50/50">
      <Card className="w-full max-w-md border-none bg-white shadow-2xl shadow-blue-900/10 rounded-[2rem]">
        <CardHeader className="space-y-2 flex flex-col items-center pt-10">
          <div className="mb-2 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0F4C81]/10 text-[#0F4C81]">
            <Building2 className="h-8 w-8" />
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight text-slate-900 text-center">Hitanshi Hospital</CardTitle>
          <CardDescription className="text-base text-slate-500 font-medium">
            Log in to manage your appointments
          </CardDescription>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 font-bold">Email Address / ईमेल आईडी</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your email" 
                        {...field} 
                        disabled={isLoading} 
                        className="h-12 rounded-xl border-slate-200 focus:border-[#0F4C81] focus:ring-[#0F4C81]/20 transition-all"
                      />
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
                    <FormLabel className="text-slate-700 font-bold">Password / पासवर्ड</FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder="Enter your password"
                        {...field} 
                        disabled={isLoading} 
                        className="h-12 rounded-xl border-slate-200 focus:border-[#0F4C81] focus:ring-[#0F4C81]/20 transition-all"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full h-14 text-lg font-bold rounded-2xl bg-[#0F4C81] hover:bg-[#0d3f6b] shadow-lg shadow-[#0F4C81]/20 transition-all active:scale-[0.98]" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                Sign In / साइन इन करें
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-6 pb-10 px-8">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-100"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-400 font-bold tracking-widest">New Patient?</span>
            </div>
          </div>
          <div className="text-center text-sm text-slate-500 font-medium">
            Don't have an account?{" "}
            <Link href="/register" className="font-bold text-[#0F4C81] hover:underline underline-offset-4">
              Create an account / नया खाता बनाएं
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
