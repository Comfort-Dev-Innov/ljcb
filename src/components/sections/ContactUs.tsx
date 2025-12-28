import Image from 'next/image'
import Input from '../base/Input'
import { useState } from 'react'
import TextArea from '../base/TextArea'
import GlassButton from '../base/Button'

const ContactUs = () => {
  const [formFields, setFormFields] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    message: '',
  })
  return (
    <section id="contact" className='relative flex flex-col gap-[40px] md:gap-[80px] bg-primary overflow-hidden py-[50px] w-full'>
      {/* Top Right Pattern */}
      <div className='absolute top-0 right-[-100px] w-[300px] h-[150px] md:w-[450px] md:h-[220px] lg:w-[650px] lg:h-[270px] pointer-events-none' style={{ transform: 'rotate(10.57deg)' }}>
        <Image
          src='/assets/images/pattern_1.png'
          alt=''
          fill
          className='object-contain object-bottom-left'
          style={{ objectPosition: 'left bottom' }}
        />
      </div>

      {/* Bottom Left Pattern (Rotated) */}
      <div className='absolute bottom-0 left-[-100px] w-[300px] h-[150px] md:w-[450px] md:h-[220px] lg:w-[650px] lg:h-[270px] rotate-180 pointer-events-none'>
        <Image
          src='/assets/images/pattern_1.png'
          alt=''
          fill
          className='object-cover object-bottom-left'
          style={{ objectPosition: 'left bottom' }}
        />
      </div>

      {/* Content Container */}
      <div className='relative z-10 max-w-[1180px] min-[1440px]:max-w-[1660px] mx-auto px-[10px] sm:px-[20px] md:px-[30px] min-[1665px]:px-0 py-[70px] w-full'>
        <div className='flex max-md:flex-col gap-[30px] lg:gap-[50px] xl:gap-[100px]'>
          <div className='flex flex-col gap-[20px] w-full md:w-1/2 justify-center'>
            <h1 className='font-montserrat text-[32px] font-bold text-white text-shadow-lg max-md:text-center'>We Are Always in the Ready to Assist You!</h1>
            <p className='font-inter text-[16px] text-white max-md:text-center'>
              Whether you&apos;re looking for PPE, packaging materials, office supplies, or hardware and electrical products in Cebu, we are here to assist you!
            </p>
            <p className='font-inter text-[16px] text-white max-md:text-center'>
              Have a question, need product details, or looking for a quick quotation? Our team is here to help. Simply fill out the form and we’ll respond as soon as possible with the information you need.
            </p>
          </div>
          <div className='flex flex-col p-[40px] bg-white gap-[20px] rounded-[20px] w-full md:w-1/2'>
            <h1 className='font-inter font-bold text-[20px] text-primary'>Contact Our Team</h1>
            <div className='flex flex-col gap-[30px]'>
              <Input
                label='Full Name'
                placeholder='Enter your full name...'
                value={formFields.fullName}
                onChange={(e) => setFormFields({ ...formFields, fullName: e.target.value })}
                required
              />
              <Input
                label='Email Address'
                placeholder='Enter your email address...'
                value={formFields.email}
                onChange={(e) => setFormFields({ ...formFields, email: e.target.value })}
                required
                type='email'
              />
              <Input
                label='Phone Number'
                placeholder='Enter your mobile number...'
                value={formFields.phone}
                onChange={(e) => setFormFields({ ...formFields, phone: e.target.value })}
                type='tel'
                required={false}
              />
              <Input
                label='Company Name'
                placeholder='Enter your company/business name...'
                value={formFields.companyName}
                onChange={(e) => setFormFields({ ...formFields, companyName: e.target.value })}
                type='tel'
                required={false}
              />
              <TextArea
                label='Message/Inquiry Details'
                placeholder='Enter your message...'
                value={formFields.message}
                className='h-[285px]'
                onChange={(e) => setFormFields({ ...formFields, message: e.target.value })}
              />
            </div>
            <GlassButton
              text="Send Message Now!"
              onClick={() => console.log('clicked')}
              variant='black'
              className='w-auto! text-[16px]! md:text-[18px]! lg:text-[20px]!'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs