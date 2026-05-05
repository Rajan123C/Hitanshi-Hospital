import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import {
  Calendar as CalendarIcon,
  Phone,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Heart,
  Activity,
  Clock,
  MapPin,
  Stethoscope,
  Baby,
  Pill,
  ShieldCheck,
  Users,
  Building2,
  HeartPulseIcon,
  TestTube,
  Siren,
  Scissors,
  Microscope,
  Bed,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-[#F8FAFC]" />
        </div>
        
        {/* Decorative Blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#0F4C81]/5 blur-[100px] rounded-full -z-10 animate-pulse" />

        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
            <div className="space-y-8 relative z-10">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm text-[#0F4C81] text-xs font-black tracking-wide">
                <div className="flex h-5 w-5 items-center justify-center rounded-lg bg-[#0F4C81] text-white">
                  <ShieldCheck size={12} />
                </div>
                NABH ACCREDITED • SINCE 2007
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]">
                  Compassionate Care, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F4C81] via-[#0F4C81] to-teal-600">
                    Advanced Medicine.
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-500 leading-relaxed max-w-xl font-medium">
                  Experience world-class healthcare in Mira Road. Specialized in <span className="text-slate-900 font-bold">Diabetes Management</span> and <span className="text-slate-900 font-bold">Safe Motherhood</span>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/doctors">
                  <Button size="lg" className="rounded-xl h-14 px-8 text-lg font-black bg-[#0F4C81] hover:bg-[#0d3f6b] text-white shadow-xl shadow-[#0F4C81]/30 group border-none">
                    Book OPD Appointment
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a href="tel:+919029921938">
                  <Button variant="outline" size="lg" className="rounded-xl h-14 px-8 text-lg font-bold text-slate-700 border-2 border-slate-200 bg-white hover:bg-slate-50 transition-all">
                    <Phone className="mr-3 h-5 w-5 text-[#0F4C81]" />
                    Emergency
                  </Button>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-xl font-black text-slate-900">10,000+</p>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Happy Patients</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Activity size={24} />
                  </div>
                  <div>
                    <p className="text-xl font-black text-slate-900">18+ Yrs</p>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image / Visual - Using the ACTUAL custom building photo */}
            <div className="relative">
              <div className="relative aspect-[4/4.5] rounded-[2rem] overflow-hidden shadow-[0_24px_48px_-12px_rgba(15,76,129,0.15)] border-4 border-white group">
                <Image 
                  src="/hospital-hero.png" 
                  alt="Hitanshi Hospital Mira Road Building" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  priority 
                  sizes="(max-width: 768px) 100vw, 40vw" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C81]/20 via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2 border border-white/50">
                  <Sparkles className="text-amber-500 h-4 w-4" />
                  <span className="font-black text-slate-900 text-xs uppercase tracking-tight">Trust of Mira Road</span>
                </div>
              </div>

              {/* Live Status Card */}
              <GlassCard intensity="high" className="absolute -bottom-6 -left-6 p-5 flex flex-col gap-3 shadow-xl border-white bg-white/90 w-64 rounded-[1.5rem]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Clinic Status</span>
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-teal-500 animate-ping"></span>
                    <span className="text-[10px] font-bold text-teal-600 uppercase">Open</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-base font-black text-slate-900">Normal Flow</p>
                    <p className="text-xs text-slate-500 font-medium">Wait: ~15 mins</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Departments */}
      <section className="py-20 lg:py-32 bg-white" id="departments">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#0F4C81]/5 text-[#0F4C81] text-[10px] font-black tracking-[0.2em] uppercase">
              OUR SPECIALIZATIONS
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
              World-Class Care in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-[#0F4C81]">Every Department.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              Book your OPD slot online with our senior consultants for immediate care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Dr. Priti Sharma Card */}
            <div className="group relative">
              <GlassCard intensity="low" className="p-0 overflow-hidden border-slate-100 bg-white shadow-lg hover:shadow-xl transition-all duration-500 rounded-[2rem]">
                <div className="relative h-[350px]">
                  <Image 
                    src="/dr-priti-sharma-final-real.jpg" 
                    alt="Dr. Priti Sharma" 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1.5 rounded-xl font-black text-[10px] shadow-lg flex items-center gap-1.5">
                    <Heart size={12} /> MOTHERHOOD EXPERT
                  </div>
                </div>
                
                <div className="p-8 space-y-4 relative bg-white">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-1">Dr. Priti Sharma</h3>
                    <p className="text-[#0F4C81] font-black text-xs uppercase tracking-widest">Obstetrics &amp; Gynecology</p>
                  </div>
                  <p className="text-slate-500 text-base leading-relaxed font-medium">
                    Mira Road&apos;s trusted maternity care expert. Specializing in high-risk pregnancies and painless deliveries.
                  </p>
                  <div className="flex items-center gap-4 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 text-slate-700 font-bold text-sm">
                      <Clock size={16} className="text-[#0F4C81]" /> 35+ Yrs
                    </div>
                  </div>
                  <Link href="/doctors" className="block pt-2">
                    <Button className="w-full rounded-xl h-12 text-base font-black bg-[#0F4C81] hover:bg-[#0d3f6b] text-white shadow-lg group/btn">
                      Book Appointment
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </GlassCard>
            </div>

            {/* Dr. RK Sharma Card */}
            <div className="group relative">
              <GlassCard intensity="low" className="p-0 overflow-hidden border-slate-100 bg-white shadow-lg hover:shadow-xl transition-all duration-500 rounded-[2rem]">
                <div className="relative h-[350px]">
                  <Image 
                    src="/dr-rk-sharma-final-real.png" 
                    alt="Dr. R.K. Sharma" 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-xl font-black text-[10px] shadow-lg flex items-center gap-1.5">
                    <Activity size={12} /> DIABETES SPECIALIST
                  </div>
                </div>
                
                <div className="p-8 space-y-4 relative bg-white">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-1">Dr. R.K. Sharma</h3>
                    <p className="text-[#0F4C81] font-black text-xs uppercase tracking-widest">Diabetologist &amp; Medicine</p>
                  </div>
                  <p className="text-slate-500 text-base leading-relaxed font-medium">
                    Pioneer in diabetes management. Providing personalized chronic care and medicine since 2007.
                  </p>
                  <div className="flex items-center gap-4 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 text-slate-700 font-bold text-sm">
                      <Clock size={16} className="text-[#0F4C81]" /> 25+ Yrs
                    </div>
                  </div>
                  <Link href="/doctors" className="block pt-2">
                    <Button className="w-full rounded-xl h-12 text-base font-black bg-[#0F4C81] hover:bg-[#0d3f6b] text-white shadow-lg group/btn">
                      Book Appointment
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-teal-500/10 text-teal-700 text-[10px] font-black tracking-[0.2em] uppercase">
                INFRASTRUCTURE
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                Built for <span className="text-teal-600">Healing.</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium">
                Our 35-bed facility is equipped with modern medical technology for comprehensive care.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f, i) => (
              <div key={i} className={`relative group overflow-hidden rounded-[1.5rem] shadow-md ${f.large ? 'md:col-span-2 lg:col-span-2 h-[350px]' : 'h-[350px]'}`}>
                <Image 
                  src={f.image} 
                  alt={f.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className={`h-10 w-10 rounded-lg bg-white/10 backdrop-blur-md mb-4 flex items-center justify-center text-white border border-white/20`}>
                    {f.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 tracking-tight">{f.title}</h3>
                  <p className="text-slate-300 text-base font-medium leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & About Section */}
      <section className="py-20 lg:py-32 bg-[#0F4C81] text-white relative overflow-hidden" id="about">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-5xl font-black tracking-tight leading-tight">
                  Mira Road&apos;s Trusted <br />
                  <span className="text-teal-300">Healthcare Partner.</span>
                </h2>
                <p className="text-lg text-slate-300 font-medium">
                  Founded in 2007 by Dr. R.K. Sharma and Dr. Priti Sharma, Hitanshi Hospital stands as a pillar of trust in the Mira-Bhayandar region.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "NABH Accredited", icon: <CheckCircle2 size={18} className="text-teal-400" /> },
                  { label: "35 Bed Capacity", icon: <Bed size={18} className="text-teal-400" /> },
                  { label: "15+ Departments", icon: <Building2 size={18} className="text-teal-400" /> },
                  { label: "24/7 Emergency", icon: <Siren size={18} className="text-teal-400" /> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                    {item.icon}
                    <span className="font-bold text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <GlassCard intensity="low" className="bg-white p-10 rounded-[2rem] border-none shadow-xl">
                <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-2">
                  <div className="h-8 w-1.5 bg-[#0F4C81] rounded-full" /> Specialized Services
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {specializedServices.map((s, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                        <CheckCircle2 size={12} />
                      </div>
                      <span className="text-slate-700 font-bold text-base">{s}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100 text-sm">
                  <p className="text-slate-600 font-medium italic leading-relaxed">
                    &quot;Our mission is to provide premium medical care that is both advanced and affordable.&quot;
                  </p>
                  <p className="mt-3 text-slate-900 font-black">— Dr. R.K. Sharma</p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 pb-8 bg-white border-t border-slate-200" id="contact">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1.5fr_1fr_1fr] gap-12 pb-12">
            <div className="space-y-6">
              <Link href="/" className="flex items-center gap-3 group">
                <Image src="/logo.png" alt="Logo" width={50} height={50} className="h-[50px] w-auto object-contain" />
                <div className="flex flex-col">
                  <span className="font-black text-2xl tracking-tighter text-slate-900 leading-none">Hitanshi</span>
                  <span className="text-[10px] font-black text-[#0F4C81] uppercase tracking-[0.2em]">Hospital</span>
                </div>
              </Link>
              <p className="text-base text-slate-500 font-medium max-w-sm">
                Compassionate care and medical excellence in Mira Road since 2007.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 max-w-sm text-sm">
                  <MapPin size={20} className="text-[#0F4C81] mt-0.5 shrink-0" />
                  <p className="text-slate-600 font-bold">Shanti Park, MTNL Road, Mira Road (East), MH — 401107</p>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100 max-w-sm">
                  <Phone size={20} className="text-[#0F4C81] shrink-0" />
                  <a href="tel:+919029921938" className="text-[#0F4C81] text-base font-black">+91 90299 21938</a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-3">
                {['Our Doctors', 'Book Appointment', 'About Us'].map((link, i) => (
                  <li key={i}>
                    <Link href="/doctors" className="text-slate-500 hover:text-[#0F4C81] font-bold text-base transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-400 font-bold text-sm">
              © {new Date().getFullYear()} Hitanshi Hospital.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const facilities = [
  {
    title: "ICU & NICU Units",
    description: "Critical care for adults and newborns.",
    image: "/hospital-ward.png",
    icon: <Bed size={20} />,
    large: true,
  },
  {
    title: "Modular OT",
    description: "Sterile theaters for complex surgeries.",
    image: "/hospital-ot.png",
    icon: <Scissors size={20} />,
  },
  {
    title: "Labour & Delivery",
    description: "Safe and comfortable birthing experience.",
    image: "/hospital-labour.png",
    icon: <Baby size={20} />,
  },
  {
    title: "Emergency Care",
    description: "24/7 dedicated trauma center.",
    image: "/hospital-corridor.png",
    icon: <Siren size={20} />,
  },
  {
    title: "Diagnostic Lab",
    description: "Fully automated in-house pathology.",
    image: "/hospital-lab.png",
    icon: <Microscope size={20} />,
  },
];

const specializedServices = [
  "High-Risk Pregnancy",
  "Diabetes Management",
  "Neonatal ICU (NICU)",
  "Orthopaedic Surgery",
  "Laparoscopic Surgery",
  "Pediatric Surgery",
  "General Medicine",
  "Trauma & Emergency",
];
