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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, UserPlus } from "lucide-react";

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.literal("PATIENT"),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const { register } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "PATIENT",
    },
  });

  async function onSubmit(data: RegisterFormValues) {
    setIsLoading(true);
    try {
      await register(data);
      toast.success("Account created successfully!");
    } catch (error: any) {
      toast.error(error.message || "Failed to create account. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4 bg-slate-50/50">
      <Card className="w-full max-w-md border-none bg-white shadow-2xl shadow-blue-900/10 rounded-[2rem]">
        <CardHeader className="space-y-2 flex flex-col items-center pt-10">
          <div className="mb-2 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <UserPlus className="h-8 w-8" />
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight text-slate-900 text-center">Create Account</CardTitle>
          <CardDescription className="text-base text-slate-500 font-medium text-center px-4">
            Register at Hitanshi Hospital to book appointments
          </CardDescription>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 font-bold">Full Name / पूरा नाम</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your full name" 
                        {...field} 
                        disabled={isLoading} 
                        className="h-12 rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                        className="h-12 rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all"
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
                        placeholder="Create a strong password"
                        {...field} 
                        disabled={isLoading} 
                        className="h-12 rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 font-bold">I am a / मैं एक हूँ</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isLoading}>
                      <FormControl>
                        <SelectTrigger className="h-12 rounded-xl border-slate-200">
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="PATIENT">Patient seeking care / मरीज</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full h-14 text-lg font-bold rounded-2xl bg-[#0F4C81] hover:bg-[#0d3f6b] shadow-lg shadow-[#0F4C81]/20 transition-all active:scale-[0.98]" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                Create Account / खाता बनाएं
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
              <span className="bg-white px-4 text-slate-400 font-bold tracking-widest">Already have an account?</span>
            </div>
          </div>
          <div className="text-center text-sm text-slate-500 font-medium">
            Already have an account?{" "}
            <Link href="/login" className="font-bold text-[#0F4C81] hover:underline underline-offset-4">
              Log in / लॉगिन करें
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
