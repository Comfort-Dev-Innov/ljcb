'use client'
import { motion } from "framer-motion"
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutUs from "@/components/sections/AboutUs";

export default function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >

      <div className="relative">

        <motion.video
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-50"
        >
          <source src="/assets/videos/video.mp4" type="video/mp4" />
        </motion.video>

        {/* White gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-[200px] z-5 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.8) 85%, rgba(255, 255, 255, 1) 100%)'
          }}
        />
        <div className="relative z-10 pt-[40px]">
          <Header />
          <HeroSection />
        </div>
      </div>
      <div className="relative z-10 px-[40px] flex flex-col gap-[40px]">
        <AboutUs />
      </div>
    </motion.div>
  );
}
