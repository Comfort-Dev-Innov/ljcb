'use client'
import { motion } from "framer-motion"
import { useState } from 'react'
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutUs from "@/components/sections/AboutUs";
import Products from "@/components/sections/Products";
import Clients from "@/components/sections/Clients";
import ContactUs from "@/components/sections/ContactUs";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/base/BackToTop";
import ProductModal from "@/components/base/ProductModal";
import { Category } from '@/data/productsData';

export default function LandingPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (category: Category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCategory(null), 300);
  };

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
      <div className="relative z-10 flex flex-col gap-[40px]">
        <AboutUs />
        <Products onCategoryClick={handleOpenModal} />
        <Clients />
        <ContactUs/>
      </div>
      <Footer />
      <BackToTop />
      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        category={selectedCategory}
      />
    </motion.div>
  );
}
