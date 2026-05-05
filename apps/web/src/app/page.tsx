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
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <Image 
            src="/real-hospital-building.png" 
            alt="Hitanshi Hospital Building" 
            fill 
            className="object-cover opacity-[0.08] saturate-0" 
            priority 
            sizes="100vw" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-[#F8FAFC]" />
        </div>
        
        {/* Decorative Blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#0F4C81]/10 blur-[120px] rounded-full -z-10 animate-pulse" />
        <div className="absolute bottom-[5%] left-[-10%] w-[500px] h-[500px] bg-teal-500/10 blur-[100px] rounded-full -z-10" />

        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
            <div className="space-y-10 relative z-10">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-white border border-slate-200 shadow-sm text-[#0F4C81] text-sm font-black tracking-wide">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0F4C81] text-white">
                  <ShieldCheck size={14} />
                </div>
                NABH ACCREDITED • SINCE 2007
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[0.95]">
                  Compassionate Care, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F4C81] via-[#0F4C81] to-teal-600">
                    Advanced Medicine.
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-xl font-medium">
                  Experience world-class healthcare in Mira Road. Specialized in <span className="text-slate-900 font-bold border-b-2 border-teal-500/30">Diabetes Management</span> and <span className="text-slate-900 font-bold border-b-2 border-pink-500/30">Safe Motherhood</span>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/doctors">
                  <Button size="lg" className="rounded-2xl h-16 px-10 text-xl font-black bg-[#0F4C81] hover:bg-[#0d3f6b] text-white shadow-2xl shadow-[#0F4C81]/40 group border-none">
                    Book OPD Appointment
                    <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a href="tel:+919029921938">
                  <Button variant="outline" size="lg" className="rounded-2xl h-16 px-10 text-xl font-bold text-slate-700 border-2 border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm">
                    <Phone className="mr-3 h-6 w-6 text-[#0F4C81]" />
                    Emergency Contact
                  </Button>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-10 pt-10 border-t border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
                    <Users size={28} />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-slate-900">10,000+</p>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Happy Patients</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Activity size={28} />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-slate-900">18+ Yrs</p>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Clinical Excellence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image / Visual */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(15,76,129,0.2)] border-8 border-white group">
                <Image 
                  src="/real-hospital-building.png" 
                  alt="Hitanshi Hospital Mira Road" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  priority 
                  sizes="(max-width: 768px) 100vw, 40vw" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C81]/40 via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 border border-white/50">
                  <Sparkles className="text-amber-500 h-5 w-5" />
                  <span className="font-black text-slate-900 text-sm">Mira Road&apos;s Trusted Hospital</span>
                </div>
              </div>

              {/* Live Status Card */}
              <GlassCard intensity="high" className="absolute -bottom-10 -left-10 p-6 flex flex-col gap-4 shadow-2xl border-white bg-white/80 w-72 rounded-[2rem]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Live Clinic Status</span>
                  <div className="flex items-center gap-2">
                    <span className="flex h-3 w-3 rounded-full bg-teal-500 animate-ping"></span>
                    <span className="text-xs font-bold text-teal-600 uppercase">Open</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 bg-teal-500/10 rounded-2xl flex items-center justify-center text-teal-600">
                    <Clock size={28} />
                  </div>
                  <div>
                    <p className="text-lg font-black text-slate-900">Normal Flow</p>
                    <p className="text-sm text-slate-500 font-medium">Wait time: ~15 mins</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Departments */}
      <section className="py-32 lg:py-48 bg-white" id="departments">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#0F4C81]/5 text-[#0F4C81] text-sm font-black tracking-[0.2em]">
              OUR SPECIALIZATIONS
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              World-Class Care in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-[#0F4C81]">Every Department.</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Skip the long queues at the reception. Book your OPD slot online with our senior consultants for immediate care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Dr. Priti Sharma Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-pink-500/5 blur-[80px] rounded-full -z-10 group-hover:bg-pink-500/10 transition-colors" />
              <GlassCard intensity="none" className="p-0 overflow-hidden border-slate-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 rounded-[3rem]">
                <div className="relative h-[450px] lg:h-[500px]">
                  <Image 
                    src="/dr-priti-sharma-final-real.jpg" 
                    alt="Dr. Priti Sharma" 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-6 left-6 bg-pink-500 text-white px-5 py-2 rounded-2xl font-black text-sm shadow-xl shadow-pink-500/30 flex items-center gap-2">
                    <Heart size={16} /> MOTHERHOOD EXPERT
                  </div>
                </div>
                
                <div className="p-10 lg:p-12 space-y-6 relative bg-white">
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 mb-2">Dr. Priti Sharma</h3>
                    <p className="text-[#0F4C81] font-black text-base uppercase tracking-widest">Obstetrics &amp; Gynecology</p>
                  </div>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium">
                    Mira Road&apos;s most trusted name in maternity care. Specializing in high-risk pregnancies and painless deliveries with over 35 years of clinical excellence.
                  </p>
                  <div className="flex items-center gap-6 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-slate-700 font-bold">
                      <Clock size={20} className="text-[#0F4C81]" /> 35+ Yrs
                    </div>
                    <div className="flex items-center gap-2 text-slate-700 font-bold">
                      <Stethoscope size={20} className="text-teal-500" /> Senior Consultant
                    </div>
                  </div>
                  <Link href="/doctors" className="block pt-4">
                    <Button className="w-full rounded-[1.5rem] h-16 text-xl font-black bg-[#0F4C81] hover:bg-[#0d3f6b] text-white shadow-xl shadow-[#0F4C81]/20 group/btn">
                      Book Appointment
                      <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </GlassCard>
            </div>

            {/* Dr. RK Sharma Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-blue-500/5 blur-[80px] rounded-full -z-10 group-hover:bg-blue-500/10 transition-colors" />
              <GlassCard intensity="none" className="p-0 overflow-hidden border-slate-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 rounded-[3rem]">
                <div className="relative h-[450px] lg:h-[500px]">
                  <Image 
                    src="/dr-rk-sharma-final-real.png" 
                    alt="Dr. R.K. Sharma" 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-6 left-6 bg-blue-600 text-white px-5 py-2 rounded-2xl font-black text-sm shadow-xl shadow-blue-600/30 flex items-center gap-2">
                    <Activity size={16} /> DIABETES SPECIALIST
                  </div>
                </div>
                
                <div className="p-10 lg:p-12 space-y-6 relative bg-white">
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 mb-2">Dr. R.K. Sharma</h3>
                    <p className="text-[#0F4C81] font-black text-base uppercase tracking-widest">Diabetologist &amp; Medicine</p>
                  </div>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium">
                    Pioneer in modern diabetes management and metabolic health. Providing personalized chronic care and preventive medicine since 2007.
                  </p>
                  <div className="flex items-center gap-6 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-slate-700 font-bold">
                      <Clock size={20} className="text-[#0F4C81]" /> 25+ Yrs
                    </div>
                    <div className="flex items-center gap-2 text-slate-700 font-bold">
                      <Sparkles size={20} className="text-teal-500" /> Lifestyle Expert
                    </div>
                  </div>
                  <Link href="/doctors" className="block pt-4">
                    <Button className="w-full rounded-[1.5rem] h-16 text-xl font-black bg-[#0F4C81] hover:bg-[#0d3f6b] text-white shadow-xl shadow-[#0F4C81]/20 group/btn">
                      Book Appointment
                      <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-32 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-teal-500/10 text-teal-700 text-sm font-black tracking-[0.2em]">
                INFRASTRUCTURE
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Built for <span className="text-teal-600">Healing.</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">
                Our 35-bed multi-specialty facility is equipped with modern medical technology to provide comprehensive emergency and elective care.
              </p>
            </div>
            <Link href="/doctors">
              <Button variant="outline" className="h-16 px-8 rounded-2xl border-2 border-slate-200 text-lg font-bold hover:bg-white shadow-sm">
                Explore All Facilities <ChevronRight size={20} className="ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((f, i) => (
              <div key={i} className={`relative group overflow-hidden rounded-[2.5rem] shadow-xl ${f.large ? 'md:col-span-2 lg:col-span-2 h-[450px]' : 'h-[450px]'}`}>
                <Image 
                  src={f.image} 
                  alt={f.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <div className={`h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-md mb-6 flex items-center justify-center text-white border border-white/20`}>
                    {f.icon}
                  </div>
                  <h3 className="text-3xl font-black text-white mb-3 tracking-tight">{f.title}</h3>
                  <p className="text-slate-300 text-lg font-medium leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & About Section */}
      <section className="py-32 lg:py-48 bg-[#0F4C81] text-white relative overflow-hidden" id="about">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-teal-500/10 blur-[150px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-black tracking-tight leading-tight">
                  Mira Road&apos;s Trusted <br />
                  <span className="text-teal-300">Healthcare Partner.</span>
                </h2>
                <p className="text-xl text-slate-300 font-medium leading-relaxed">
                  Founded in 2007 by the visionary duo Dr. R.K. Sharma and Dr. Priti Sharma, Hitanshi Hospital stands as a pillar of trust and medical excellence in the Mira-Bhayandar region.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "NABH Accredited", icon: <CheckCircle2 size={24} className="text-teal-400" /> },
                  { label: "35 Bed Capacity", icon: <Bed size={24} className="text-teal-400" /> },
                  { label: "15+ Departments", icon: <Building2 size={24} className="text-teal-400" /> },
                  { label: "24/7 Emergency", icon: <Siren size={24} className="text-teal-400" /> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                    {item.icon}
                    <span className="font-bold text-lg">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-teal-400/20 blur-[100px] rounded-full -z-10" />
              <GlassCard intensity="none" className="bg-white p-12 lg:p-16 rounded-[3.5rem] border-none shadow-2xl">
                <h3 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-3">
                  <div className="h-10 w-2 bg-[#0F4C81] rounded-full" /> Specialized Services
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {specializedServices.map((s, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="mt-1 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="text-slate-700 font-bold text-lg">{s}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <p className="text-slate-600 font-medium italic leading-relaxed">
                    &quot;Our mission is to provide premium medical care that is both advanced and affordable, ensuring every family in Mira Road has access to the best health services.&quot;
                  </p>
                  <p className="mt-4 text-slate-900 font-black">— Dr. R.K. Sharma, Medical Director</p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-24 pb-12 bg-white border-t border-slate-200" id="contact">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1.5fr_1fr_1fr] gap-20 pb-20">
            <div className="space-y-8">
              <Link href="/" className="flex items-center gap-4 group">
                <div className="relative h-[60px] w-auto">
                  <Image 
                    src="/logo.png" 
                    alt="Hitanshi Hospital Official Logo" 
                    width={60}
                    height={60}
                    className="h-[60px] w-auto object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-3xl tracking-tighter text-slate-900 leading-none">Hitanshi</span>
                  <span className="text-xs font-black text-[#0F4C81] uppercase tracking-[0.3em]">Hospital</span>
                </div>
              </Link>
              <p className="text-xl text-slate-500 font-medium max-w-sm leading-relaxed">
                Providing compassionate care and advanced medical excellence in Mira Road since 2007.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 max-w-sm">
                  <MapPin size={24} className="text-[#0F4C81] mt-1 shrink-0" />
                  <p className="text-slate-600 font-bold">Shanti Park, MTNL Road, Near Don Bosco School, Mira Road (East), MH — 401107</p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100 max-w-sm">
                  <Phone size={24} className="text-[#0F4C81] shrink-0" />
                  <a href="tel:+919029921938" className="text-[#0F4C81] text-lg font-black">+91 90299 21938</a>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-lg font-black text-slate-900 uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-4">
                {['Our Doctors', 'Book Appointment', 'Specializations', 'About Us', 'Contact'].map((link, i) => (
                  <li key={i}>
                    <Link href="/doctors" className="text-slate-500 hover:text-[#0F4C81] font-bold text-lg transition-colors flex items-center gap-2 group">
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-[#0F4C81] transition-colors" /> {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-lg font-black text-slate-900 uppercase tracking-widest">Flagship Departments</h4>
              <ul className="space-y-4">
                {[
                  'Obstetrics & Gynecology',
                  'Diabetology & Medicine',
                  'Pediatrics & Neonatology',
                  'Orthopaedics & Surgery',
                  '24/7 Emergency Care'
                ].map((dept, i) => (
                  <li key={i} className="text-slate-500 font-bold text-lg flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-teal-400" /> {dept}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 font-bold">
              © {new Date().getFullYear()} Hitanshi Hospital. All Rights Reserved.
            </p>
            <div className="flex gap-8">
              <Link href="#" className="text-slate-400 hover:text-slate-600 font-bold text-sm">Privacy Policy</Link>
              <Link href="#" className="text-slate-400 hover:text-slate-600 font-bold text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const facilities = [
  {
    title: "ICU & NICU Units",
    description: "Specialized critical care for adults and round-the-clock neonatology support for newborns.",
    image: "/hospital-ward.png",
    icon: <Bed size={28} />,
    large: true,
  },
  {
    title: "Advanced Modular OT",
    description: "Ultra-sterile operating theaters equipped for complex orthopedic and general surgeries.",
    image: "/hospital-ot.png",
    icon: <Scissors size={28} />,
  },
  {
    title: "Labour & Delivery",
    description: "Private and comfortable labour rooms designed for a safe and celebratory birthing experience.",
    image: "/hospital-labour.png",
    icon: <Baby size={28} />,
  },
  {
    title: "Emergency Care",
    description: "24/7 dedicated trauma center and emergency medicine department for immediate response.",
    image: "/hospital-corridor.png",
    icon: <Siren size={28} />,
  },
  {
    title: "Diagnostic Center",
    description: "Fully automated in-house pathology and imaging center for accurate medical diagnosis.",
    image: "/hospital-lab.png",
    icon: <Microscope size={28} />,
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
