'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Heading from '../base/Heading'

const images = [
    '/assets/images/about-us-img-1.png',
    '/assets/images/about-us-img-2.png',
    '/assets/images/about-us-img-3.png',
    '/assets/images/about-us-img-4.png',
]

const phrases = [
    'Supply Partner',
    'Business Ally',
    'Trade Companion',
    'Distribution Partner',
    'Sourcing Solution',
    'Retail Collaborator',
]

const AboutUs = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
    const [displayedText, setDisplayedText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex]
        const typingSpeed = isDeleting ? 50 : 100
        const pauseTime = isDeleting ? 500 : 2000

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayedText.length < currentPhrase.length) {
                    setDisplayedText(currentPhrase.slice(0, displayedText.length + 1))
                } else {
                    setTimeout(() => setIsDeleting(true), pauseTime)
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText(displayedText.slice(0, -1))
                } else {
                    setIsDeleting(false)
                    setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
                }
            }
        }, typingSpeed)

        return () => clearTimeout(timeout)
    }, [displayedText, isDeleting, currentPhraseIndex])

    return (
        <section className='relative flex flex-col gap-[40px] md:gap-[80px] max-w-[1180px] min-[1440px]:max-w-[1660px] mx-auto px-[10px] sm:px-[20px] md:px-[30px] min-[1665px]:px-0! py-[50px] w-full'>
            <Heading title='About Us' description='Who We Are and What We Do' className='pt-[100px]' />

            {/* DESKTOP */}
            <div className="max-md:hidden flex items-center justify-center pb-[100px]">
                {/* IMAGE CLIP */}
                <div
                    className="w-[300px] lg:w-[450px] xl:w-[582.5px] h-[390px] overflow-hidden rounded-[15px] relative z-10 -translate-x-[45%]"
                    style={{
                        clipPath: 'polygon(0 0, 100% 14%, 100% 89%, 0% 100%)'
                    }}
                >
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={`About us ${index + 1}`}
                            fill
                            className={`object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        />
                    ))}
                </div>

                {/* RED shape */}
                <div
                    className="w-[400px] lg:w-[550px] xl:w-[649px] h-[473px] overflow-hidden rounded-[15px] bg-[#FFD6D4] absolute translate-x-[40%] z-0 flex items-center justify-center pl-18"
                    style={{
                        clipPath: 'polygon(0 14%, 100% 0, 100% 100%, 0 89%)'
                    }}
                >
                    <div className="text-left max-w-[450px]">
                        <h3 className="text-[28px] font-inter font-bold mb-4 leading-tight">
                            Your Trusted <span className="text-[#C1121F]">
                                {displayedText}
                                <span className="animate-pulse">|</span>
                            </span>
                        </h3>
                        <p className="font-inter text-[16px] leading-auto text-black pr-12">
                            We are a leading wholesale and retail supplier of PPE, Packaging, Office Supplies, and General Hardware & Electrical products based on Cebu, Philippines. We also specialize in the manufacturing of premium-quality stretch film.
                        </p>
                    </div>
                </div>
            </div>

            {/* MOBILE */}
            <div className="md:hidden w-full flex-1 flex flex-col items-center justify-center pb-[300px]">
                {/* IMAGE CLIP */}
                <div
                    className="w-full h-[390px] overflow-hidden rounded-[15px] relative z-10"
                    style={{
                        clipPath: 'polygon(50% 0%, 100% 0, 100% 35%, 100% 70%, 79% 83%, 50% 100%, 23% 84%, 0% 70%, 0% 35%, 0 0)'
                    }}
                >
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={`About us ${index + 1}`}
                            fill
                            className={`object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        />
                    ))}
                </div>

                {/* RED shape */}
                <div
                    className="w-full left-0 right-0 h-[473px] overflow-hidden rounded-[15px] bg-[#FFD6D4] absolute translate-y-[50%] z-0 flex items-center justify-center pt-32 px-[10px]"
                >
                    <div className="text-left max-w-[450px]">
                        <h3 className="text-[20px] sm:text-[24px] text-center font-inter font-bold mb-4 leading-tight">
                            Your Trusted <span className="text-[#C1121F]">
                                {displayedText}
                                <span className="animate-pulse">|</span>
                            </span>
                        </h3>
                        <p className="font-inter text-center text-[14px] sm:text-[15px] leading-auto text-black">
                            We are a leading wholesale and retail supplier of PPE, Packaging, Office Supplies, and General Hardware & Electrical products based on Cebu, Philippines. We also specialize in the manufacturing of premium-quality stretch film.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs