import { motion } from "framer-motion"
import Image from "next/image"
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
    const siteLinks = [
        {
            label: "Home",
            href: "#hero"
        },
        {
            label: "About Us",
            href: "#about"
        },
        {
            label: "Products",
            href: "#products"
        },
        {
            label: "Clients",
            href: "#clients"
        },
        {
            label: "Contact Us",
            href: "#contact"
        }
    ]

    return (
        <>
            <footer className='relative bg-[#FFD9D7] w-full'>
                <div className='flex justify-between max-lg:flex-col gap-[10px] py-[8px] max-w-[1180px] min-[1440px]:max-w-[1660px] mx-auto px-[10px] sm:px-[20px] md:px-[30px] min-[1665px]:px-0!'>
                    <div className='flex flex-col gap-[10px] max-md:pt-[30px] max-lg:pb-0 py-[50px] max-xl:w-auto! w-1/2'>
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.6, 0.05, 0.01, 0.9],
                                delay: 0.4
                            }}
                            className="flex items-center lg:gap-[10px]"
                        >
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.6, 0.05, 0.01, 0.9],
                                    delay: 0.5
                                }}
                                className="w-[60px] sm:w-[80px] lg:w-[88px] h-auto lg:h-[72px]"
                            >
                                <Image src="/assets/images/logo.png" alt="LJCB Philippines Inc." width={109} height={72} className="w-full h-full object-contain" />
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.7
                                }}
                                className="text-[14px] sm:text-[16px] font-montserrat-alternates font-semibold"
                            >
                                LJCB Philippines <br />
                                Incorporated
                            </motion.h1>
                        </motion.div>
                        <div className='flex gap-[10px] py-[14px] max-md:pb-0 max-lg:px-0 px-[19px]'>
                            <FaFacebook />
                            <FaGoogle />
                        </div>
                    </div>
                    <div className='max-md:text-[14px] flex max-md:flex-col justify-between max-xl:w-auto! w-1/2 gap-[30px]'>
                        <div className='flex flex-col gap-[10px] max-md:pb-0 max-md:pt-[20px] max-lg:pt-[30px] py-[50px]'>
                            <p className='font-inter font-bold'>Site Links</p>
                            {siteLinks.map((link) => (
                                <a href={link.href} key={link.label} className='font-inter max-md:text-[14px] text-[16px] hover:text-shadow-lg transition-all duration-500'>
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <div className='flex flex-col gap-[10px] max-md:pb-[30px] max-md:pt-0 max-lg:pt-[30px] py-[50px]'>
                            <p className='font-inter font-bold'>Company Info</p>
                            <div className='flex items-center gap-[10px]'>
                                <FaLocationDot />
                                <p>Building 3 Unit 19 & 20, Celadon Town, Pajac, Lapu-Lapu City, Cebu, 6015, Philippines</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <IoIosPhonePortrait />
                                <p>09950014571</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <MdCall />
                                <p>261-6089</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <FaEnvelope />
                                <p>ljcbphilinc2021@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='font-inter text-[16px] text-center bg-primary text-white py-2'>
                © 2025 All Rights Reserved | LJCB Philippines Incorporated
            </div>
        </>
    )
}

export default Footer