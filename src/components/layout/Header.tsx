import Image from 'next/image'
import { IconType } from 'react-icons'

import { IoClose, IoHome, IoInformationCircle, IoCall } from "react-icons/io5"
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
    return (
        <header className="flex items-center justify-between max-w-[1180px] min-[1440px]:max-w-[1660px] mx-auto px-[10px] sm:px-[20px] md:px-[30px] min-[1202px]:px-0">
            <div className="flex items-center">
                <div className="w-[80px] lg:w-[109px] h-auto lg:h-[72px]">
                    <Image src="/assets/images/logo.png" alt="LJCB Philippines Inc." width={109} height={72} className="w-full h-full object-contain" />
                </div>
                <h1 className="font-montserrat-alternates font-bold text-white">
                    LJCB Philippines <br />
                    Incorporated
                </h1>
            </div>
            <div className="hidden md:block">
                <nav>
                    <ul className="flex 2xl:gap-[30px]">
                        {menuItems.map((item) => (
                            <li
                                key={item.href}
                                className="px-[12px] lg:px-[20px] py-[10px] lg:py-[16px] last:pr-0 relative"
                            >
                                <a
                                    href={item.href}
                                    className="font-inter text-[14px] lg:text-[16px] text-white hover:drop-shadow-[0_0_4px_rgba(0,48,73,0.5)] hover:text-primary transition-all duration-300"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;