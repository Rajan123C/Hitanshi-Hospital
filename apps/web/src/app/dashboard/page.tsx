"use client";

import { useAuth } from "@/hooks/use-auth";
import { useQuery } from "@tanstack/react-query";
import { api, ApiResponse } from "@/lib/api";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Calendar, Clock, User, UserCheck, 
  ChevronRight, AlertCircle, RefreshCw,
  LogOut, Settings, LayoutDashboard,
  TrendingUp, Activity, CreditCard,
  MessageSquare
} from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Appointment {
  id: string;
  date: string;
  startTime: string;
  status: string;
  doctor: {
    user: {
      name: string;
    };
    specialization: string;
  };
  patient: {
    name: string;
  };
}

export default function DashboardPage() {
  const { user, isLoading: authLoading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  const { data: appointments, isLoading: appointmentsLoading, refetch } = useQuery({
    queryKey: ["appointments"],
    queryFn: async () => {
      const res = (await api.get("/appointments")) as ApiResponse<Appointment[]>;
      return res.data;
    },
    enabled: !!user,
  });

  if (authLoading || (!user && authLoading)) {
    return (
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="relative">
          <div className="h-16 w-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          <Activity className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary h-6 w-6" />
        </div>
        <p className="mt-6 text-slate-500 font-medium animate-pulse">Initializing your dashboard...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* Top Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">Dashboard</h1>
              <p className="text-slate-500 font-medium mt-1">
                Welcome back to Hitanshi Hospital.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="lg" onClick={() => refetch()} className="rounded-2xl border-slate-200 font-bold text-slate-600 hover:bg-slate-50">
                <RefreshCw className="mr-2 h-4 w-4" /> Sync Data
              </Button>
              <Link href="/doctors">
                <Button size="lg" className="rounded-2xl bg-primary hover:bg-primary/90 font-bold shadow-lg shadow-primary/20">
                  New Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <GlassCard key={i} className="p-6 border-slate-200/60 hover:translate-y-[-4px] transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className={`h-12 w-12 rounded-2xl bg-${stat.color}-50 flex items-center justify-center text-${stat.color}-600`}>
                  {stat.icon}
                </div>
                <Badge className="bg-teal-50 text-teal-600 border-none font-bold">+12.5%</Badge>
              </div>
              <div>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-3xl font-black text-slate-900">{stat.value}</p>
              </div>
              {/* Mini Chart Mockup */}
              <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full bg-${stat.color}-500 rounded-full`} style={{ width: '65%' }}></div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content: Appointments */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Upcoming Consultations</h2>
                <Button variant="ghost" className="font-bold text-primary">View All <ChevronRight size={16} /></Button>
              </div>

              {appointmentsLoading ? (
                <div className="space-y-4">
                  {[1, 2].map(i => <Skeleton key={i} className="h-32 w-full rounded-[24px]" />)}
                </div>
              ) : appointments && appointments.length > 0 ? (
                <div className="space-y-4">
                  {appointments.map((apt: Appointment) => (
                    <GlassCard key={apt.id} className="p-0 border-slate-200/60 group hover:border-primary/30 transition-all duration-500">
                      <div className="p-6 flex flex-col md:flex-row items-center gap-6">
                        <div className="h-20 w-20 rounded-[20px] bg-slate-50 border border-slate-100 flex flex-col items-center justify-center text-slate-900 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                          <span className="text-[10px] uppercase font-black opacity-60 tracking-widest">{format(new Date(apt.date), "MMM")}</span>
                          <span className="text-3xl font-black leading-none">{format(new Date(apt.date), "d")}</span>
                        </div>
                        
                        <div className="flex-1 text-center md:text-left">
                          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                             <Badge className="bg-blue-50 text-blue-600 border-none font-bold px-2 py-0.5 text-[10px] uppercase">{apt.status}</Badge>
                             <span className="text-slate-300">•</span>
                             <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Confirmed</span>
                          </div>
                          <h4 className="text-xl font-bold text-slate-900 mb-2">
                            {user.role === 'PATIENT' ? `Dr. ${apt.doctor.user.name}` : `Patient: ${apt.patient.name}`}
                          </h4>
                          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-sm text-slate-500 font-medium">
                            <span className="flex items-center gap-2">
                              <Clock size={16} className="text-primary" /> {apt.startTime}
                            </span>
                            <span className="flex items-center gap-2">
                              <UserCheck size={16} className="text-teal-500" /> {user.role === 'PATIENT' ? apt.doctor.specialization : "Standard Visit"}
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                           <Button variant="outline" className="rounded-xl h-11 px-4 font-bold border-slate-200 text-slate-600">Reschedule</Button>
                           <Button className="rounded-xl h-11 px-6 font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-900/10">Details</Button>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              ) : (
                <GlassCard className="p-16 flex flex-col items-center justify-center text-center border-dashed border-2 border-slate-200 bg-transparent">
                  <div className="h-20 w-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-6">
                    <Calendar size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">No active appointments</h3>
                  <p className="text-slate-500 max-w-xs mb-8 font-medium">Your schedule is currently clear. Need to see a specialist?</p>
                  <Link href="/doctors">
                    <Button className="rounded-2xl h-12 px-8 font-bold bg-primary shadow-xl shadow-primary/20">Book Your First Doctor</Button>
                  </Link>
                </GlassCard>
              )}
            </section>
          </div>

          {/* Right Sidebar: Profile & Quick Actions */}
          <div className="space-y-8">
            <GlassCard className="p-8 bg-slate-900 text-white border-none shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -z-0 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
               <div className="relative z-10">
                 <div className="flex items-center gap-5 mb-8">
                    <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center text-primary border border-white/10">
                      <User size={32} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-2xl font-black tracking-tight">{user.name}</p>
                      <Badge className="bg-primary text-white border-none font-bold mt-1 uppercase text-[10px]">{user.role}</Badge>
                    </div>
                 </div>
                 <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center text-sm font-medium border-b border-white/5 pb-4">
                       <span className="text-slate-400">Membership</span>
                        <span className="text-teal-400 font-bold">Verified Patient</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-medium border-b border-white/5 pb-4">
                        <span className="text-slate-400">Hospital</span>
                        <span className="text-blue-400 font-bold text-sm">Hitanshi, Mira Road</span>
                    </div>
                 </div>
                 <Button className="w-full bg-white text-slate-900 hover:bg-slate-100 h-12 rounded-2xl font-black tracking-tight transition-transform active:scale-95">
                    <Settings className="mr-2 h-4 w-4" /> Manage Account
                 </Button>
               </div>
            </GlassCard>

            <div className="space-y-4">
               <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 px-2">
                 Quick Actions
               </h3>
               <div className="grid grid-cols-2 gap-4">
                 {[
                   { label: 'Messages', icon: <MessageSquare size={20} />, color: 'blue' },
                   { label: 'Payments', icon: <CreditCard size={20} />, color: 'teal' },
                   { label: 'Records', icon: <Activity size={20} />, color: 'indigo' },
                   { label: 'Support', icon: <AlertCircle size={20} />, color: 'amber' },
                 ].map((action, i) => (
                   <GlassCard key={i} className="p-4 flex flex-col items-center justify-center text-center hover:bg-white hover:border-primary/20 cursor-pointer group transition-all">
                      <div className={`h-10 w-10 rounded-xl bg-${action.color}-50 text-${action.color}-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        {action.icon}
                      </div>
                      <span className="text-xs font-bold text-slate-600">{action.label}</span>
                   </GlassCard>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const stats = [
  { label: 'Upcoming', value: '—', icon: <Calendar size={24} />, color: 'blue' },
  { label: 'Completed', value: '—', icon: <Activity size={24} />, color: 'teal' },
  { label: 'Cancelled', value: '—', icon: <CreditCard size={24} />, color: 'indigo' },
  { label: 'Total Visits', value: '—', icon: <TrendingUp size={24} />, color: 'amber' },
];
