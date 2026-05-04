"use client";

import { DoctorCard } from "@/components/doctors/doctor-card";
import { GlassCard } from "@/components/ui/glass-card";
import { Phone, CheckCircle2 } from "lucide-react";

const specialists = [
  {
    id: "1",
    name: "Dr. Priti Sharma",
    specialization: "Obstetrics & Gynecology",
    department: "Women's Health",
    qualifications: "MBBS, MS (Obs & Gyn)",
    experience: 35,
    fees: 700,
    rating: 4.9,
    avatar: "/dr-priti-sharma-final-real.jpg",
    gender: "F",
  },
  {
    id: "2",
    name: "Dr. R.K. Sharma",
    specialization: "Diabetologist",
    department: "Chronic Care",
    qualifications: "MBBS, PGDD (Diabetology)",
    experience: 25,
    fees: 600,
    rating: 4.8,
    avatar: "/dr-rk-sharma-final-real.png",
    gender: "M",
  },
  {
    id: "3",
    name: "Dr. Anjali Gupta",
    specialization: "Pediatrician",
    department: "Child Care",
    qualifications: "MBBS, MD (Pediatrics)",
    experience: 12,
    fees: 500,
    rating: 4.7,
    avatar: null,
    gender: "F",
  },
  {
    id: "4",
    name: "Dr. Vikram Singh",
    specialization: "Orthopedic Surgeon",
    department: "Bone & Joint",
    qualifications: "MBBS, MS (Orthopaedics)",
    experience: 15,
    fees: 800,
    rating: 4.9,
    avatar: null,
    gender: "M",
  },
  {
    id: "5",
    name: "Dr. Sameer Khan",
    specialization: "Cardiologist",
    department: "Heart Health",
    qualifications: "MBBS, MD, DM (Cardiology)",
    experience: 18,
    fees: 1000,
    rating: 4.8,
    avatar: null,
    gender: "M",
  },
  {
    id: "6",
    name: "Dr. Aditi Agarwal",
    specialization: "General Surgeon",
    department: "Surgical Care",
    qualifications: "MBBS, MS (Surgery)",
    experience: 10,
    fees: 600,
    rating: 4.6,
    avatar: null,
    gender: "F",
  },
  {
    id: "7",
    name: "Dr. Arun Dubey",
    specialization: "General Physician",
    department: "Internal Medicine",
    qualifications: "MBBS, MD (General Medicine)",
    experience: 22,
    fees: 500,
    rating: 4.8,
    avatar: null,
    gender: "M",
  },
  {
    id: "8",
    name: "Dr. Divya Baang",
    specialization: "General Physician",
    department: "Internal Medicine",
    qualifications: "MBBS",
    experience: 8,
    fees: 400,
    rating: 4.5,
    avatar: null,
    gender: "F",
  },
  {
    id: "9",
    name: "Dr. Kavita Vishwakarma",
    specialization: "General Physician",
    department: "Internal Medicine",
    qualifications: "MBBS",
    experience: 7,
    fees: 400,
    rating: 4.4,
    avatar: null,
    gender: "F",
  },
  {
    id: "10",
    name: "Dr. Nikhil Agarwal",
    specialization: "General Physician",
    department: "Internal Medicine",
    qualifications: "MBBS, MD",
    experience: 14,
    fees: 500,
    rating: 4.7,
    avatar: null,
    gender: "M",
  },
  {
    id: "11",
    name: "Dr. Sonal Gohil",
    specialization: "General Physician",
    department: "Internal Medicine",
    qualifications: "MBBS",
    experience: 11,
    fees: 400,
    rating: 4.6,
    avatar: null,
    gender: "F",
  },
  {
    id: "12",
    name: "Dr. Swati Bamane",
    specialization: "Gynaecologist & Obstetrician (MS)",
    department: "Women's Health",
    qualifications: "MBBS, MS (Obs & Gyn)",
    experience: 13,
    fees: 500,
    rating: 4.8,
    avatar: null,
    gender: "F",
  },
  {
    id: "13",
    name: "Dr. Vijay Sharnangat",
    specialization: "General Physician",
    department: "Internal Medicine",
    qualifications: "MBBS, MD",
    experience: 20,
    fees: 500,
    rating: 4.9,
    avatar: null,
    gender: "M",
  },
];

export default function DoctorsPage() {
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {specialists.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))}
        </div>

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

