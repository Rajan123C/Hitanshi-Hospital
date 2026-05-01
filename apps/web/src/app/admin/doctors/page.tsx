"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  UserPlus, 
  Search, 
  MoreVertical, 
  Stethoscope, 
  Mail, 
  Phone,
  ShieldCheck,
  ChevronRight,
  Plus
} from "lucide-react";
import Image from "next/image";

interface Doctor {
  id: string;
  name: string;
  email: string;
  specialization: string;
  status: "Active" | "Pending" | "Inactive";
  image: string;
}

const mockDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Priti Sharma",
    email: "priti@hitankshi.com",
    specialization: "Obstetrics & Gynecology",
    status: "Active",
    image: "/dr-priti-sharma-final-real.jpg",
  },
  {
    id: "2",
    name: "Dr. R.K. Sharma",
    email: "rk@hitankshi.com",
    specialization: "Diabetology & General Medicine",
    status: "Active",
    image: "/dr-rk-sharma-final-real.png",
  },
];

export default function AdminDoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      <div className="bg-white border-b border-slate-200 pt-10 pb-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-[#0F4C81] font-bold text-xs uppercase tracking-[0.2em] mb-2">
                <ShieldCheck size={14} /> Admin Portal
              </div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Doctor Management</h1>
              <p className="text-slate-500 mt-1">Add, edit, or manage the medical staff of Hitankshi Hospital.</p>
            </div>
            <Button className="rounded-2xl h-12 px-6 bg-[#0F4C81] hover:bg-[#0d3f6b] shadow-lg shadow-[#0F4C81]/20 font-bold group">
              <Plus className="mr-2 h-5 w-5 transition-transform group-hover:rotate-90" />
              Add New Doctor
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: "Total Doctors", value: "15", color: "text-[#0F4C81]", bg: "bg-blue-50" },
            { label: "Active Now", value: "8", color: "text-teal-600", bg: "bg-teal-50" },
            { label: "Pending Verification", value: "2", color: "text-amber-600", bg: "bg-amber-50" },
          ].map((stat, i) => (
            <GlassCard key={i} className="p-6 border-slate-200/60 flex items-center gap-5">
              <div className={`h-14 w-14 rounded-2xl ${stat.bg} flex items-center justify-center ${stat.color}`}>
                <Stethoscope size={28} />
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900 leading-none">{stat.value}</p>
                <p className="text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
            <Input 
              placeholder="Search by name, email or specialization..." 
              className="h-12 pl-12 rounded-2xl border-slate-200 focus:border-[#0F4C81] focus:ring-[#0F4C81]/10 bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="h-12 rounded-2xl px-6 border-slate-200 font-bold text-slate-600 hover:bg-white">
            Filters
          </Button>
        </div>

        {/* Doctor List */}
        <div className="grid gap-4">
          {mockDoctors.map((doc) => (
            <GlassCard key={doc.id} className="p-4 border-slate-200/60 hover:border-[#0F4C81]/30 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="relative h-16 w-16 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                    <Image src={doc.image} alt={doc.name} fill className="object-cover object-top" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#0F4C81] transition-colors">{doc.name}</h3>
                    <p className="text-sm font-semibold text-slate-500 flex items-center gap-1.5 mt-0.5">
                      <Stethoscope size={14} className="text-[#0F4C81]" />
                      {doc.specialization}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-8">
                  <div className="hidden lg:block">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Contact Info</p>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium text-slate-600 flex items-center gap-2">
                        <Mail size={14} className="text-slate-400" /> {doc.email}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 text-center md:text-left">Status</p>
                    <Badge className={`rounded-full px-3 py-1 font-bold ${
                      doc.status === "Active" ? "bg-teal-50 text-teal-600 hover:bg-teal-100 border-teal-100" : "bg-slate-50 text-slate-600 border-slate-100"
                    }`}>
                      <span className={`h-1.5 w-1.5 rounded-full mr-2 ${doc.status === "Active" ? "bg-teal-500" : "bg-slate-400"}`} />
                      {doc.status}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="rounded-xl text-slate-400 hover:text-[#0F4C81] hover:bg-[#0F4C81]/5">
                      <MoreVertical size={20} />
                    </Button>
                    <Button variant="ghost" className="rounded-xl font-bold text-[#0F4C81] hover:bg-[#0F4C81]/5">
                      View Profile <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
