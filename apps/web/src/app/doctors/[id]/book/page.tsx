"use client";

import * as React from "react";
import { useState, use } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  CheckCircle2, 
  ChevronLeft, 
  ArrowRight,
  User,
  ShieldCheck,
  CreditCard
} from "lucide-react";
import { format, addDays, startOfToday } from "date-fns";

export default function BookingFlow({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const dates = Array.from({ length: 7 }, (_, i) => addDays(startOfToday(), i));
  const times = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"];

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 pt-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 px-4">
          {[1, 2, 3].map((s) => (
            <React.Fragment key={s}>
              <div className="flex flex-col items-center gap-3 relative">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${
                  step >= s ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-slate-200 text-slate-500'
                }`}>
                  {step > s ? <CheckCircle2 size={20} /> : s}
                </div>
                <span className={`text-xs font-black uppercase tracking-widest ${step >= s ? 'text-primary' : 'text-slate-400'}`}>
                  {s === 1 ? 'Date' : s === 2 ? 'Time' : 'Confirm'}
                </span>
              </div>
              {s < 3 && <div className={`flex-1 h-0.5 mx-4 transition-all duration-500 ${step > s ? 'bg-primary' : 'bg-slate-200'}`}></div>}
            </React.Fragment>
          ))}
        </div>

        <GlassCard intensity="high" className="p-8 lg:p-12 shadow-2xl border-white/60 min-h-[500px] flex flex-col">
          {step === 1 && (
            <div className="space-y-10 animate-in fade-in slide-in-from-right-8 duration-500">
              <div className="text-center">
                <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Select a Date</h2>
                <p className="text-slate-500 font-medium">Choose your preferred day for the consultation.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
                {dates.map((date) => {
                  const isSelected = selectedDate?.toDateString() === date.toDateString();
                  return (
                    <button
                      key={date.toISOString()}
                      onClick={() => setSelectedDate(date)}
                      className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-2 ${
                        isSelected 
                        ? 'border-primary bg-blue-50 text-primary shadow-xl shadow-primary/10' 
                        : 'border-slate-100 hover:border-slate-200 text-slate-500'
                      }`}
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{format(date, "EEE")}</span>
                      <span className="text-2xl font-black leading-none">{format(date, "d")}</span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-10 mt-auto flex justify-end">
                <Button 
                  size="lg" 
                  disabled={!selectedDate}
                  onClick={handleNext}
                  className="rounded-2xl h-14 px-10 font-black text-lg bg-primary shadow-xl shadow-primary/20 group"
                >
                  Continue
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-10 animate-in fade-in slide-in-from-right-8 duration-500">
              <div className="text-center">
                <button onClick={handleBack} className="absolute left-8 top-8 text-slate-400 hover:text-primary transition-colors flex items-center gap-1 font-bold">
                  <ChevronLeft size={20} /> Back
                </button>
                <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Pick a Time</h2>
                <p className="text-slate-500 font-medium">Available slots for {format(selectedDate!, "MMMM do")}.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {times.map((time) => {
                  const isSelected = selectedTime === time;
                  return (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-2 ${
                        isSelected 
                        ? 'border-primary bg-blue-50 text-primary shadow-xl shadow-primary/10' 
                        : 'border-slate-100 hover:border-slate-200 text-slate-500'
                      }`}
                    >
                      <Clock size={20} className={isSelected ? 'text-primary' : 'text-slate-300'} />
                      <span className="text-sm font-black">{time}</span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-10 mt-auto flex justify-end">
                <Button 
                  size="lg" 
                  disabled={!selectedTime}
                  onClick={handleNext}
                  className="rounded-2xl h-14 px-10 font-black text-lg bg-primary shadow-xl shadow-primary/20 group"
                >
                  Confirm Slot
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-10 animate-in fade-in slide-in-from-right-8 duration-500">
              <div className="text-center">
                <button onClick={handleBack} className="absolute left-8 top-8 text-slate-400 hover:text-primary transition-colors flex items-center gap-1 font-bold">
                  <ChevronLeft size={20} /> Back
                </button>
                <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Final Confirmation</h2>
                <p className="text-slate-500 font-medium">Review your appointment details.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                         <User size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Practitioner</p>
                        <p className="text-lg font-bold text-slate-900">Dr. Sarah Johnson</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 font-bold">
                         <CalendarIcon size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Date & Time</p>
                        <p className="text-lg font-bold text-slate-900">{format(selectedDate!, "MMMM do, yyyy")} at {selectedTime}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-teal-50/50 rounded-2xl border border-teal-100">
                    <ShieldCheck size={20} className="text-teal-600 shrink-0" />
                    <p className="text-xs font-bold text-teal-900 leading-relaxed">
                      Your booking is protected by our Quality Guarantee. Cancel up to 24h before for a full refund.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                   <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-4">
                      <div className="flex justify-between items-center text-sm font-bold text-slate-500">
                         <span>Consultation Fee</span>
                         <span className="text-slate-900">$120.00</span>
                      </div>
                      <div className="flex justify-between items-center text-sm font-bold text-slate-500">
                         <span>Service Fee</span>
                         <span className="text-slate-900">$5.00</span>
                      </div>
                      <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xl font-black text-slate-900">
                         <span>Total</span>
                         <span>$125.00</span>
                      </div>
                   </div>

                   <Button className="w-full rounded-2xl h-16 text-lg font-black bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-900/10 gap-2">
                      <CreditCard size={20} /> Complete Payment
                   </Button>
                </div>
              </div>
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  );
}
