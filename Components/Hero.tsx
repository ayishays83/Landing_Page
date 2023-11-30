import React from 'react'
import Button from './Button'
import Image from 'next/image'

function Hero() {
  return (
   <section className="max-container padding-container mt-10 text-center flex flex-col">
    <h1 className='xl:regular-64 lg:regular-64 md:regular-40 regular-32 text-center '>Build your audience and grow your brand</h1>
    <p className=' mt-5 regular-24 text-[#797979] xl:text-[20px] '>no more, no less. Deploy from our single pane of glass, manage them with ease and scale up as fast as your workload grows.</p>
    <div className='flexCenter mt-5'>
    <Button 
    type='submit'
    title='Get Started Now'
    variant='btn_blue'
    />
    </div>
    <div className='flexCenter'>
    <Image
    src='/hero.png'
    alt='hero'
    width={1000}
    height={172}
    />
    </div>    
   </section>
  )
}

export default Hero