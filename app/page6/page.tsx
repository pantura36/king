"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, HelpCircle, CheckCircle2, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { useApp } from "../../lib/AppContext";

/**
 * Loan Offer / Calculator Page (page6) - Based on mock/page_6.jpeg.
 */
export default function Page6() {
  const { appData } = useApp();
  const [amount, setAmount] = useState(7000000);
  const [months, setMonths] = useState(6);

  // Simple calculation mockups
  const interest = 1.29; // 1.29% per month
  const monthlyPayment = Math.round((amount / months) + (amount * interest / 100));
  const totalPayment = monthlyPayment * months;

  return (
    <div className="relative min-h-screen bg-white flex flex-col font-sans text-slate-900 pb-8 overflow-hidden">
      
      {/* Decorative Background Elements - Forced to background layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Top-Right Teal Rectangle */}
        <div className="absolute top-[2%] right-[10%] w-4 h-8 bg-teal-400 opacity-60 rotate-12 rounded-sm" />
        
        {/* Mid-Left Purple Rectangle */}
        <div className="absolute top-[15%] left-[8%] w-3 h-6 bg-purple-400 opacity-50 -rotate-12 rounded-sm" />
        
        {/* Top-Center Mint Rectangle */}
        <div className="absolute top-[8%] left-[45%] w-6 h-3 bg-green-200 opacity-70 rotate-[30deg] rounded-sm" />
        
        {/* Near Calculator - Green Rectangle */}
        <div className="absolute top-[42%] right-[5%] w-6 h-10 bg-teal-400/30 rotate-12 rounded-sm blur-[1px]" />
        
        {/* Amount Section - Purple Rectangle */}
        <div className="absolute top-[28%] left-[2%] w-4 h-9 bg-purple-400/20 -rotate-45 rounded-sm" />
        
        {/* Pink Floating Dots/Rects */}
        <div className="absolute top-[18%] right-[12%] w-3 h-3 bg-pink-400 opacity-40 rounded-full" />
        <div className="absolute top-[32%] left-[18%] w-2 h-2 bg-purple-400 opacity-30 rotate-45" />
      </div>

      {/* Content Layer - Forced to foreground */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="p-4 flex items-center justify-between">
        <Link href="/page5">
          <ChevronLeft className="w-8 h-8 text-black" />
        </Link>
        <div className="flex flex-col items-center">
          <span className="text-slate-400 text-sm font-medium italic">Langkah 1 dari 4</span>
        </div>
        <div className="w-10 h-10 bg-[#FFB800] rounded-full flex items-center justify-center text-white">
          <HelpCircle className="w-6 h-6" />
        </div>
      </header>

      {/* Hero Headline Section */}
      <main className="px-6 flex-1 flex flex-col pt-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-1">Selamat! Kamu bisa dapat</h1>
          <h2 className="text-2xl font-bold mb-2">pinjaman sebesar</h2>
          <div className="text-[32px] font-black text-[#A11BE4] tracking-tight">
            Rp100.000.000
          </div>
          <p className="text-sm font-semibold mt-4">
            Tawaran berlaku sampai <span className="italic">2jam kedepan</span>
          </p>
        </div>

        {/* Amount Input Section */}
        <div className="space-y-4 mb-8">
          <label className="text-lg font-black block">Berapa yang ingin kamu cairkan?</label>
          <div className="bg-[#F8F9FA] rounded-2xl p-5 flex items-center justify-between border border-slate-100 shadow-sm transition-all focus-within:ring-2 focus-within:ring-[#FFB800]/20">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black">Rp</span>
              <span className="text-2xl font-black">{amount.toLocaleString('id-ID')}</span>
            </div>
            <button className="text-[#FFB800] font-black border-b-2 border-[#FFB800] pb-0.5 active:opacity-60 transition-opacity">
              Semua
            </button>
          </div>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-[32px] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-slate-50 mb-8 space-y-8">
          
          {/* Duration Slider */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-lg font-black">Durasi</span>
              <span className="text-xl font-black text-[#A11BE4]">{months} bulan</span>
            </div>
            <div className="relative pt-2">
              <input 
                type="range"
                min="1"
                max="18"
                value={months}
                onChange={(e) => setMonths(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#FFB800] transition-all"
                style={{
                  background: `linear-gradient(to right, #FFB800 0%, #FFB800 ${((months - 1) / (18 - 1)) * 100}%, #F1F5F9 ${((months - 1) / (18 - 1)) * 100}%, #F1F5F9 100%)`
                }}
              />
              <div className="flex justify-between mt-4 text-slate-300 text-sm font-bold">
                <span>1 bulan</span>
                <span>18 bulan</span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-base font-bold">Angsuran per bulan</span>
                <span className="text-[10px] font-bold text-slate-400 italic">*Termasuk bunga</span>
              </div>
              <span className="text-lg font-black text-[#A11BE4]">Rp{monthlyPayment.toLocaleString('id-ID')}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-base font-bold">Bunga (flat)</span>
                <div className="bg-[#FFB800] rounded-full p-0.5">
                  <HelpCircle className="w-3 h-3 text-white" />
                </div>
              </div>
              <span className="text-base font-black text-amber-500">{interest}% per bulan</span>
            </div>

            {/* Highlights Box */}
            <div className="bg-[#FFF8E6] rounded-2xl py-4 px-5 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              <span className="text-[13px] font-bold text-slate-800">Tanpa biaya admin dan biaya lainnya!</span>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col items-center">
              <span className="text-sm font-bold text-slate-400 mb-2">Total pembayaran</span>
              <span className="text-2xl font-black text-[#A11BE4]">Rp{totalPayment.toLocaleString('id-ID')}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Link 
          href="/page7" 
          className="w-full block"
          onClick={() => {
            console.log("=== DATA PENGAJUAN PINJAMAN JAGO ===");
            console.log(appData);
            console.log("====================================");
          }}
        >
          <button className="w-full bg-[#FFB800] hover:bg-orange-500 text-black font-black py-5 rounded-2xl shadow-lg transition-all active:scale-[0.98] text-base mb-6">
            CAIRKAN KE REKENING JAGO ANDA
          </button>
        </Link>

        {/* Tips Footer */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 flex gap-4">
           <div className="w-12 h-12 flex items-center justify-center shrink-0">
             <Lightbulb className="w-8 h-8 text-blue-400" />
           </div>
           <div className="flex-1">
             <h4 className="text-sm font-black mb-1">Tips untuk Disetujui</h4>
             <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Pastikan saldo di rekening Jago Anda di atas <span className="font-bold">Rp5juta</span>, agar pencairan tidak tertunda ya.
             </p>
           </div>
        </div>
      </main>
      </div>
    </div>
  );
}
