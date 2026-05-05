"use client";

import { useEffect, useState } from "react";
import { DoctorCard } from "@/components/doctors/doctor-card";
import { GlassCard } from "@/components/ui/glass-card";
import { Phone, CheckCircle2, Loader2, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { api, ApiResponse } from "@/lib/api";

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = (await api.get("/doctors?limit=50")) as ApiResponse<{ doctors: any[] }>;
      if (res.success && res.data && res.data.doctors) {
        if (res.data.doctors.length === 0) {
          setError("The doctor database appears to be empty. Please ensure the data is seeded.");
        } else {
          setDoctors(res.data.doctors);
        }
      } else {
        setError("Failed to retrieve doctor data from the server.");
      }
    } catch (err: any) {
      console.error("Failed to fetch doctors", err);
      setError("Unable to connect to the medical server. Please check your API configuration.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 px-4 py-16 lg:py-24">
        <div className="container mx-auto text-center">
          <p className="text-[#0F4C81] font-bold text-sm uppercase tracking-[0.2em] mb-4">Hitanshi Hospital</p>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Our Specialists</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            Book an OPD appointment with our world-class medical experts in Mira Road.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:px-16">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <Loader2 className="h-12 w-12 text-[#0F4C81] animate-spin" />
            <p className="text-slate-500 font-bold text-xl">Loading Specialists...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-6 bg-white rounded-[3rem] shadow-xl shadow-blue-900/5 max-w-4xl mx-auto px-6 text-center">
            <div className="h-20 w-20 rounded-full bg-red-50 flex items-center justify-center text-red-500">
              <Stethoscope className="h-10 w-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900">{error}</h3>
              <p className="text-slate-500 max-w-md mx-auto">This usually happens if the backend API URL is not correctly configured in your production environment variables (NEXT_PUBLIC_API_URL).</p>
            </div>
            <Button 
              onClick={() => fetchDoctors()} 
              className="rounded-xl h-12 px-8 bg-[#0F4C81] hover:bg-[#0d3f6b]"
            >
              Retry Connection
            </Button>
          </div>
        ) : doctors.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {doctors.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 space-y-4 bg-white rounded-[3rem] shadow-xl shadow-blue-900/5 max-w-4xl mx-auto">
            <Stethoscope className="h-20 w-20 text-slate-200" />
            <h3 className="text-2xl font-bold text-slate-900">No Specialists Found</h3>
            <p className="text-slate-500">We are currently updating our doctor database. Please check back later.</p>
          </div>
        )}

        {/* Hospital Info Banner */}
        <div className="max-w-4xl mx-auto mt-20">
          <GlassCard intensity="high" className="p-10 border-none bg-white shadow-2xl shadow-blue-900/5 rounded-[3rem]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="h-20 w-20 rounded-3xl bg-[#0F4C81]/10 flex items-center justify-center text-[#0F4C81]">
                  <Phone size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-2xl mb-1">Need Help Booking?</h3>
                  <p className="text-slate-500 text-lg font-medium">Call us at <a href="tel:+919029921938" className="text-[#0F4C81] font-bold">+91 90299 21938</a></p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-lg font-bold text-teal-600 bg-teal-50 px-6 py-3 rounded-2xl">
                <CheckCircle2 size={24} className="text-teal-500" />
                <span>Walk-in OPD Available</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
