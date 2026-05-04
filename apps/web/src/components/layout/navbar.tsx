"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Building2, UserCircle, Phone } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const { user, isLoading, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative h-[45px] w-auto group-hover:scale-105 transition-transform duration-300 flex items-center">
            <Image 
              src="/logo.png" 
              alt="Hitanshi Hospital Official Logo" 
              width={45}
              height={45}
              className="h-[45px] w-auto object-contain"
              priority
            />
          </div>
          <div className="flex flex-col justify-center leading-none">
            <span className="font-bold text-xl tracking-tight text-slate-900 font-inter">
              Hitanshi
            </span>
            <span className="text-[10px] font-bold text-[#0F4C81] uppercase tracking-[0.15em]">
              Hospital
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-slate-500 hover:text-[#0F4C81] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Emergency Contact — always visible */}
          <a href="tel:+919029921938" className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#0F4C81] transition-colors">
            <Phone size={15} className="text-[#0F4C81]" />
            <span>+91 90299 21938</span>
          </a>

          {isLoading ? (
            <Skeleton className="h-9 w-24 rounded-full" />
          ) : user ? (
            <div className="flex items-center gap-3">
              <Link href="/dashboard" className="hidden md:block">
                <Button variant="ghost" className="rounded-full px-5 font-semibold text-slate-600 hover:bg-slate-100">
                  Dashboard
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-9 w-9 rounded-full border border-slate-200 p-0 overflow-hidden bg-white">
                    <UserCircle className="h-6 w-6 text-slate-500" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 rounded-2xl p-2 bg-white/95 backdrop-blur-xl border-slate-200 shadow-2xl" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal p-3">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-bold leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-slate-500">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-slate-100" />
                  <DropdownMenuItem asChild className="rounded-xl focus:bg-[#0F4C81] focus:text-white transition-colors cursor-pointer">
                    <Link href="/dashboard">My Appointments</Link>
                  </DropdownMenuItem>
                  {user.role === "ADMIN" && (
                    <DropdownMenuItem asChild className="rounded-xl focus:bg-[#0F4C81] focus:text-white transition-colors cursor-pointer">
                      <Link href="/admin/doctors">Doctor Management</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator className="bg-slate-100" />
                  <DropdownMenuItem
                    onClick={() => logout()}
                    className="text-red-500 cursor-pointer rounded-xl focus:bg-red-50 focus:text-red-600 transition-colors"
                  >
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" className="rounded-full px-5 h-9 font-semibold text-slate-600 hover:bg-slate-50">
                  Log in
                </Button>
              </Link>
              <Link href="/register">
                <Button className="rounded-full px-5 h-9 font-semibold bg-[#0F4C81] hover:bg-[#0d3f6b] text-white shadow-lg shadow-[#0F4C81]/20">
                  Sign up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

const navLinks = [
  { label: "Our Doctors", href: "/doctors" },
  { label: "Departments", href: "/#departments" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];
