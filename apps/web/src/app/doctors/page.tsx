"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  Award,
  Heart,
  Activity,
  Baby,
  Stethoscope,
  CheckCircle2,
  Building2,
} from "lucide-react";

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 px-4 py-10 lg:py-14">
        <div className="container mx-auto text-center">
          <p className="text-[#0F4C81] font-bold text-sm uppercase tracking-[0.2em] mb-3">Hitankshi Hospital</p>
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">Choose Your Department</h1>
          <p className="text-slate-500 max-w-lg mx-auto">Select a specialist to view available OPD slots and book your appointment.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 max-w-4xl mx-auto">
          {/* Dr. Priti Sharma */}
          <GlassCard intensity="medium" className="p-0 border-slate-200/60 overflow-hidden hover:shadow-2xl hover:shadow-pink-500/5 transition-all duration-500 group flex flex-col md:flex-row">
            <div className="relative w-full md:w-72 h-72 md:h-auto overflow-hidden shrink-0 bg-gradient-to-br from-pink-50 to-rose-50">
              <Image src="/dr-priti-sharma-final-real.jpg" alt="Dr. Priti Sharma" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 300px" />
              <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm hover:bg-white border-pink-100 rounded-full px-3 py-1 font-bold text-pink-600">
                <Heart size={12} className="mr-1" /> Women&apos;s Health
              </Badge>
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-[#0F4C81] transition-colors">Dr. Priti Sharma</h2>
                  <p className="text-[#0F4C81] font-bold text-sm uppercase tracking-wider">Obstetrician &amp; Gynecologist</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-slate-50 rounded-lg text-xs font-semibold text-slate-600">MBBS — Lady Hardinge, Delhi</span>
                  <span className="px-2.5 py-1 bg-slate-50 rounded-lg text-xs font-semibold text-slate-600">MS (Obs &amp; Gyn) — Kasturba Medical</span>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed">
                  Expert in maternity care, high-risk pregnancies, and comprehensive women&apos;s health. A <strong>preferred destination for motherhood</strong> with successful daily deliveries. Co-founder of Hitankshi Hospital with 35+ years of clinical experience.
                </p>

                <div className="flex flex-wrap gap-4 py-3 border-y border-slate-100">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Award size={16} className="text-[#0F4C81]" /> 35+ Years Experience
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <MapPin size={16} className="text-teal-500" /> Mira Road (East)
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Building2 size={16} className="text-slate-400" /> Hitankshi Hospital
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  {["Maternity Care", "High-Risk Pregnancy", "Prenatal Checkups", "Gynecological Surgery", "Women's Wellness"].map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-pink-50 text-pink-600 rounded-full font-semibold">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4">
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Consultation</p>
                  <p className="text-lg font-bold text-slate-900">OPD Available</p>
                </div>
                <Button className="rounded-2xl px-6 h-12 font-bold bg-[#0F4C81] hover:bg-[#0d3f6b] shadow-lg shadow-[#0F4C81]/15 group/btn">
                  Book Appointment
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          </GlassCard>

          {/* Dr. RK Sharma */}
          <GlassCard intensity="medium" className="p-0 border-slate-200/60 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 group flex flex-col md:flex-row">
            <div className="relative w-full md:w-72 h-72 md:h-auto overflow-hidden shrink-0 bg-gradient-to-br from-blue-50 to-sky-50">
              <Image src="/dr-rk-sharma-final-real.png" alt="Dr. R.K. Sharma" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 300px" />
              <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm hover:bg-white border-blue-100 rounded-full px-3 py-1 font-bold text-blue-600">
                <Activity size={12} className="mr-1" /> Chronic Care
              </Badge>
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-[#0F4C81] transition-colors">Dr. R.K. Sharma</h2>
                  <p className="text-[#0F4C81] font-bold text-sm uppercase tracking-wider">Diabetologist &amp; General Medicine</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-slate-50 rounded-lg text-xs font-semibold text-slate-600">MBBS (2001)</span>
                  <span className="px-2.5 py-1 bg-slate-50 rounded-lg text-xs font-semibold text-slate-600">PGDD — Post Grad Diploma in Diabetology (2003)</span>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed">
                  Specialist in diabetes management, metabolic disorders, and preventive general medicine. Bringing <strong>20+ years of experience in Diabetology</strong> to provide personalized chronic care plans. Co-founder of Hitankshi Hospital.
                </p>

                <div className="flex flex-wrap gap-4 py-3 border-y border-slate-100">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Award size={16} className="text-[#0F4C81]" /> 25+ Years Experience
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <MapPin size={16} className="text-teal-500" /> Mira Road (East)
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Building2 size={16} className="text-slate-400" /> Hitankshi Hospital
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  {["Diabetes Management", "General Medicine", "Metabolic Disorders", "Preventive Health", "Chronic Care"].map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full font-semibold">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4">
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Consultation</p>
                  <p className="text-lg font-bold text-slate-900">OPD Available</p>
                </div>
                <Button className="rounded-2xl px-6 h-12 font-bold bg-[#0F4C81] hover:bg-[#0d3f6b] shadow-lg shadow-[#0F4C81]/15 group/btn">
                  Book Appointment
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Hospital Info Banner */}
        <div className="max-w-4xl mx-auto mt-12">
          <GlassCard intensity="high" className="p-8 border-[#0F4C81]/10 bg-[#0F4C81]/[0.03]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-[#0F4C81]/10 flex items-center justify-center text-[#0F4C81]">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Need Help Booking?</h3>
                  <p className="text-slate-500 text-sm">Call us directly at <a href="tel:+919029921938" className="text-[#0F4C81] font-semibold">+91 90299 21938</a></p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <CheckCircle2 size={16} className="text-teal-500" />
                <span>Walk-in OPD also available</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
