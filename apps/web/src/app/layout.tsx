import type { Metadata } from 'next';
import { Inter, Noto_Sans_Devanagari } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoHindi = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  variable: '--font-noto-hindi',
  weight: ['400', '500', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hitanshi Hospital | Compassionate Care, Advanced Medicine — Mira Road',
  description: 'Book OPD appointments online at Hitanshi Hospital, Mira Road. Specialized care for Diabetes & Motherhood by Dr. R.K. Sharma and Dr. Priti Sharma.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoHindi.variable}`}>
      <body className={`${inter.className} min-h-screen bg-neutral-50 text-neutral-900 font-inter`}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
