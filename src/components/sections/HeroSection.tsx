'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GlassButton from '../base/Button'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const slides = [
    {
      title: "Your Trusted Source for\n Every Essential",
      description: "From PPE and packaging to office and hardware supplies, we deliver\n quality and reliability for every industry."
    },
    {
      title: "Premium Stretch Film,\n Proudly Made by Us",
      description: "Engineered for strength and clarity. Our in-house stretch film\n ensures superior protection and performance."
    },
    {
      title: "Supplying Businesses,\n Empowering Growth",
      description: "Whether you buy in bulk or by piece, we make top-quality products\n accessible, affordable, and always dependable."
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const percentage = clickX / rect.width
    const slideIndex = Math.floor(percentage * slides.length)
    goToSlide(Math.min(slideIndex, slides.length - 1))
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      filter: 'blur(10px)'
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)'
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      filter: 'blur(10px)'
    })
  }

  const textVariants = {
    enter: {
      y: 30,
      opacity: 0
    },
    center: {
      y: 0,
      opacity: 1
    },
    exit: {
      y: -30,
      opacity: 0
    }
  }

  return (
    <div className="font-inter relative flex min-h-[1000px] max-w-[1180px] min-[1440px]:max-w-[1660px] mx-auto px-[10px] sm:px-[20px] md:px-[30px] min-[1665px]:px-0! items-center -mt-[95px]">
      {/* Content */}
      <div className="relative z-2 h-full justify-center items-center w-full">
        <div className="flex flex-col gap-[20px] justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
                filter: { duration: 0.5 }
              }}
              className="flex flex-col gap-[20px]"
            >
              <motion.h1 
                variants={textVariants}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-[64px] font-inter font-black text-white whitespace-pre-line leading-20"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p 
                variants={textVariants}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-inter text-[20px] text-white whitespace-pre-line leading-auto"
              >
                {slides[currentSlide].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Interactive Progress Indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-[300px] flex items-center gap-4"
          >
            <motion.span 
              key={`current-${currentSlide}`}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-[20px] text-white font-medium"
            >
              0{currentSlide + 1}
            </motion.span>
            <div
              className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden cursor-pointer relative group"
              onClick={handleProgressClick}
            >
              {/* Filled progress */}
              <motion.div
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              ></motion.div>

              {/* Invisible clickable segments */}
              <div className="absolute inset-0 flex">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className="flex-1 h-full relative group/segment"
                    onClick={(e) => {
                      e.stopPropagation()
                      goToSlide(index)
                    }}
                  >
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/segment:opacity-100 transition-opacity duration-200"></div>
                  </div>
                ))}
              </div>
            </div>
            <span className="text-[20px] text-white font-medium">0{slides.length}</span>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <GlassButton
              text="Inquire Now! →"
              onClick={() => console.log('clicked')}
              className='self-start'
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection