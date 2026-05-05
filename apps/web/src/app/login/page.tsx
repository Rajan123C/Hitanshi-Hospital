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
import { Loader2, Building2, Mail, Lock, Phone } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GoogleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const otpSchema = z.object({
  email: z.string().email("Invalid email address"),
  otp: z.string().length(6, "OTP must be 6 digits").optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;
type OtpFormValues = z.infer<typeof otpSchema>;

export default function LoginPage() {
  const { login, sendOtp, verifyOtp } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const otpForm = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      email: "",
      otp: "",
    },
  });

  async function onSubmit(data: LoginFormValues) {
    setIsLoading(true);
    try {
      await login(data);
      toast.success("Welcome back!");
    } catch (error: any) {
      toast.error(error.message || "Failed to login. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  }

  async function onSendOtp(data: OtpFormValues) {
    setIsLoading(true);
    try {
      await sendOtp(data.email);
      setOtpSent(true);
      toast.success("OTP sent to your email!");
    } catch (error: any) {
      toast.error(error.message || "Failed to send OTP.");
    } finally {
      setIsLoading(false);
    }
  }

  async function onVerifyOtp(data: OtpFormValues) {
    setIsLoading(true);
    try {
      await verifyOtp(data.email, data.otp!);
      toast.success("Logged in successfully!");
    } catch (error: any) {
      toast.error(error.message || "Invalid OTP.");
    } finally {
      setIsLoading(false);
    }
  }

  const handleGoogleLogin = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
    window.location.href = `${apiUrl}/auth/google`;
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4 bg-[#F8FAFC]">
      <Card className="w-full max-w-md border-none bg-white shadow-2xl shadow-blue-900/5 rounded-[2.5rem] overflow-hidden">
        <CardHeader className="space-y-2 flex flex-col items-center pt-12 pb-8">
          <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-[2rem] bg-[#0F4C81] text-white shadow-xl shadow-[#0F4C81]/20">
            <Building2 className="h-10 w-10" />
          </div>
          <CardTitle className="text-3xl font-extrabold tracking-tight text-slate-900 text-center">Hitanshi Hospital</CardTitle>
          <CardDescription className="text-base text-slate-500 font-semibold">
            Patient & Doctor Portal
          </CardDescription>
        </CardHeader>
        
        <CardContent className="px-10 pb-8">
          <Tabs defaultValue="password" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-100 p-1.5 rounded-2xl h-14">
              <TabsTrigger value="password" className="rounded-xl font-bold data-[state=active]:bg-white data-[state=active]:text-[#0F4C81] data-[state=active]:shadow-sm">Password</TabsTrigger>
              <TabsTrigger value="otp" className="rounded-xl font-bold data-[state=active]:bg-white data-[state=active]:text-[#0F4C81] data-[state=active]:shadow-sm">OTP Login</TabsTrigger>
            </TabsList>
            
            <TabsContent value="password">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-bold flex items-center gap-2">
                          <Mail size={16} className="text-[#0F4C81]" /> Email Address
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="name@example.com" 
                            {...field} 
                            disabled={isLoading} 
                            className="h-14 rounded-2xl border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#0F4C81] focus:ring-[#0F4C81]/20 transition-all text-lg"
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
                        <FormLabel className="text-slate-700 font-bold flex items-center gap-2">
                          <Lock size={16} className="text-[#0F4C81]" /> Password
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="password" 
                            placeholder="••••••••"
                            {...field} 
                            disabled={isLoading} 
                            className="h-14 rounded-2xl border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#0F4C81] focus:ring-[#0F4C81]/20 transition-all text-lg"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full h-16 text-xl font-black rounded-2xl bg-[#0F4C81] hover:bg-[#0d3f6b] text-white shadow-xl shadow-[#0F4C81]/30 transition-all active:scale-[0.98] mt-4" disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-3 h-6 w-6 animate-spin" />}
                    SIGN IN / साइन इन
                  </Button>
                </form>
              </Form>
            </TabsContent>
            
            <TabsContent value="otp">
              <Form {...otpForm}>
                <form onSubmit={otpForm.handleSubmit(otpSent ? onVerifyOtp : onSendOtp)} className="space-y-6">
                  <FormField
                    control={otpForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-bold flex items-center gap-2">
                          <Mail size={16} className="text-[#0F4C81]" /> Email Address
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="name@example.com" 
                            {...field} 
                            disabled={isLoading || otpSent} 
                            className="h-14 rounded-2xl border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#0F4C81] focus:ring-[#0F4C81]/20 transition-all text-lg"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {otpSent && (
                    <FormField
                      control={otpForm.control}
                      name="otp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-bold flex items-center gap-2">
                            <Phone size={16} className="text-[#0F4C81]" /> Enter 6-digit OTP
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="000000" 
                              {...field} 
                              disabled={isLoading} 
                              className="h-14 rounded-2xl border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#0F4C81] focus:ring-[#0F4C81]/20 transition-all text-lg text-center tracking-[0.5em] font-black"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  <Button type="submit" className="w-full h-16 text-xl font-black rounded-2xl bg-[#0F4C81] hover:bg-[#0d3f6b] text-white shadow-xl shadow-[#0F4C81]/30 transition-all active:scale-[0.98] mt-4" disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-3 h-6 w-6 animate-spin" />}
                    {otpSent ? "VERIFY OTP / सत्यापित करें" : "SEND OTP / ओटीपी भेजें"}
                  </Button>
                </form>
              </Form>
            </TabsContent>
          </Tabs>

          <div className="relative w-full my-10">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-100"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-400 font-black tracking-[0.2em]">OR CONTINUE WITH</span>
            </div>
          </div>

          <Button 
            variant="outline" 
            onClick={handleGoogleLogin}
            className="w-full h-16 text-lg font-bold rounded-2xl border-2 border-slate-100 hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
            disabled={isLoading}
          >
            <GoogleIcon />
            Sign in with Google
          </Button>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-6 pb-12 px-10 bg-slate-50/50 pt-10">
          <div className="text-center text-base text-slate-500 font-semibold">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-black text-[#0F4C81] hover:underline underline-offset-4 decoration-2">
              Create one now / नया खाता
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
