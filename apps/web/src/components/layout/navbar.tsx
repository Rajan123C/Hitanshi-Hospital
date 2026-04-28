"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { HeartPulseIcon, UserCircle } from "lucide-react";
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
    <header className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur-xl border-b border-white/20">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="h-9 w-9 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform duration-300">
              <HeartPulseIcon size={20} strokeWidth={2.5} />
            </div>
            <span className="font-bold text-xl tracking-tight text-neutral-900">
              MediBook
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-neutral-500 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {isLoading ? (
            <Skeleton className="h-9 w-24 rounded-full" />
          ) : user ? (
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="hidden md:block">
                <Button variant="ghost" className="rounded-full px-5 font-semibold text-neutral-600 hover:bg-white/50">
                  Dashboard
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-9 w-9 rounded-full border border-neutral-200 p-0 overflow-hidden bg-white/50">
                    <UserCircle className="h-6 w-6 text-neutral-500" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 rounded-2xl p-2 bg-white/90 backdrop-blur-xl border-white/40 shadow-2xl" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal p-3">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-bold leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-neutral-500">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-neutral-100" />
                  <DropdownMenuItem asChild className="rounded-xl focus:bg-primary focus:text-white transition-colors cursor-pointer">
                    <Link href="/dashboard">My Appointments</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-xl focus:bg-primary focus:text-white transition-colors cursor-pointer">
                    <Link href="/dashboard/profile">Profile Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-neutral-100" />
                  <DropdownMenuItem
                    onClick={() => logout()}
                    className="text-red-500 cursor-pointer rounded-xl focus:bg-red-50 focus:text-red-600 transition-colors"
                  >
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/doctors">
                <Button className="rounded-full bg-primary hover:bg-primary/90 text-white h-10 px-6 font-bold shadow-lg shadow-primary/20 transition-all hover:translate-y-[-1px] active:translate-y-[0px] hidden sm:flex">
                  Book Now
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/login" className="hidden sm:block">
                <Button variant="ghost" className="rounded-full px-5 font-semibold text-neutral-600 hover:bg-white/50">
                  Log in
                </Button>
              </Link>
              <Link href="/doctors">
                <Button className="rounded-full bg-primary hover:bg-primary/90 text-white h-10 px-6 font-bold shadow-lg shadow-primary/20 transition-all hover:translate-y-[-1px] active:translate-y-[0px]">
                  Book Now
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
  { label: "Find Doctors", href: "/doctors" },
  { label: "Specialists", href: "/specialists" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];
