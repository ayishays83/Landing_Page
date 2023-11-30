import React from 'react'
import { FEATURES } from '@/constants';
import Image from 'next/image';

function Scaling() {
  return (
    <div className='max-container padding-container mt-10'>
      <h1 className='text-[#242331] xl:regular-40 lg:regular-40 md:regular-40 regular-32 text-center'>Self serve infrastructure platform for <span className='text-[#0C5BC6]'>scaling teams</span></h1>
    <div className='max-container padding-container flexCenter'>  
    <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
      {FEATURES.map((feature) => (
        <FeatureItem 
          key={feature.title}
          title={feature.title} 
          icon={feature.icon}
          description={feature.description}
        />
      ))}
    </ul>
  </div>
  </div>
  )
}
type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <div className="flex w-full flex-1 gap-5 flex-row items-start">
      <div className="rounded p-4 lg:p-7 bg-[#FFFFFF] shadow-lg">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <div className=''>
      <h2 className="bold-20 lg:bold-32  capitalize">
        {title}
      </h2>
      <p className="regular-16  bg-white/80 text-gray-30  lg:bg-none">
        {description}
      </p>
      </div>
    </div>
  )
}

export default Scaling