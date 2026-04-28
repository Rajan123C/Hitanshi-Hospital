"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Clock, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck,
  Award,
  Stethoscope
} from "lucide-react";

export default function DoctorListing() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* Search Header */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-40 px-4 py-4 lg:py-6">
        <div className="container mx-auto flex flex-col lg:flex-row gap-4 items-center">
          <h1 className="text-2xl font-bold text-slate-900 shrink-0">Find a Doctor</h1>
          <div className="flex-1 w-full flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-2xl border border-slate-200 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <Search className="text-slate-400 h-5 w-5 shrink-0" />
            <input 
              type="text" 
              placeholder="Search by name, specialty, or hospital..." 
              className="bg-transparent border-none focus:ring-0 text-slate-900 font-medium w-full outline-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-2xl h-11 px-5 border-slate-200 font-bold text-slate-600 lg:hidden">
              <Filter className="mr-2 h-4 w-4" /> Filters
            </Button>
            <div className="hidden lg:flex items-center gap-2">
              <Button variant="ghost" className="rounded-2xl font-bold text-slate-600">
                Specialty <ChevronDown className="ml-1 h-4 w-4 opacity-50" />
              </Button>
              <Button variant="ghost" className="rounded-2xl font-bold text-slate-600">
                Availability <ChevronDown className="ml-1 h-4 w-4 opacity-50" />
              </Button>
              <Button variant="ghost" className="rounded-2xl font-bold text-slate-600">
                Price <ChevronDown className="ml-1 h-4 w-4 opacity-50" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 flex gap-8">
        {/* Sidebar Filters - Desktop */}
        <div className="hidden lg:block w-72 shrink-0 space-y-8">
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <Stethoscope size={18} className="text-primary" />
              Specialization
            </h3>
            <div className="space-y-2">
              {['Cardiology', 'Dermatology', 'Neurology', 'Pediatrics', 'Psychiatry'].map(spec => (
                <label key={spec} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary/20 cursor-pointer" />
                  <span className="text-slate-600 font-medium group-hover:text-primary transition-colors">{spec}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <Star size={18} className="text-amber-500" />
              Rating
            </h3>
            <div className="space-y-2">
              {[4, 3, 2].map(rating => (
                <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary/20 cursor-pointer" />
                  <span className="text-slate-600 font-medium flex items-center gap-1 group-hover:text-primary transition-colors">
                    {rating}+ <Star size={14} fill="currentColor" className="text-amber-400" />
                  </span>
                </label>
              ))}
            </div>
          </div>

          <GlassCard className="p-6 bg-primary/5 border-primary/10 overflow-hidden relative">
            <div className="relative z-10">
              <h4 className="font-bold text-primary mb-2">Need immediate help?</h4>
              <p className="text-sm text-primary/70 mb-4 leading-relaxed">Book a video consultation and see a doctor within 15 minutes.</p>
              <Button size="sm" className="w-full rounded-xl bg-primary hover:bg-primary/90 font-bold shadow-lg shadow-primary/20">
                Book Video Call
              </Button>
            </div>
            <div className="absolute top-[-20px] right-[-20px] h-24 w-24 bg-primary/10 rounded-full -z-0"></div>
          </GlassCard>
        </div>

        {/* Doctor Grid */}
        <div className="flex-1 space-y-6">
          <div className="flex justify-between items-center mb-8">
            <p className="text-slate-500 font-medium">Showing <span className="text-slate-900 font-bold">128</span> verified doctors</p>
            <div className="flex items-center gap-2">
              <span className="text-slate-400 text-sm font-bold uppercase tracking-wider">Sort by:</span>
              <Button variant="ghost" size="sm" className="font-bold text-slate-900">Recommended <ChevronDown size={14} className="ml-1 opacity-50" /></Button>
            </div>
          </div>

          <div className="grid gap-6">
            {mockDoctors.map((doctor, i) => (
              <GlassCard key={i} className="p-0 border-slate-200/60 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 group flex flex-col md:flex-row">
                <div className="relative w-full md:w-64 h-64 md:h-auto overflow-hidden shrink-0">
                  <Image 
                    src={doctor.image} 
                    alt={doctor.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {doctor.topRated && (
                    <Badge className="absolute top-4 left-4 bg-teal-500 hover:bg-teal-600 border-none rounded-full px-3 py-1 font-bold">
                      <Star size={12} fill="currentColor" className="mr-1" /> Top Rated
                    </Badge>
                  )}
                </div>
                
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">{doctor.name}</h2>
                        <p className="text-primary font-bold text-sm uppercase tracking-wider">{doctor.specialty}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 font-bold text-slate-900 mb-1">
                          <Star size={18} fill="currentColor" className="text-amber-400" />
                          {doctor.rating}
                          <span className="text-slate-400 font-medium text-sm">({doctor.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-6 py-4 border-y border-slate-100">
                      <div className="flex items-center gap-2 text-slate-500">
                        <Award size={18} className="text-slate-400" />
                        <span className="font-medium text-sm">{doctor.experience} Exp</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <MapPin size={18} className="text-slate-400" />
                        <span className="font-medium text-sm">{doctor.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <ShieldCheck size={18} className="text-teal-500" />
                        <span className="font-medium text-sm text-teal-600">Insurance Accepted</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-8 pt-4">
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Consultation Fee</p>
                      <p className="text-2xl font-black text-slate-900">{doctor.fee}</p>
                    </div>
                    <div className="flex gap-3">
                      <Link href={`/doctors/${doctor.id}`}>
                        <Button variant="outline" className="rounded-2xl px-6 h-12 font-bold border-slate-200 text-slate-600 hover:bg-slate-50">
                          View Profile
                        </Button>
                      </Link>
                      <Link href={`/doctors/${doctor.id}/book`}>
                        <Button className="rounded-2xl px-6 h-12 font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 group/btn">
                          Book Now
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const mockDoctors = [
  {
    id: "dr-1",
    name: "Dr. Sarah Johnson",
    specialty: "Senior Cardiologist",
    image: "/doctor-hero.png",
    rating: 4.9,
    reviews: 1250,
    experience: "15 Years",
    location: "Mercy Hospital, NY",
    fee: "$120",
    topRated: true,
  },
  {
    id: "dr-2",
    name: "Dr. Michael Chen",
    specialty: "Neurology Specialist",
    image: "/doctor-female.png", // Using female image for now as placeholder
    rating: 4.8,
    reviews: 980,
    experience: "12 Years",
    location: "General Health, CA",
    fee: "$150",
    topRated: false,
  },
  {
    id: "dr-3",
    name: "Dr. Emily Smith",
    specialty: "Pediatric Consultant",
    image: "/doctor-hero.png",
    rating: 4.9,
    reviews: 2100,
    experience: "10 Years",
    location: "Kids Care Clinic, NY",
    fee: "$90",
    topRated: true,
  }
];
