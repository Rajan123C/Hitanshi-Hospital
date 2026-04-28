import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { 
  Search, 
  Calendar as CalendarIcon, 
  MapPin, 
  Star, 
  ShieldCheck, 
  Users, 
  Activity,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Stethoscope,
  HeartPulseIcon
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-200 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-teal-100 blur-[100px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              Trusted by 50,000+ patients
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              Healthcare <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                Redefined.
              </span>
            </h1>
            
            <p className="text-xl text-slate-500 leading-relaxed max-w-lg animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
              Book appointments with top-tier medical experts in seconds. 
              Modern care for your modern life.
            </p>

            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
              <Link href="/doctors">
                <Button size="lg" className="rounded-full h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/25 group">
                  Find a Doctor 
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="ghost" size="lg" className="rounded-full h-14 px-8 text-lg font-bold text-slate-600">
                  View Services
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200/60 animate-in fade-in slide-in-from-bottom-20 duration-700 delay-400">
              <div>
                <p className="text-3xl font-bold text-slate-900">1k+</p>
                <p className="text-sm text-slate-500 font-medium">Expert Doctors</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">50k+</p>
                <p className="text-sm text-slate-500 font-medium">Happy Patients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">4.9/5</p>
                <p className="text-sm text-slate-500 font-medium">Average Rating</p>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in duration-1000 delay-200">
            <GlassCard intensity="medium" className="p-2 relative overflow-hidden aspect-square rounded-[32px] shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent -z-10"></div>
              <Image 
                src="/hero-illustration.png" 
                alt="Medical Illustration" 
                fill
                className="object-cover rounded-[24px]"
                priority
              />
            </GlassCard>
            
            {/* Floating UI Elements */}
            <GlassCard className="absolute -bottom-6 -left-12 p-4 flex items-center gap-4 animate-bounce duration-[3000ms] shadow-xl">
              <div className="h-12 w-12 bg-teal-500 rounded-full flex items-center justify-center text-white">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Appointment Confirmed</p>
                <p className="text-xs text-slate-500">Dr. Sarah Johnson, 10:00 AM</p>
              </div>
            </GlassCard>

            <GlassCard className="absolute top-12 -right-8 p-4 flex flex-col items-center gap-1 shadow-xl">
              <div className="flex text-amber-400 mb-1">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-sm font-bold text-slate-900">5.0 Rating</p>
              <p className="text-xs text-slate-500">Based on 2.5k reviews</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Integrated Search Bar */}
      <section className="container mx-auto px-4 -mt-16 relative z-30">
        <GlassCard intensity="high" className="p-4 lg:p-6 shadow-2xl border-white/60">
          <div className="grid lg:grid-cols-4 gap-4 items-center">
            <div className="flex items-center gap-3 px-4 border-r border-slate-100 last:border-0 h-10">
              <Search className="text-primary h-5 w-5 shrink-0" />
              <input 
                type="text" 
                placeholder="Doctor name or specialty" 
                className="bg-transparent border-none focus:ring-0 text-slate-900 font-semibold w-full outline-none placeholder:text-slate-400"
              />
            </div>
            <div className="flex items-center gap-3 px-4 border-r border-slate-100 last:border-0 h-10">
              <MapPin className="text-teal-500 h-5 w-5 shrink-0" />
              <select className="bg-transparent border-none focus:ring-0 text-slate-900 font-semibold w-full outline-none cursor-pointer">
                <option>New York, USA</option>
                <option>London, UK</option>
                <option>Mumbai, India</option>
              </select>
            </div>
            <div className="flex items-center gap-3 px-4 border-r border-slate-100 last:border-0 h-10">
              <CalendarIcon className="text-blue-500 h-5 w-5 shrink-0" />
              <select className="bg-transparent border-none focus:ring-0 text-slate-900 font-semibold w-full outline-none cursor-pointer">
                <option>Select Date</option>
                <option>Tomorrow</option>
                <option>Next Week</option>
              </select>
            </div>
            <Button size="lg" className="rounded-2xl bg-primary hover:bg-primary/90 h-14 font-bold text-lg">
              Search Now
            </Button>
          </div>
        </GlassCard>
      </section>

      {/* Trust Badges / Partners */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-slate-400 font-bold tracking-widest text-xs uppercase mb-12">Trusted by Leading Institutions</p>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="text-2xl font-black text-slate-900">MAYO CLINIC</div>
            <div className="text-2xl font-black text-slate-900">NHS</div>
            <div className="text-2xl font-black text-slate-900">KAISER</div>
            <div className="text-2xl font-black text-slate-900">STANFORD</div>
            <div className="text-2xl font-black text-slate-900">COLUMBIA</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">The Future of Care</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">We've built a platform that puts the patient first. Experience the difference of premium healthcare.</p>
        </div>
        
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="group p-8 rounded-[32px] bg-white border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 hover:-translate-y-2">
              <div className={`h-16 w-16 rounded-2xl bg-${feature.color}-50 flex items-center justify-center text-${feature.color}-600 mb-8 transition-transform duration-500 group-hover:scale-110`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6">{feature.description}</p>
              <Link href="#" className="inline-flex items-center text-primary font-bold group/link">
                Learn more <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8">What our community is saying</h2>
              <p className="text-slate-400 text-xl mb-12">Join thousands of patients who have found their ideal care through MediBook.</p>
              <div className="flex gap-4">
                <Button variant="outline" className="rounded-full h-12 w-12 border-slate-700 hover:bg-slate-800">
                  <ChevronRight className="rotate-180" />
                </Button>
                <Button variant="outline" className="rounded-full h-12 w-12 border-slate-700 hover:bg-slate-800">
                  <ChevronRight />
                </Button>
              </div>
            </div>
            <div className="relative">
              <GlassCard className="bg-white/10 border-white/10 p-10 backdrop-blur-xl">
                <div className="flex text-amber-400 mb-6">
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                </div>
                <p className="text-2xl italic leading-relaxed mb-8 text-slate-200">
                  "MediBook completely changed how I manage my family's health. The interface is stunning and booking is actually a joy. Truly world-class."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-slate-700"></div>
                  <div>
                    <p className="font-bold text-white">Alex Rivera</p>
                    <p className="text-slate-400 text-sm">Product Lead at Vercel</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <HeartPulseIcon size={18} />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                MediBook
              </span>
            </Link>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              Leading the digital transformation of healthcare. 
              Modern solutions for patients and practitioners worldwide.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'LinkedIn'].map(social => (
                <Link key={social} href="#" className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                  <Activity size={18} />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Platform</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><Link href="#" className="hover:text-primary transition-colors">Find Doctors</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Specialists</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Video Consultation</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Mobile App</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-12 mt-12 border-t border-slate-50 text-center text-slate-400 text-sm font-medium">
          © 2024 MediBook Inc. All rights reserved. Built with love by Antigravity.
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: <UsersIcon className="h-8 w-8" />,
    color: "blue",
    title: "1k+ Certified Experts",
    description: "Every doctor on our platform is rigorously vetted for quality and experience.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    color: "teal",
    title: "Secure & Private",
    description: "Your health records are encrypted and stored with the highest security standards.",
  },
  {
    icon: <CalendarIcon className="h-8 w-8" />,
    color: "indigo",
    title: "Instant Booking",
    description: "Book appointments in 3 clicks with real-time availability sync.",
  },
];

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}
