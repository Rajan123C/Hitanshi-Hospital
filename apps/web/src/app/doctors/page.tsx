"use client";

import { useEffect, useState } from "react";
import { DoctorCard } from "@/components/doctors/doctor-card";
import { GlassCard } from "@/components/ui/glass-card";
import { Phone, CheckCircle2, Loader2, Stethoscope, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { api, ApiResponse } from "@/lib/api";

// Fallback data for Hitanshi Hospital specialists to ensure site never looks broken
const FALLBACK_DOCTORS = [
  {
    id: "fb-1",
    user: { name: "Dr. Priti Sharma", avatar: null },
    specialization: "Obstetrics & Gynecology",
    gender: "F",
    qualifications: "MBBS, MS (Obs & Gyn)",
    fees: 700,
    experience: 35,
    hospital: "Hitanshi Hospital",
    city: "Mira Road",
    bio: "Senior consultant with 35+ years of experience in high-risk pregnancy and maternity care."
  },
  {
    id: "fb-2",
    user: { name: "Dr. R.K. Sharma", avatar: null },
    specialization: "Diabetologist & Medicine",
    gender: "M",
    qualifications: "MBBS, PGDD (Diabetology)",
    fees: 600,
    experience: 25,
    hospital: "Hitanshi Hospital",
    city: "Mira Road",
    bio: "Expert in modern diabetes management and lifestyle medicine since 2007."
  },
  {
    id: "fb-3",
    user: { name: "Dr. Swati Bamane", avatar: null },
    specialization: "Gynaecologist & Obstetrician",
    gender: "F",
    qualifications: "MBBS, MS (Obs & Gyn)",
    fees: 500,
    experience: 13,
    hospital: "Hitanshi Hospital",
    city: "Mira Road",
    bio: "Specialist in laparoscopic surgery and comprehensive women's health."
  },
  {
    id: "fb-4",
    user: { name: "Dr. Aditi Agarwal", avatar: null },
    specialization: "General Surgeon",
    gender: "F",
    qualifications: "MBBS, MS (Surgery)",
    fees: 600,
    experience: 10,
    hospital: "Hitanshi Hospital",
    city: "Mira Road",
    bio: "Focused on minimally invasive surgical procedures and post-operative care."
  },
  {
    id: "fb-5",
    user: { name: "Dr. Arun Dubey", avatar: null },
    specialization: "General Physician",
    gender: "M",
    qualifications: "MBBS, MD (Medicine)",
    fees: 500,
    experience: 22,
    hospital: "Hitanshi Hospital",
    city: "Mira Road",
    bio: "Senior physician specializing in internal medicine and geriatric care."
  },
  {
    id: "fb-6",
    user: { name: "Dr. Nikhil Agarwal", avatar: null },
    specialization: "General Physician",
    gender: "M",
    qualifications: "MBBS, MD",
    fees: 500,
    experience: 14,
    hospital: "Hitanshi Hospital",
    city: "Mira Road",
    bio: "Dedicated physician providing comprehensive primary care for all age groups."
  }
];

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUsingFallback, setIsUsingFallback] = useState(false);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    setIsLoading(true);
    setIsUsingFallback(false);
    try {
      const res = (await api.get("/doctors?limit=50")) as ApiResponse<{ doctors: any[] }>;
      if (res.success && res.data && res.data.doctors && res.data.doctors.length > 0) {
        setDoctors(res.data.doctors);
      } else {
        // Fallback if API returns empty list
        setDoctors(FALLBACK_DOCTORS);
        setIsUsingFallback(true);
      }
    } catch (err: any) {
      console.error("Failed to fetch doctors", err);
      // Fallback if API is unreachable
      setDoctors(FALLBACK_DOCTORS);
      setIsUsingFallback(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 px-4 py-16 lg:py-24">
        <div className="container mx-auto text-center">
          <p className="text-[#0F4C81] font-bold text-xs uppercase tracking-[0.2em] mb-4">Hitanshi Hospital Specialists</p>
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">Meet Our Experts</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            Book an OPD appointment with our world-class medical team.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:px-16">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <Loader2 className="h-10 w-10 text-[#0F4C81] animate-spin" />
            <p className="text-slate-500 font-bold text-lg tracking-tight">Searching Specialists...</p>
          </div>
        ) : (
          <div className="space-y-12">
            {isUsingFallback && (
              <div className="max-w-4xl mx-auto mb-10 bg-blue-50/50 border border-blue-100 rounded-2xl p-4 flex items-center gap-3 text-blue-700 text-sm font-medium">
                <AlertCircle size={18} className="shrink-0" />
                <span>You are viewing our verified permanent specialist list. Online booking is currently in offline mode.</span>
              </div>
            )}
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {doctors.map((doc) => (
                <DoctorCard key={doc.id} doctor={doc} />
              ))}
            </div>
          </div>
        )}

        {/* Hospital Info Banner */}
        <div className="max-w-4xl mx-auto mt-20">
          <GlassCard intensity="low" className="p-10 border-none bg-white shadow-xl rounded-[2.5rem]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="h-16 w-16 rounded-2xl bg-[#0F4C81]/10 flex items-center justify-center text-[#0F4C81]">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-xl mb-1">Direct OPD Assistance</h3>
                  <p className="text-slate-500 text-base font-medium">Call: <a href="tel:+919029921938" className="text-[#0F4C81] font-bold">+91 90299 21938</a></p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-black text-teal-600 bg-teal-50 px-5 py-2.5 rounded-xl border border-teal-100">
                <CheckCircle2 size={18} className="text-teal-500" />
                <span>WALK-IN AVAILABLE</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
