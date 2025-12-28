'use client'
import Heading from '../base/Heading'
import Image from 'next/image'

// Client logos
const clientLogos = [
    '/assets/images/logos/bellshayce.jpg',
    '/assets/images/logos/bpindustrial.png',
    '/assets/images/logos/btc.png',
    '/assets/images/logos/c&r.jpg',
    '/assets/images/logos/carmen.jpg',
    '/assets/images/logos/cebuworldlaminate.jpg',
    '/assets/images/logos/conception-otis.jpg',
    '/assets/images/logos/cymru.jpg',
    '/assets/images/logos/degalen.jpg',
    '/assets/images/logos/first-granduer.png',
    '/assets/images/logos/ggc.jpg',
    '/assets/images/logos/higher-ground-christian-learning.png',
    '/assets/images/logos/janice.png',
    '/assets/images/logos/jms.jpg',
    '/assets/images/logos/jomara-earthmoving.jpg',
    '/assets/images/logos/jomara-konstruct.jpg',
    '/assets/images/logos/kd.jpg',
    '/assets/images/logos/leyte-1v-coop.jpg',
    '/assets/images/logos/mactan-steel.png',
    '/assets/images/logos/mosbeau.png',
    '/assets/images/logos/moto-industrial.png',
    '/assets/images/logos/muramoto.jpg',
    '/assets/images/logos/needink.jpg',
    '/assets/images/logos/no1-gpt.jpg',
    '/assets/images/logos/NSB.png',
    '/assets/images/logos/oriental-mining.jpg',
    '/assets/images/logos/pacificrose.jpg',
    '/assets/images/logos/passepartout.png',
    '/assets/images/logos/piccadilly.png',
    '/assets/images/logos/rovilla.jpg',
    '/assets/images/logos/S2C.jpg',
    '/assets/images/logos/shemberg.jpg',
    '/assets/images/logos/skygo.jpg',
    '/assets/images/logos/steelworks.jpg',
    '/assets/images/logos/sunpride-foods.jpg',
    '/assets/images/logos/superior-gas.png',
    '/assets/images/logos/symhonas.jpg',
    '/assets/images/logos/tokyo-microshaft.png',
    '/assets/images/logos/top-lifegear.png',
    '/assets/images/logos/toyoflex.jpg',
    '/assets/images/logos/venray.png',
    '/assets/images/logos/WORLDWIDE.jpg',
    '/assets/images/logos/yamashin.jpg',
]

// Shuffle function with seed for consistent shuffling
const shuffleArray = (array: string[], seed: number) => {
    const shuffled = [...array]
    let currentIndex = shuffled.length
    let randomIndex: number
    
    // Simple seeded random function
    const seededRandom = (s: number) => {
        const x = Math.sin(s) * 10000
        return x - Math.floor(x)
    }
    
    while (currentIndex !== 0) {
        randomIndex = Math.floor(seededRandom(seed + currentIndex) * currentIndex)
        currentIndex--
        [shuffled[currentIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[currentIndex]]
    }
    
    return shuffled
}

const row1Logos = shuffleArray(clientLogos, 1)
const row2Logos = shuffleArray(clientLogos, 2)
const row3Logos = shuffleArray(clientLogos, 3)

const Clients = () => {
    return (
        <div className='bg-white'>
            <section id="clients" className='relative flex flex-col gap-[40px] md:gap-[80px] max-w-[1180px] min-[1440px]:max-w-[1660px] mx-auto px-[10px] sm:px-[20px] md:px-[30px] min-[1665px]:px-0! py-[50px] w-full'>
                <Heading title='Clients' description='Businesses That Trust Us' className='pt-[60px]' />
            </section>
            
            {/* Logo Carousel Section */}
            <div className='overflow-hidden pb-[80px]'>
                {/* First Row - Scrolls Right */}
                <div className='flex mb-8'>
                    <div className='flex animate-scroll-right'>
                        {[...row1Logos, ...row1Logos].map((logo, index) => (
                            <div
                                key={`row1-${index}`}
                                className='shrink-0 w-[200px] h-[120px] mx-6 flex items-center justify-center'
                            >
                                <Image
                                    src={logo}
                                    alt={`Client logo ${index + 1}`}
                                    width={160}
                                    height={80}
                                    className='max-w-[160px] max-h-[80px] object-contain transition-all duration-300'
                                />
                            </div>
                        ))}
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className='flex animate-scroll-right'>
                        {[...row1Logos, ...row1Logos].map((logo, index) => (
                            <div
                                key={`row1-dup-${index}`}
                                className='shrink-0 w-[200px] h-[120px] mx-6 flex items-center justify-center'
                            >
                                <Image
                                    src={logo}
                                    alt={`Client logo ${index + 1}`}
                                    width={160}
                                    height={80}
                                    className='max-w-[160px] max-h-[80px] object-contain transition-all duration-300'
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Row - Scrolls Left */}
                <div className='flex mb-8'>
                    <div className='flex animate-scroll-left'>
                        {[...row2Logos, ...row2Logos].map((logo, index) => (
                            <div
                                key={`row2-${index}`}
                                className='shrink-0 w-[200px] h-[120px] mx-6 flex items-center justify-center'
                            >
                                <Image
                                    src={logo}
                                    alt={`Client logo ${index + 1}`}
                                    width={160}
                                    height={80}
                                    className='max-w-[160px] max-h-[80px] object-contain transition-all duration-300'
                                />
                            </div>
                        ))}
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className='flex animate-scroll-left'>
                        {[...row2Logos, ...row2Logos].map((logo, index) => (
                            <div
                                key={`row2-dup-${index}`}
                                className='shrink-0 w-[200px] h-[120px] mx-6 flex items-center justify-center'
                            >
                                <Image
                                    src={logo}
                                    alt={`Client logo ${index + 1}`}
                                    width={160}
                                    height={80}
                                    className='max-w-[160px] max-h-[80px] object-contain'
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Third Row - Scrolls Right */}
                <div className='flex'>
                    <div className='flex animate-scroll-right'>
                        {[...row3Logos, ...row3Logos].map((logo, index) => (
                            <div
                                key={`row3-${index}`}
                                className='shrink-0 w-[200px] h-[120px] mx-6 flex items-center justify-center'
                            >
                                <Image
                                    src={logo}
                                    alt={`Client logo ${index + 1}`}
                                    width={160}
                                    height={80}
                                    className='max-w-[160px] max-h-[80px] object-contain'
                                />
                            </div>
                        ))}
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className='flex animate-scroll-right'>
                        {[...row3Logos, ...row3Logos].map((logo, index) => (
                            <div
                                key={`row3-dup-${index}`}
                                className='shrink-0 w-[200px] h-[120px] mx-6 flex items-center justify-center'
                            >
                                <Image
                                    src={logo}
                                    alt={`Client logo ${index + 1}`}
                                    width={160}
                                    height={80}
                                    className='max-w-[160px] max-h-[80px] object-contain'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients