import React from 'react'
import Button from './Button'
import Image from 'next/image'
import { FEATURE_LINK } from '@/constants'
import Link from 'next/link'

function Features() {
  return (
    <section className="max-container padding-container mt-10">
      <div className='flexCenter'>
      <Button type='button'
      title='Features'
      variant='btn_white_blue'/>
      </div>
      <div className='text-center mt-10'>
        <h1 className='text-[#242331] xl:regular-40 lg:regular-40 md:regular-40 regular-32 text-center'><span className='text-[#0C5BC6]'>Save 1000s</span> of expensive coder hours</h1>
        <p className='text-[#494369] regular-24 xl:text-[20px] mt-2'>With cloud native technologies, we assist in modernising infrastructure and applications for resilience and scalability.</p>
      </div>
      <nav className=" flexBetween max-container padding-container relative z-30 py-3  mt-5">

      <ul className="hidden h-full gap-12 lg:flex">
            {FEATURE_LINK.map((link)=>(
              <Link href={link.key} key={link.key} className="regular-16 text-[#242331] flexCenter cursor-pointer  transition-all hover:font-bold border rounded  p-2 shadow-lg">
                {link.label}
              </Link>
            ))}
          </ul>
        </nav>
      <div className='flexCenter gap-[20%] xl:mt-0 xl:mb-20 xl:flex-row flex-col'>
      <div className='text-center mt-10'>
        <h2 className='text-[16px] font-[700]'>Without Xerocodee</h2>
        <Image src='/without.png' width={200} height={90} alt='without' className='xl:mt-8 '/>
      </div>
      <div className='text-center mt-10'>
        <h2 className='text-[16px] font-[700]'>With Xerocodee</h2>
        <Image src='/with.png' width={250} height={100} alt='without' className='xl:mt-10'/>
      </div>
      </div>
    </section>
  )
}

export default Features