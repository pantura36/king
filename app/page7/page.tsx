"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

/**
 * Dormant Account Error Mockup Page (page7) - Full screen image viewer with matching background.
 */
export default function Page7() {
  return (
    <div className="relative min-h-screen w-full bg-[#FFF8F3] flex flex-col items-center justify-center overflow-auto">
      {/* Background blur for a premium seamless effect */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/mock/page_7.jpeg" 
          alt="Backdrop"
          fill
          className="object-cover blur-3xl opacity-20"
          aria-hidden="true"
        />
      </div>

      {/* Main Image Content - Responsive for Mobile & Desktop */}
      <div className="relative z-10 w-full md:max-w-[480px] h-full flex flex-col items-center justify-center p-0 md:p-8">
        <div className="w-full bg-white md:rounded-[40px] md:shadow-2xl overflow-hidden flex flex-col">
          <img 
            src="/mock/page_7.jpeg" 
            alt="Ops Rekening Pasif" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Optional: Navigation indicator */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-black w-32 h-1.5 rounded-full opacity-10 pointer-events-none" />
    </div>
  );
}
