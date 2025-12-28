'use client';

import { useState, useEffect } from 'react';
import Heading from '../base/Heading';
import { categoriesData, Category } from '@/data/productsData';
import Image from 'next/image';
import GlassButton from '../base/Button';

interface ProductsProps {
    onCategoryClick: (category: Category) => void;
}

const Products = ({ onCategoryClick }: ProductsProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsShown, setItemsShown] = useState(3);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? categoriesData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === categoriesData.length - 1 ? 0 : prev + 1));
    };

    const handleCategoryClick = (category: Category, index: number) => {
        setCurrentIndex(index);
        onCategoryClick(category);
    };

    // Calculate scroll index based on current index and items shown
    const getScrollIndex = () => {
        const totalItems = categoriesData.length;
        
        // For mobile (1 item), always center the selected item
        if (itemsShown === 1) {
            return currentIndex;
        }
        
        // For tablet (2 items)
        if (itemsShown === 2) {
            // First item stays at start
            if (currentIndex === 0) return 0;
            // Last item stays at end
            if (currentIndex === totalItems - 1) return Math.max(0, totalItems - itemsShown);
            // Others scroll normally to show on left
            return Math.min(currentIndex, totalItems - itemsShown);
        }
        
        // For desktop (3 items)
        // First and second items don't scroll
        if (currentIndex <= 1) return 0;
        
        // Last and second-to-last items stay at end
        if (currentIndex >= totalItems - 2) {
            return Math.max(0, totalItems - itemsShown);
        }
        
        // Middle items are centered (at position 1 when 3 items shown)
        return currentIndex - 1;
    };

    useEffect(() => {
        const itemsPerView = {
            mobile: 1,
            tablet: 1,
            desktop: 3,
        };

        const getItemsPerView = () => {
            if (typeof window === 'undefined') return itemsPerView.desktop;
            if (window.innerWidth < 768) return itemsPerView.mobile;
            if (window.innerWidth < 1024) return itemsPerView.tablet;
            return itemsPerView.desktop;
        };

        const handleResize = () => {
            const newItemsShown = getItemsPerView();
            setItemsShown(newItemsShown);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="products" className='relative flex flex-col gap-[40px] md:gap-[80px] max-w-[1180px] min-[1440px]:max-w-[1660px] mx-auto px-[10px] sm:px-[20px] md:px-[30px] min-[1665px]:px-0! py-[50px] w-full'>
            <Heading title='Products' description='Our Range of Quality Supplies and Solutions' />

            {/* Carousel Container */}
            <div className='relative mx-auto'>
                {/* Navigation Buttons */}
                <button
                    onClick={handlePrevious}
                    className='absolute left-0 top-1/2 -translate-y-[90%] -translate-x-2 min-[1440px]:-translate-x-16 z-60 w-12 h-12 rounded-full 
            bg-black/10 border border-black/30 backdrop-blur-sm
            shadow-[inset_0_1px_0px_rgba(0,0,0,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)]
            hover:bg-black/20 
            transition-all duration-300
            flex items-center justify-center
            before:absolute before:inset-0 before:rounded-full
            before:bg-linear-to-br before:from-black/30 before:via-transparent before:to-transparent
            before:opacity-70 before:pointer-events-none
            after:absolute after:inset-0 after:rounded-full
            after:bg-linear-to-tl after:from-black/20 after:via-transparent after:to-transparent
            after:opacity-50 after:pointer-events-none cursor-pointer'
                    aria-label='Previous'
                >
                    <svg className='w-6 h-6 text-black relative z-10' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                    </svg>
                </button>

                <button
                    onClick={handleNext}
                    className='absolute right-0 top-1/2 -translate-y-[90%] -translate-x-2 min-[1440px]:translate-x-16 z-60 w-12 h-12 rounded-full 
            bg-black/10 border border-black/30 backdrop-blur-sm
            shadow-[inset_0_1px_0px_rgba(0,0,0,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)]
            hover:bg-black/20 
            transition-all duration-300
            flex items-center justify-center
            before:absolute before:inset-0 before:rounded-full
            before:bg-linear-to-br before:from-black/30 before:via-transparent before:to-transparent
            before:opacity-70 before:pointer-events-none
            after:absolute after:inset-0 after:rounded-full
            after:bg-linear-to-tl after:from-black/20 after:via-transparent after:to-transparent
            after:opacity-50 after:pointer-events-none cursor-pointer'
                    aria-label='Next'
                >
                    <svg className='w-6 h-6 text-black relative z-10' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                </button>

                {/* Carousel Track */}
                <div className='overflow-hidden max-w-[300px] sm:max-w-[500px] lg:max-w-[1000px] xl:max-w-[1200px] relative'>
                    {/* Left Gradient */}
                    <div className='absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-white to-transparent z-10 pointer-events-none' />

                    {/* Right Gradient */}
                    <div className='absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-white to-transparent z-10 pointer-events-none' />

                    <div
                        className='flex items-center transition-transform duration-500 ease-out h-auto'
                        style={{
                            transform: `translateX(-${getScrollIndex() * (100 / itemsShown)}%)`
                        }}
                    >
                        {categoriesData.map((category, index) => {
                            const isCenterItem = index === currentIndex;

                            return (
                                <div
                                    key={category.id}
                                    className='shrink-0 px-2 md:px-3 transition-all duration-500 h-auto'
                                    style={{
                                        width: `${100 / itemsShown}%`,
                                        transform: isCenterItem ? '' : 'scale(0.80) translateY(-10%)',
                                        opacity: isCenterItem ? 1 : 0.5,
                                        filter: isCenterItem ? 'blur(0px)' : 'blur(2px)',
                                    }}
                                >
                                    <button
                                        onClick={() => handleCategoryClick(category, index)}
                                        className='w-full'
                                    >
                                        <div className='flex flex-col items-center gap-[20px] p-4 md:p-6 hover:opacity-50 transform-all duration-300 hover:cursor-pointer'>
                                            <div className='w-[310px] h-auto'>
                                                <Image className='w-full! h-full! object-contain' src={category.image} alt={category.title} width={310} height={100} />
                                            </div>
                                            <h3 className='text-center text-black font-bold text-lg md:text-xl font-montserrat'>
                                                {category.title}
                                            </h3>
                                        </div>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-[15px]'>
                    <div className='text-center text-black font-inter text-[14px] md:text-[16px] leading-tight'>
                        <p>Click image to view products of each category</p>
                    </div>
                    <GlassButton
                        text="Get a Quote →"
                        onClick={() => console.log('clicked')}
                        variant='black'
                        className='text-[16px]! md:text-[18px]! lg:text-[20px]!'
                    />
                </div>
            </div>
        </section>
    )
}

export default Products