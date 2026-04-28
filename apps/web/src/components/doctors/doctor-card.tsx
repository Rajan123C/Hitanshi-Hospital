import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Briefcase, GraduationCap } from "lucide-react";

interface DoctorCardProps {
  doctor: any;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white group">
      <CardContent className="p-0">
        <div className="relative h-48 w-full bg-blue-50 flex items-center justify-center overflow-hidden">
          {doctor.user.avatar ? (
            <img
              src={doctor.user.avatar}
              alt={doctor.user.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="text-blue-200">
              <UserCircle size={80} />
            </div>
          )}
          <Badge className="absolute top-4 right-4 bg-white/90 text-blue-600 hover:bg-white backdrop-blur-sm border-none">
            {doctor.specialization}
          </Badge>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-xl text-neutral-900 leading-tight">
              {doctor.user.name}
            </h3>
            <div className="flex items-center text-amber-500 bg-amber-50 px-2 py-0.5 rounded-full text-sm font-bold">
              <Star size={14} className="fill-current mr-1" />
              {doctor.rating}
            </div>
          </div>
          
          <div className="space-y-2 mt-4 text-sm text-neutral-500">
            <div className="flex items-center">
              <GraduationCap size={16} className="mr-2 text-blue-500" />
              <span>{doctor.qualifications}</span>
            </div>
            <div className="flex items-center">
              <Briefcase size={16} className="mr-2 text-blue-500" />
              <span>{doctor.experience} years experience</span>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2 text-blue-500" />
              <span>{doctor.hospital ? `${doctor.hospital}, ` : ""}{doctor.city}</span>
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-between">
            <div className="text-lg font-bold text-blue-600">
              ₹{doctor.fees} <span className="text-xs font-normal text-neutral-400">/ consult</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={`/doctors/${doctor.id}`} className="w-full">
          <Button className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 h-11">
            View Profile
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

import { UserCircle } from "lucide-react";
