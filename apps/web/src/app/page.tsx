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
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/real-hospital-building.png" alt="Hitanshi Hospital" fill className="object-cover opacity-15" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70" />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0F4C81]/5 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 blur-[100px] rounded-full -z-10" />

        <div className="container mx-auto px-6 lg:px-16 xl:px-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-24 items-center h-full">
          <div className="space-y-8 max-w-2xl lg:pl-16 xl:pl-32 pb-12 lg:pb-24 -mt-16 lg:-mt-32 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F4C81]/5 border border-[#0F4C81]/10 text-[#0F4C81] text-sm font-semibold">
              <Building2 size={14} />
              NABH Accredited Multi-Specialty Hospital — Since 2007
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Compassionate Care,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F4C81] to-teal-500">
                Advanced Medicine.
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-500 leading-relaxed max-w-lg">
              Specialized care for <strong className="text-slate-700">Diabetes</strong> and{" "}
              <strong className="text-slate-700">Motherhood</strong>. Book your OPD appointments
              online to skip the queue.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/doctors">
                <Button size="lg" className="rounded-full h-14 px-8 text-lg font-bold bg-[#0F4C81] hover:bg-[#0d3f6b] shadow-xl shadow-[#0F4C81]/20 group">
                  Book OPD Appointment
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="tel:+919029921938">
                <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg font-bold text-slate-700 border-slate-200 hover:bg-slate-50">
                  <Phone className="mr-2 h-5 w-5 text-[#0F4C81]" />
                  Call Now
                </Button>
              </a>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200/60">
              <div>
                <p className="text-3xl font-bold text-slate-900">18+</p>
                <p className="text-sm text-slate-500 font-medium">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">10k+</p>
                <p className="text-sm text-slate-500 font-medium">Happy Patients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">15+</p>
                <p className="text-sm text-slate-500 font-medium">Departments</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl shadow-[#0F4C81]/10 border border-white/60">
              <Image src="/real-hospital-building.png" alt="Hitanshi Hospital Building" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C81]/30 via-transparent to-transparent" />
            </div>
            {/* Floating Card: Live Status */}
            <GlassCard intensity="high" className="absolute -bottom-6 -left-8 p-4 flex flex-col gap-2 shadow-xl border-white/60 w-64">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Live OPD Status</span>
                <span className="flex h-2.5 w-2.5 rounded-full bg-teal-500 animate-pulse"></span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-teal-500/10 rounded-full flex items-center justify-center text-teal-600">
                  <Activity size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Accepting Walk-ins</p>
                  <p className="text-xs text-slate-500">Wait time: ~15 mins</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Department Cards — Main Focus */}
      <section className="py-20 lg:py-28 bg-white" id="departments">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#0F4C81] font-bold text-sm uppercase tracking-[0.2em] mb-3">Our Flagship Departments</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Choose Your Specialist</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-lg">Select a department to book your OPD appointment with our expert consultants.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Dr. Priti Sharma — Gynecology */}
            <GlassCard intensity="medium" className="p-0 overflow-hidden border-slate-200/60 hover:shadow-2xl hover:shadow-pink-500/5 transition-all duration-500 group">
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50">
                <Image src="/dr-priti-sharma-final-real.jpg" alt="Dr. Priti Sharma" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-pink-600 border border-pink-100">
                  <Heart size={12} className="inline mr-1" /> Women&apos;s Health
                </div>
              </div>
              <div className="p-6 lg:p-8 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">Dr. Priti Sharma</h3>
                  <p className="text-[#0F4C81] font-semibold text-sm uppercase tracking-wider">Obstetrics &amp; Gynecology</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-slate-50 rounded-lg text-xs font-semibold text-slate-600">MBBS</span>
                  <span className="px-2.5 py-1 bg-slate-50 rounded-lg text-xs font-semibold text-slate-600">MS (Obs &amp; Gyn)</span>
                  <span className="px-2.5 py-1 bg-slate-50 rounded-lg text-xs font-semibold text-slate-600">IMA Member</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Specialized in maternity care, high-risk pregnancies, and comprehensive women&apos;s health. A <strong>preferred destination for motherhood</strong> with successful daily deliveries. Creating a safe, welcoming experience for expecting mothers since 2007.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-500 border-t border-slate-100 pt-4">
                  <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#0F4C81]" /> 35+ Yrs Exp.</span>
                  <span className="flex items-center gap-1.5"><MapPin size={14} className="text-teal-500" /> Mira Road</span>
                </div>
                <Link href="/book" className="block">
                  <Button className="w-full rounded-2xl h-12 font-bold bg-[#0F4C81] hover:bg-[#0d3f6b] shadow-lg shadow-[#0F4C81]/15 group/btn">
                    Book Appointment
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </GlassCard>

            {/* Dr. RK Sharma — Diabetology */}
            <GlassCard intensity="medium" className="p-0 overflow-hidden border-slate-200/60 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 group">
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-blue-50 to-sky-50">
                <Image src="/dr-rk-sharma-final-real.png" alt="Dr. R.K. Sharma" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-blue-600 border border-blue-100">
                  <Activity size={12} className="inline mr-1" /> Chronic Care
                </div>
              </div>
              <div className="p-6 lg:p-8 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">Dr. R.K. Sharma</h3>
                  <p className="text-[#0F4C81] font-semibold text-sm uppercase tracking-wider">Diabetologist &amp; General Medicine</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-slate-50 rounded-lg text-xs font-semibold text-slate-600">MBBS</span>
                  <span className="px-2.5 py-1 bg-slate-50 rounded-lg text-xs font-semibold text-slate-600">PGDD (Diabetology)</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Expert in diabetes management, metabolic disorders, and preventive general medicine. Bringing <strong>20+ years of experience in Diabetology</strong> to provide personalized chronic care plans with a focus on long-term patient wellness.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-500 border-t border-slate-100 pt-4">
                  <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#0F4C81]" /> 25+ Yrs Exp.</span>
                  <span className="flex items-center gap-1.5"><MapPin size={14} className="text-teal-500" /> Mira Road</span>
                </div>
                <Link href="/book" className="block">
                  <Button className="w-full rounded-2xl h-12 font-bold bg-[#0F4C81] hover:bg-[#0d3f6b] shadow-lg shadow-[#0F4C81]/15 group/btn">
                    Book Appointment
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Hospital Services / Facilities Grid */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 text-center mb-16">
          <p className="text-teal-600 font-bold text-sm uppercase tracking-[0.2em] mb-3">Modern Infrastructure</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">State-of-the-Art Facilities</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Compassionate family care combined with cutting-edge medical technology.</p>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Featured Image 1 */}
            <div className="lg:col-span-2 relative h-[300px] rounded-[32px] overflow-hidden shadow-lg group">
              <Image src="/hospital-ward.png" alt="Hospital Ward" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 66vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  <Bed className="text-teal-400" /> Fully Equipped ICU &amp; NICU
                </h3>
                <p className="text-slate-200">Advanced critical care for adults and specialized care for newborns.</p>
              </div>
            </div>

            {/* Facility 2 */}
            {/* Facility 2 — Advanced Modular OT */}
            <div className="relative h-[300px] rounded-[32px] overflow-hidden shadow-lg group">
              <Image src="/hospital-ot.png" alt="Advanced Modular OT" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Scissors className="text-blue-400 h-5 w-5" /> Advanced Modular OT
                </h3>
                <p className="text-slate-200 text-sm">Sterile, state-of-the-art operating theaters equipped for complex surgeries.</p>
              </div>
            </div>

            {/* Facility 3 */}
            {/* Facility 3 — Dedicated Labour Room */}
            <div className="relative h-[300px] rounded-[32px] overflow-hidden shadow-lg group">
              <Image src="/hospital-labour.png" alt="Dedicated Labour Room" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Baby className="text-pink-400 h-5 w-5" /> Dedicated Labour Room
                </h3>
                <p className="text-slate-200 text-sm">Comfortable environment for daily successful deliveries and maternity care.</p>
              </div>
            </div>

            {/* Featured Image 2 */}
            <div className="relative h-[300px] rounded-[32px] overflow-hidden shadow-lg group">
              <Image src="/hospital-corridor.png" alt="Hospital Corridor" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Siren className="text-red-400" /> Emergency &amp; Trauma
                </h3>
                <p className="text-slate-200 text-sm">Round-the-clock emergency care available 24/7.</p>
              </div>
            </div>

            {/* Facility 5 */}
            {/* Facility 5 — Diagnostic Center */}
            <div className="relative h-[300px] rounded-[32px] overflow-hidden shadow-lg group">
              <Image src="/hospital-lab.png" alt="Diagnostic Center" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Microscope className="text-teal-400 h-5 w-5" /> Diagnostic Center
                </h3>
                <p className="text-slate-200 text-sm">In-house laboratory and modern imaging services for rapid diagnosis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Trust Section */}
      <section className="py-20 lg:py-28 bg-[#0F4C81] text-white overflow-hidden relative" id="about">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 blur-[120px] rounded-full" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-teal-300 font-bold text-sm uppercase tracking-[0.2em] mb-4">About Hitanshi Hospital</p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Your Health,{" "}
                <span className="text-teal-300">Our Priority</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Founded in 2007 by Dr. R.K. Sharma and Dr. Priti Sharma, Hitanshi Hospital began its journey as a humble 5-bed clinic. Today, it stands as a 35-bed multi-specialty, NABH-accredited facility in Mira Road. We combine advanced medicine with a deeply compassionate approach to family healthcare.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "NABH Accredited", value: "✓" },
                  { label: "Founded", value: "2007" },
                  { label: "Beds Capacity", value: "35" },
                  { label: "Departments", value: "15+" },
                  { label: "Available", value: "24/7" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <GlassCard className="bg-white/10 border-white/10 p-8 lg:p-10 backdrop-blur-xl">
                <h3 className="text-2xl font-bold mb-6">Our Departments</h3>
                <div className="grid grid-cols-2 gap-3">
                  {departments.map((dept, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300 font-medium py-2">
                      <CheckCircle2 size={16} className="text-teal-400 shrink-0" />
                      {dept}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-slate-100" id="contact">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative h-[40px] w-auto group-hover:scale-105 transition-transform duration-300 flex items-center">
                <Image 
                  src="/logo.png" 
                  alt="Hitanshi Hospital Official Logo" 
                  width={40}
                  height={40}
                  className="h-[40px] w-auto object-contain"
                />
              </div>
              <div className="flex flex-col justify-center leading-none">
                <span className="font-bold text-xl tracking-tight text-slate-900 font-inter">Hitanshi</span>
                <span className="text-[10px] font-bold text-[#0F4C81] uppercase tracking-[0.15em]">Hospital</span>
              </div>
            </Link>
            <p className="text-slate-500 max-w-sm mb-6 leading-relaxed text-sm">
              NABH Accredited Multi-Specialty Hospital providing compassionate care and advanced medicine since 2007.
            </p>
            <div className="space-y-2 text-sm text-slate-500">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="text-[#0F4C81] mt-0.5 shrink-0" />
                Shanti Park, MTNL Road, Near Don Bosco School, Mira Road (East), Maharashtra — 401107
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-[#0F4C81] shrink-0" />
                <a href="tel:+919029921938" className="hover:text-[#0F4C81] transition-colors">+91 90299 21938</a>
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-3 text-slate-500 font-medium text-sm">
              <li><Link href="/doctors" className="hover:text-[#0F4C81] transition-colors">Our Doctors</Link></li>
              <li><Link href="/doctors" className="hover:text-[#0F4C81] transition-colors">Book Appointment</Link></li>
              <li><Link href="#departments" className="hover:text-[#0F4C81] transition-colors">Departments</Link></li>
              <li><Link href="#about" className="hover:text-[#0F4C81] transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Departments</h4>
            <ul className="space-y-3 text-slate-500 font-medium text-sm">
              <li>Obstetrics & Gynecology</li>
              <li>Diabetology & General Medicine</li>
              <li>Pediatrics & Neonatology</li>
              <li>Orthopaedics & General Surgery</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-10 mt-10 border-t border-slate-100 text-center text-slate-400 text-sm font-medium">
          © {new Date().getFullYear()} Hitanshi Hospital, Mira Road. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

const services = [
  {
    icon: <Stethoscope className="h-7 w-7" />,
    bgColor: "bg-blue-50",
    iconColor: "text-[#0F4C81]",
    title: "Expert OPD",
    description: "Walk-in or book online OPD consultations with specialist doctors.",
  },
  {
    icon: <Siren className="h-7 w-7" />,
    bgColor: "bg-red-50",
    iconColor: "text-red-500",
    title: "24/7 Emergency",
    description: "Round-the-clock emergency care with fully equipped trauma facilities.",
  },
  {
    icon: <TestTube className="h-7 w-7" />,
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
    title: "Diagnostic Lab",
    description: "In-house pathology and radiology labs for rapid, accurate results.",
  },
  {
    icon: <Pill className="h-7 w-7" />,
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
    title: "24/7 Pharmacy",
    description: "On-site pharmacy stocked with all essential medications, always open.",
  },
];

const departments = [
  "Obstetrics & Gynecology",
  "Diabetology",
  "General Medicine",
  "General Surgery",
  "Orthopaedics",
  "Pediatrics",
  "Dermatology",
  "Cardiology",
  "Urology",
  "Neurology",
  "Oncology",
  "Ophthalmology",
];
