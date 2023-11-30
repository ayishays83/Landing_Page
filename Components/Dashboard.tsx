import React from 'react'
import Image from 'next/image'

function Dashboard() {
  return (
    <div className='flexCenter mt-[200px] max-container padding-container'>
    <div className='vector-1 '></div>
    <div className='vector-2 rotate-90'></div>
    
    <Image
    src='/dashboard-1.png'
    width={215.79}
    height={137.6}
    alt='dashboard-1'
    className='xl:w-[50%]'
    />
    <Image
    src='/dashboard-3.png'
    width={300}
    height={100}
    alt='dashboard-1'
    className=' xlabsolute left-[930px] top-[1090px]'
    />
    <Image
    src='/dashboard-2.png'
    width={300}
    height={264.49}
    alt='dashboard-1'
    className='absolute bottom-0 left-[350px]'
    />
    <div className='vector-2 rotates90'></div>
    <div className='vector-1 rotate-180'></div>

    </div>
)
}

export default Dashboard