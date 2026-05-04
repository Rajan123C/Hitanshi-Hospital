"use client";

import { BookingFlow } from "@/components/doctors/booking-flow";
import { GlassCard } from "@/components/ui/glass-card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BookPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-4 py-8">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/doctors">
            <Button variant="ghost" className="gap-2 font-bold text-slate-600 hover:text-[#0F4C81]">
              <ChevronLeft size={20} />
              Back to Doctors
            </Button>
          </Link>
          <div className="text-right">
            <p className="text-[10px] font-bold text-[#0F4C81] uppercase tracking-[0.2em]">Hitanshi Hospital</p>
            <h1 className="text-xl font-bold text-slate-900">Book OPD Appointment</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">OPD Booking System</h2>
            <p className="text-slate-500 font-medium">Follow the steps below to secure your consultation slot.</p>
          </div>

          <GlassCard intensity="high" className="p-8 lg:p-12 border-none bg-white shadow-2xl shadow-blue-900/5 rounded-[3rem]">
            <BookingFlow />
          </GlassCard>

          <div className="mt-12 text-center text-slate-400 text-sm font-medium">
            <p>For emergencies, please visit the hospital directly or call <a href="tel:+919029921938" className="text-[#0F4C81] font-bold">+91 90299 21938</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
