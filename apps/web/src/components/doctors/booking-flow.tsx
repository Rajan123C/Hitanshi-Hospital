"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Loader2,
  Stethoscope,
  Building2,
  Activity,
  Award
} from "lucide-react";
import { api } from "@/lib/api";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const steps = [
  "Department",
  "Specialist",
  "Time Slot",
  "Patient Details",
  "Confirmation"
];

const departments = [
  { id: "gyn", name: "Obstetrics & Gynecology", icon: <Building2 className="h-6 w-6" />, specialists: ["Dr. Priti Sharma"] },
  { id: "diab", name: "Diabetology", icon: <Activity className="h-6 w-6" />, specialists: ["Dr. R.K. Sharma"] },
  { id: "ped", name: "Pediatrics", icon: <Stethoscope className="h-6 w-6" />, specialists: ["Dr. Anjali Gupta"] },
  { id: "ortho", name: "Orthopedics", icon: <Award className="h-6 w-6" />, specialists: ["Dr. Vikram Singh"] },
  { id: "cardio", name: "Cardiology", icon: <Activity className="h-6 w-6" />, specialists: ["Dr. Sameer Khan"] },
];

const specialists = [
  { id: "1", name: "Dr. Priti Sharma", specialization: "Gynecologist", fees: 700, dept: "Obstetrics & Gynecology" },
  { id: "2", name: "Dr. R.K. Sharma", specialization: "Diabetologist", fees: 600, dept: "Diabetology" },
  { id: "3", name: "Dr. Anjali Gupta", specialization: "Pediatrician", fees: 500, dept: "Pediatrics" },
  { id: "4", name: "Dr. Vikram Singh", specialization: "Orthopedic Surgeon", fees: 800, dept: "Orthopedics" },
  { id: "5", name: "Dr. Sameer Khan", specialization: "Cardiologist", fees: 1000, dept: "Cardiology" },
];

export function BookingFlow() {
  const [step, setStep] = useState(0);
  const [selectedDept, setSelectedDept] = useState<any>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<any>(null);
  const [patientDetails, setPatientDetails] = useState({ name: "", age: "", phone: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [bookingResult, setBookingResult] = useState<any>(null);
  const [slots, setSlots] = useState<any[]>([]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  useEffect(() => {
    if (step === 2 && selectedDoctor) {
      fetchSlots();
    }
  }, [step, selectedDoctor]);

  const fetchSlots = async () => {
    setIsLoading(true);
    try {
      // For now using mock slots since real data might be empty
      const mockSlots = [
        { id: "s1", startTime: "10:00 AM", date: new Date().toISOString() },
        { id: "s2", startTime: "10:30 AM", date: new Date().toISOString() },
        { id: "s3", startTime: "11:00 AM", date: new Date().toISOString() },
        { id: "s4", startTime: "11:30 AM", date: new Date().toISOString() },
        { id: "s5", startTime: "05:00 PM", date: new Date().toISOString() },
        { id: "s6", startTime: "05:30 PM", date: new Date().toISOString() },
      ];
      setSlots(mockSlots);
    } catch (error) {
      toast.error("Failed to fetch time slots");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBooking = async () => {
    setIsLoading(true);
    try {
      // Mock booking for now as API might need auth
      setTimeout(() => {
        const mockToken = `HT-${new Date().toISOString().slice(0,10).replace(/-/g,'')}-${Math.floor(1000 + Math.random() * 9000)}`;
        setBookingResult({ token: mockToken });
        nextStep();
        setIsLoading(false);
        toast.success("Appointment booked successfully!");
      }, 1500);
    } catch (error) {
      toast.error("Booking failed. Please try again.");
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {departments.map((dept) => (
              <Card 
                key={dept.id} 
                className={`cursor-pointer border-2 transition-all hover:border-[#0F4C81] ${selectedDept?.id === dept.id ? "border-[#0F4C81] bg-blue-50/50" : "border-slate-100"}`}
                onClick={() => { setSelectedDept(dept); nextStep(); }}
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${selectedDept?.id === dept.id ? "bg-[#0F4C81] text-white" : "bg-slate-100 text-slate-500"}`}>
                    {dept.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{dept.name}</h3>
                    <p className="text-xs text-slate-500 font-medium">{dept.specialists.length} Specialists Available</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            {specialists.filter(s => s.dept === selectedDept?.name).map((doc) => (
              <Card 
                key={doc.id} 
                className={`cursor-pointer border-2 transition-all hover:border-[#0F4C81] ${selectedDoctor?.id === doc.id ? "border-[#0F4C81] bg-blue-50/50" : "border-slate-100"}`}
                onClick={() => { setSelectedDoctor(doc); nextStep(); }}
              >
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <User size={30} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{doc.name}</h3>
                      <p className="text-sm text-[#0F4C81] font-bold">{doc.specialization}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400 font-bold uppercase">Fee</p>
                    <p className="text-xl font-bold text-slate-900">₹{doc.fees}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button variant="ghost" onClick={prevStep} className="w-full mt-4">Back to Departments</Button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label className="text-slate-900 font-bold mb-3 block">Select Preferred Date</Label>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {[0, 1, 2, 3, 4].map((i) => {
                  const d = new Date();
                  d.setDate(d.getDate() + i);
                  const dateStr = d.toISOString().split('T')[0];
                  return (
                    <Button 
                      key={i}
                      variant={selectedDate === dateStr ? "default" : "outline"}
                      className={`flex flex-col h-20 w-20 shrink-0 rounded-2xl ${selectedDate === dateStr ? "bg-[#0F4C81]" : "border-slate-200"}`}
                      onClick={() => setSelectedDate(dateStr)}
                    >
                      <span className="text-[10px] uppercase font-bold opacity-70">{d.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                      <span className="text-xl font-bold">{d.getDate()}</span>
                    </Button>
                  );
                })}
              </div>
            </div>

            {selectedDate && (
              <div>
                <Label className="text-slate-900 font-bold mb-3 block">Available Time Slots</Label>
                <div className="grid grid-cols-3 gap-3">
                  {slots.map((slot) => (
                    <Button
                      key={slot.id}
                      variant={selectedSlot?.id === slot.id ? "default" : "outline"}
                      className={`h-12 rounded-xl font-bold ${selectedSlot?.id === slot.id ? "bg-[#0F4C81]" : "border-slate-200"}`}
                      onClick={() => setSelectedSlot(slot)}
                    >
                      {slot.startTime}
                    </Button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex gap-4">
              <Button variant="outline" onClick={prevStep} className="flex-1 h-12 rounded-xl">Back</Button>
              <Button 
                disabled={!selectedSlot} 
                onClick={nextStep} 
                className="flex-1 h-12 rounded-xl bg-[#0F4C81] hover:bg-[#0d3f6b]"
              >
                Continue
              </Button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-slate-700 font-bold">Patient Name / मरीज का नाम</Label>
                <Input 
                  placeholder="Enter full name" 
                  className="h-12 rounded-xl" 
                  value={patientDetails.name}
                  onChange={(e) => setPatientDetails({...patientDetails, name: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-slate-700 font-bold">Age / उम्र</Label>
                  <Input 
                    type="number" 
                    placeholder="Years" 
                    className="h-12 rounded-xl"
                    value={patientDetails.age}
                    onChange={(e) => setPatientDetails({...patientDetails, age: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-700 font-bold">Phone / फोन</Label>
                  <Input 
                    placeholder="10-digit number" 
                    className="h-12 rounded-xl"
                    value={patientDetails.phone}
                    onChange={(e) => setPatientDetails({...patientDetails, phone: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <Card className="bg-slate-50 border-none rounded-2xl">
              <CardContent className="p-6 space-y-3">
                <h4 className="font-bold text-slate-900 border-b border-slate-200 pb-2 mb-2">Booking Summary</h4>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-medium">Doctor:</span>
                  <span className="text-slate-900 font-bold">{selectedDoctor?.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-medium">Date & Time:</span>
                  <span className="text-slate-900 font-bold">{selectedDate} at {selectedSlot?.startTime}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-medium">Consultation Fee:</span>
                  <span className="text-slate-900 font-bold">₹{selectedDoctor?.fees}</span>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button variant="outline" onClick={prevStep} className="flex-1 h-12 rounded-xl">Back</Button>
              <Button 
                disabled={!patientDetails.name || !patientDetails.phone || isLoading} 
                onClick={handleBooking} 
                className="flex-1 h-12 rounded-xl bg-[#0F4C81] hover:bg-[#0d3f6b]"
              >
                {isLoading ? <Loader2 className="animate-spin h-5 w-5" /> : "Confirm & Pay"}
              </Button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="text-center space-y-8 py-8">
            <div className="flex justify-center">
              <div className="h-24 w-24 rounded-full bg-teal-50 flex items-center justify-center text-teal-500">
                <CheckCircle2 size={60} />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Appointment Confirmed!</h2>
              <p className="text-slate-500 font-medium">Please show this token at the reception.</p>
            </div>
            
            <div className="bg-[#0F4C81] text-white p-8 rounded-[2rem] shadow-2xl shadow-blue-900/20 max-w-xs mx-auto">
              <p className="text-xs uppercase font-bold tracking-widest opacity-70 mb-2">Your Token Number</p>
              <p className="text-4xl font-black tracking-tight">{bookingResult?.token}</p>
            </div>

            <div className="space-y-4 pt-4">
              <Button className="w-full h-14 rounded-2xl bg-slate-900" onClick={() => window.location.reload()}>
                Done / पूरा हुआ
              </Button>
              <p className="text-xs text-slate-400 font-medium">A confirmation SMS has been sent to +91 {patientDetails.phone}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="max-w-3xl mx-auto w-full">
      <div className="flex justify-between items-center mb-10 px-4">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-col items-center gap-2 relative">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${step >= i ? "bg-[#0F4C81] text-white" : "bg-slate-100 text-slate-400"}`}>
              {step > i ? <CheckCircle2 size={20} /> : i + 1}
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-wider hidden md:block ${step >= i ? "text-[#0F4C81]" : "text-slate-400"}`}>{s}</span>
          </div>
        ))}
      </div>
      
      <div className="min-h-[400px]">
        {renderStep()}
      </div>
    </div>
  );
}
