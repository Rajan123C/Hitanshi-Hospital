"use client";

import * as React from "react";
import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Award, 
  CheckCircle2,
  Calendar,
  Phone,
  Video,
  ChevronLeft,
  ArrowRight,
  MessageSquare,
  ThumbsUp
} from "lucide-react";

export default function DoctorProfile({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  // Mock data for the demo
  const doctor = {
    name: "Dr. Sarah Johnson",
    specialty: "Senior Cardiologist",
    image: "/doctor-hero.png",
    rating: 4.9,
    reviews: 1250,
    experience: "15+ Years",
    location: "Mercy General Hospital, New York",
    fee: "$120",
    about: "Dr. Sarah Johnson is a world-renowned cardiologist with over 15 years of experience in treating complex heart conditions. She has been awarded the 'Best Cardiologist' award 3 times and is dedicated to providing personalized care to her patients.",
    education: [
      "MD - Harvard Medical School",
      "Residency - Johns Hopkins Hospital",
      "Fellowship - Mayo Clinic"
    ],
    specializations: [
      "Interventional Cardiology",
      "Heart Failure Management",
      "Preventive Cardiology"
    ],
    availability: [
      { day: "Mon", slots: ["09:00 AM", "10:30 AM", "02:00 PM"] },
      { day: "Tue", slots: ["11:00 AM", "01:30 PM", "04:00 PM"] },
      { day: "Wed", slots: ["09:30 AM", "12:00 PM", "03:00 PM"] }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Back Header */}
      <div className="bg-white border-b border-slate-200 py-4">
        <div className="container mx-auto px-4">
          <Link href="/doctors" className="inline-flex items-center text-slate-500 font-bold hover:text-primary transition-colors group">
            <ChevronLeft size={20} className="mr-1 transition-transform group-hover:-translate-x-1" />
            Back to Search
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Column: Doctor Info */}
          <div className="lg:col-span-2 space-y-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="relative h-64 w-64 rounded-[40px] overflow-hidden shadow-2xl shrink-0 ring-8 ring-white">
                <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
              </div>
              <div className="space-y-4">
                <Badge className="bg-blue-50 text-blue-600 border-none font-bold px-3 py-1 uppercase text-xs tracking-widest">Verified Specialist</Badge>
                <h1 className="text-5xl font-black text-slate-900 tracking-tight">{doctor.name}</h1>
                <p className="text-xl font-bold text-primary">{doctor.specialty}</p>
                <div className="flex items-center gap-4 py-2">
                  <div className="flex items-center gap-1 font-black text-slate-900">
                    <Star size={20} fill="currentColor" className="text-amber-400" />
                    {doctor.rating}
                    <span className="text-slate-400 font-medium text-sm ml-1">({doctor.reviews} reviews)</span>
                  </div>
                  <span className="text-slate-200">|</span>
                  <div className="flex items-center gap-2 text-slate-500 font-bold">
                    <Award size={20} className="text-slate-400" />
                    {doctor.experience} Experience
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  <MapPin size={20} className="text-primary" />
                  {doctor.location}
                </div>
              </div>
            </div>

            {/* Tabs / Content Sections */}
            <div className="space-y-12">
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">About Dr. Johnson</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{doctor.about}</p>
              </section>

              <div className="grid md:grid-cols-2 gap-12">
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Education</h3>
                  <div className="space-y-4">
                    {doctor.education.map((edu, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center text-primary mt-1">
                          <CheckCircle2 size={14} />
                        </div>
                        <p className="text-slate-600 font-medium">{edu}</p>
                      </div>
                    ))}
                  </div>
                </section>
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Specializations</h3>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specializations.map((spec, i) => (
                      <Badge key={i} variant="outline" className="rounded-full px-4 py-1.5 border-slate-200 text-slate-600 font-bold bg-white">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </section>
              </div>

              <section>
                <div className="flex justify-between items-center mb-8">
                   <h3 className="text-2xl font-bold text-slate-900">Patient Reviews</h3>
                   <Button variant="ghost" className="font-bold text-primary underline underline-offset-4">Write a review</Button>
                </div>
                <div className="space-y-6">
                  {[1, 2].map(i => (
                    <GlassCard key={i} className="p-8 border-slate-200/60">
                       <div className="flex justify-between items-start mb-6">
                          <div className="flex items-center gap-4">
                             <div className="h-12 w-12 rounded-full bg-slate-100"></div>
                             <div>
                                <p className="font-black text-slate-900">Marcus Wright</p>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">2 weeks ago</p>
                             </div>
                          </div>
                          <div className="flex text-amber-400">
                             <Star size={14} fill="currentColor" />
                             <Star size={14} fill="currentColor" />
                             <Star size={14} fill="currentColor" />
                             <Star size={14} fill="currentColor" />
                             <Star size={14} fill="currentColor" />
                          </div>
                       </div>
                       <p className="text-slate-600 leading-relaxed mb-6 font-medium italic">
                         "Extremely professional and knowledgeable. Dr. Johnson took the time to explain everything clearly and made me feel very comfortable during the entire visit."
                       </p>
                       <div className="flex items-center gap-4 text-slate-400">
                          <Button variant="ghost" size="sm" className="gap-2 font-bold hover:text-primary">
                             <ThumbsUp size={16} /> Helpful (12)
                          </Button>
                       </div>
                    </GlassCard>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Right Column: Booking Card */}
          <div className="sticky top-28">
            <GlassCard intensity="high" className="p-8 shadow-2xl border-white/60 ring-1 ring-black/5 overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-teal-500"></div>
               
               <div className="flex justify-between items-center mb-8">
                  <p className="text-xs text-slate-400 font-black uppercase tracking-[0.2em]">Consultation Fee</p>
                  <p className="text-3xl font-black text-slate-900">{doctor.fee}</p>
               </div>

               <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                       <Calendar size={18} className="text-primary" /> Select Consultation Type
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                       <button className="p-4 rounded-2xl border-2 border-primary bg-blue-50 text-primary font-bold flex flex-col items-center gap-2 transition-all">
                          <Video size={20} />
                          <span className="text-xs">Video Call</span>
                       </button>
                       <button className="p-4 rounded-2xl border-2 border-slate-100 hover:border-slate-200 text-slate-500 font-bold flex flex-col items-center gap-2 transition-all">
                          <MapPin size={20} />
                          <span className="text-xs">In-Clinic</span>
                       </button>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
                     <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                           <ShieldCheck size={20} />
                        </div>
                        <div>
                           <p className="text-xs font-bold text-slate-900">Insurance Accepted</p>
                           <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Vetted & Secure</p>
                        </div>
                     </div>
                  </div>

                  <Link href={`/doctors/${id}/book`}>
                    <Button size="lg" className="w-full rounded-2xl h-16 text-lg font-black bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 group">
                       Book Appointment
                       <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  
                  <div className="flex items-center justify-center gap-4">
                     <Button variant="ghost" size="sm" className="font-bold text-slate-500 gap-2">
                        <MessageSquare size={16} /> Send Message
                     </Button>
                     <span className="text-slate-200">|</span>
                     <Button variant="ghost" size="sm" className="font-bold text-slate-500 gap-2">
                        <Phone size={16} /> Contact Support
                     </Button>
                  </div>
               </div>
            </GlassCard>

            <div className="mt-8 flex flex-col items-center gap-2 text-center">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => <div key={i} className="h-10 w-10 rounded-full border-4 border-[#F8FAFC] bg-slate-200"></div>)}
                  <div className="h-10 w-10 rounded-full border-4 border-[#F8FAFC] bg-blue-100 text-primary flex items-center justify-center text-xs font-black">+12</div>
               </div>
               <p className="text-xs font-bold text-slate-400">Join 500+ patients booked this month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
