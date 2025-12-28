'use client'

import Image from 'next/image'
import { IconType } from 'react-icons'
import { useState } from 'react'
import { motion } from 'framer-motion'

import { IoClose, IoHome, IoInformationCircle, IoCall } from "react-icons/io5"
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserTag } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";

type MenuItem = {
    label: string
    href: string
    icon: IconType
    subMenu?: { label: string; href: string }[]
}

const menuItems: MenuItem[] = [
    { label: 'Home', href: '#hero', icon: IoHome },
    { label: 'About Us', href: '#about', icon: IoInformationCircle, },
    { label: 'Products', href: '#products', icon: AiFillProduct },
    { label: 'Clients', href: '#clients', icon: FaUserTag },
    { label: 'Contact Us', href: '#contact', icon: IoCall },
]

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }

    const closeDrawer = () => {
        setIsDrawerOpen(false)
    }

    return (
        <motion.header 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
                duration: 0.8, 
                ease: [0.6, 0.05, 0.01, 0.9],
                delay: 0.2 
            }}
            className="relative z-50 flex items-center justify-between max-w-[1180px] min-[1440px]:max-w-[1660px] mx-auto px-[10px] sm:px-[20px] md:px-[30px] min-[1665px]:px-0!"
        >
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
                    className="text-[14px] sm:text-[16px] font-montserrat-alternates font-bold text-white"
                >
                    LJCB Philippines <br />
                    Incorporated
                </motion.h1>
            </motion.div>
            <div className="hidden md:block">
                <nav>
                    <motion.ul 
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.6
                                }
                            }
                        }}
                        className="flex gap-[10px]"
                    >
                        {menuItems.map((item) => (
                            <motion.li
                                key={item.href}
                                variants={{
                                    hidden: { y: -20, opacity: 0 },
                                    visible: { 
                                        y: 0, 
                                        opacity: 1,
                                        transition: {
                                            duration: 0.6,
                                            ease: [0.6, 0.05, 0.01, 0.9]
                                        }
                                    }
                                }}
                                className="px-[12px] lg:px-[25px] py-[10px] lg:py-[16px] last:pr-0 relative"
                            >
                                <a
                                    href={item.href}
                                    className="font-inter text-[14px] lg:text-[16px] text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:text-secondary transition-all duration-300"
                                >
                                    {item.label}
                                </a>
                            </motion.li>
                        ))}
                    </motion.ul>
                </nav>
            </div>
            <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                    duration: 0.5, 
                    delay: 0.8,
                    ease: [0.6, 0.05, 0.01, 0.9]
                }}
                className="block md:hidden"
            >
                <RxHamburgerMenu 
                    className="text-white text-[23px] cursor-pointer"
                    onClick={toggleDrawer}
                />
            </motion.div>

            {/* Mobile Drawer */}
            {isDrawerOpen && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-100 md:hidden"
                >
                    {/* Backdrop */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={closeDrawer}
                    />
                    
                    {/* Drawer */}
                    <motion.div 
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ 
                            type: 'spring', 
                            stiffness: 300, 
                            damping: 30 
                        }}
                        className="absolute right-0 top-0 h-full w-[280px] bg-white/20 backdrop-blur-xl shadow-2xl border-l border-white/30"
                    >
                        <motion.div 
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex justify-end p-6"
                        >
                            <IoClose 
                                className="text-white text-[28px] cursor-pointer hover:text-primary hover:scale-110 transition-all"
                                onClick={closeDrawer}
                            />
                        </motion.div>
                        <nav className="px-6">
                            <motion.ul 
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.08,
                                            delayChildren: 0.1
                                        }
                                    }
                                }}
                                className="space-y-2"
                            >
                                {menuItems.map((item) => {
                                    const Icon = item.icon
                                    return (
                                        <motion.li 
                                            key={item.href}
                                            variants={{
                                                hidden: { x: 50, opacity: 0 },
                                                visible: { 
                                                    x: 0, 
                                                    opacity: 1,
                                                    transition: {
                                                        duration: 0.5,
                                                        ease: [0.6, 0.05, 0.01, 0.9]
                                                    }
                                                }
                                            }}
                                        >
                                            <a
                                                href={item.href}
                                                onClick={closeDrawer}
                                                className="flex items-center gap-4 px-4 py-3 text-white hover:bg-white/30 rounded-lg transition-all duration-300 group"
                                            >
                                                <Icon className="text-[22px] group-hover:text-secondary group-hover:scale-110 transition-all" />
                                                <span className="font-inter text-[16px] font-medium group-hover:text-secondary transition-colors">
                                                    {item.label}
                                                </span>
                                            </a>
                                        </motion.li>
                                    )
                                })}
                            </motion.ul>
                        </nav>
                    </motion.div>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Header;