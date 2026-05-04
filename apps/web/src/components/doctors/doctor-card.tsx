import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Briefcase, GraduationCap, ArrowRight, UserCircle, Award, Clock } from "lucide-react";

interface DoctorCardProps {
  doctor: any;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const isAvailable = true; // Placeholder for real logic

  return (
    <Card className="overflow-hidden border-none shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 bg-white group rounded-[2rem]">
      <CardContent className="p-0">
        <div className="relative h-64 w-full bg-slate-100 flex items-center justify-center overflow-hidden">
          {(doctor.user?.avatar || doctor.avatar) ? (
            <img
              src={doctor.user?.avatar || doctor.avatar}
              alt={doctor.user?.name || doctor.name}
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="h-full w-full bg-blue-50/50 flex items-center justify-center overflow-hidden">
              <img
                src={doctor.gender === 'F' ? '/avatars/doctor-female.png' : '/avatars/doctor-male.png'}
                alt="Doctor Avatar"
                className="h-full w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <Badge className="absolute top-4 left-4 bg-white/95 text-[#0F4C81] hover:bg-white backdrop-blur-md border-none font-bold px-3 py-1 rounded-full shadow-lg">
            {doctor.specialization}
          </Badge>

          {doctor.rating && (
            <div className="absolute top-4 right-4 flex items-center text-amber-500 bg-white/95 px-3 py-1 rounded-full text-sm font-bold shadow-lg backdrop-blur-md">
              <Star size={14} className="fill-current mr-1" />
              {doctor.rating}
            </div>
          )}

          <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
              <Clock size={12} className="text-teal-400" />
              Next Available: Today
            </div>
          </div>
        </div>

        <div className="p-6 lg:p-8">
          <div className="mb-4">
            <h3 className="font-bold text-2xl text-slate-900 leading-tight mb-1 group-hover:text-[#0F4C81] transition-colors">
              {doctor.user?.name || doctor.name}
            </h3>
            <p className="text-[#0F4C81] font-bold text-xs uppercase tracking-[0.1em]">
              {doctor.department || doctor.specialization}
            </p>
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center text-slate-500 text-sm font-medium">
              <div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center mr-3 text-blue-600 shrink-0">
                <GraduationCap size={16} />
              </div>
              <span className="line-clamp-1">{doctor.qualifications}</span>
            </div>
            <div className="flex items-center text-slate-500 text-sm font-medium">
              <div className="h-8 w-8 rounded-lg bg-teal-50 flex items-center justify-center mr-3 text-teal-600 shrink-0">
                <Award size={16} />
              </div>
              <span>{doctor.experience} Years Experience / अनुभव</span>
            </div>
            <div className="flex items-center text-slate-500 text-sm font-medium">
              <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center mr-3 text-slate-400 shrink-0">
                <MapPin size={16} />
              </div>
              <span>Mira Road, Mumbai</span>
            </div>
          </div>
          
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Consultation Fee</p>
              <div className="text-xl font-bold text-slate-900">
                ₹{doctor.fees || "500"} <span className="text-xs font-normal text-slate-400">/ visit</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-lg">
              <div className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
              Available Today
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 lg:p-8 pt-0">
        <Link href="/book" className="w-full">
          <Button className="w-full rounded-2xl bg-[#0F4C81] hover:bg-[#0d3f6b] h-14 text-lg font-bold shadow-lg shadow-blue-900/20 group/btn">
            Book Appointment / अपॉइंटमेंट बुक करें
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

