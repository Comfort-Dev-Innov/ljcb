import React from 'react'

const Heading = ({ title, description, className }: { title: string, description: string, className?: string }) => {
    return (
        <div className={`flex flex-col gap-[5px] w-full items-center justify-center ${className}`}>
            <h2 className='text-[40px] font-montserrat font-extrabold bg-linear-to-b from-[#6E0F09] via-[#D41C12] to-[#6E0F09] bg-clip-text text-transparent'>
                {title}
            </h2>
            <p className='font-inter text-[22px] text-black'>{description}</p>
        </div>
    )
}

export default Heading