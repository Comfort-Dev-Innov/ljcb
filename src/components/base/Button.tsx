'use client'
import Link from 'next/link'
import { ButtonHTMLAttributes } from 'react'

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  href?: string
  variant?: 'white' | 'black'
}

const GlassButton = ({ 
  text, 
  href, 
  className = '',
  variant = 'white',
  ...props 
}: GlassButtonProps) => {
  const variantClasses = variant === 'black' 
    ? `
      text-black
      bg-black/[0.025]
      border-black/50
      shadow-[inset_0_1px_0px_rgba(0,0,0,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)]
      hover:bg-black/30
      before:bg-linear-to-br before:from-black/60 before:via-transparent before:to-transparent
      after:bg-linear-to-tl after:from-black/30 after:via-transparent after:to-transparent
    `
    : `
      text-white
      bg-white/[0.025]
      border-white/50
      shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)]
      hover:bg-white/30
      before:bg-linear-to-br before:from-white/60 before:via-transparent before:to-transparent
      after:bg-linear-to-tl after:from-white/30 after:via-transparent after:to-transparent
    `

  const buttonClasses = `
    relative
    inline-flex items-center justify-center gap-[10px]
    border align-middle select-none
    font-inter font-medium text-center
    px-[25px] py-[10px]
    text-[18px]
    rounded-[25px]
    backdrop-blur-sm
    transition-all duration-300
    before:absolute before:inset-0 before:rounded-[25px]
    before:opacity-70 before:pointer-events-none
    after:absolute after:inset-0 after:rounded-[25px]
    after:opacity-50 after:pointer-events-none
    antialiased
    cursor-pointer
    ${variantClasses}
    ${className}
  `

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {text}
      </span>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} {...props}>
      {content}
    </button>
  )
}

export default GlassButton