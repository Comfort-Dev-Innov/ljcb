'use client'

import Image from 'next/image'
import { IconType } from 'react-icons'
import { useState } from 'react'

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
    { label: 'Home', href: '#', icon: IoHome },
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
        <header className="flex items-center justify-between max-w-[1180px] min-[1440px]:max-w-[1660px] mx-auto px-[10px] sm:px-[20px] md:px-[30px] min-[1665px]:px-0!">
            <div className="flex items-center max-lg:gap-[10px]">
                <div className="w-[60px] sm:w-[80px] lg:w-[109px] h-auto lg:h-[72px]">
                    <Image src="/assets/images/logo.png" alt="LJCB Philippines Inc." width={109} height={72} className="w-full h-full object-contain" />
                </div>
                <h1 className="text-[14px] sm:text-[16px] font-montserrat-alternates font-bold text-white">
                    LJCB Philippines <br />
                    Incorporated
                </h1>
            </div>
            <div className="hidden md:block">
                <nav>
                    <ul className="flex gap-[10px]">
                        {menuItems.map((item) => (
                            <li
                                key={item.href}
                                className="px-[12px] lg:px-[25px] py-[10px] lg:py-[16px] last:pr-0 relative"
                            >
                                <a
                                    href={item.href}
                                    className="font-inter text-[14px] lg:text-[16px] text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:text-secondary transition-all duration-300"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="block md:hidden">
                <RxHamburgerMenu 
                    className="text-white text-[23px] cursor-pointer"
                    onClick={toggleDrawer}
                />
            </div>

            {/* Mobile Drawer */}
            {isDrawerOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={closeDrawer}
                    />
                    
                    {/* Drawer */}
                    <div className="absolute right-0 top-0 h-full w-[280px] bg-white/20 backdrop-blur-xl shadow-2xl border-l border-white/30 animate-slide-in-right">
                        <div className="flex justify-end p-6">
                            <IoClose 
                                className="text-white text-[28px] cursor-pointer hover:text-primary hover:scale-110 transition-all"
                                onClick={closeDrawer}
                            />
                        </div>
                        <nav className="px-6">
                            <ul className="space-y-2">
                                {menuItems.map((item) => {
                                    const Icon = item.icon
                                    return (
                                        <li key={item.href}>
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
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;