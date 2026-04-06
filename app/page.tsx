"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Full-screen responsive mockup viewer.
 * The image will adapt to any screen size, maintaining its aspect ratio.
 * Clicking the image will lead to the next mockup page.
 */
export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center">
      {/* Background blur for a premium glass/depth effect */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/mock/page_1.jpeg" 
          alt="Background Blur"
          fill
          className="object-cover blur-3xl opacity-30 scale-110"
          aria-hidden="true"
        />
      </div>

      {/* Main Full-Screen Image Container clickable to next page */}
      <Link href="/page2" className="relative z-10 w-full h-screen flex items-center justify-center p-0 md:p-4 cursor-pointer group">
        <div className="relative w-full h-full max-w-full max-h-full">
          <Image 
            src="/mock/page_1.jpeg" 
            alt="Page 1 Full Mockup"
            fill
            priority
            className="object-contain transition-all duration-700 ease-out group-hover:scale-[1.01]"
            sizes="100vw"
          />
        </div>
      </Link>

    </div>
  );
}
