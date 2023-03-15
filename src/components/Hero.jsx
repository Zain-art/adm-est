import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/cyber-bg.png'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-lg'>Are Digital and Social Media Marketing Essential to Business</p>
                <h6 className='py-3 text-4xl md:text-3xl font-bold'> ADM EST NO# 1 Social Media Marketing

</h6>
                
                <button className='py-3 px-6 sm:w-[60%] my-4 bg-indigo-500 text-white'>Get Started</button>
            </div>
            <div>
                <img className='w-full' src={bgImg} alt="/" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p className='text-2xl font-bold mb-3'>AMD Social Marketing Services</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'> <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-e07ea62/wp-content/themes/thrive-agency/images/content-write.svg" alt="" width='25' height='25' className='mr-3 object-cover' /> High Search Rankings</p>
                    <p className='flex px-4 py-2 text-slate-500'> <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-e07ea62/wp-content/themes/thrive-agency/images/bullhorn.svg" alt="" width='25' height='25' className='mr-3 object-cover'  /> Multiple Marketing Options</p>
                    <p className='flex px-4 py-2 text-slate-500'> <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-e07ea62/wp-content/themes/thrive-agency/images/seo-desk.svg" alt=""  width='25' height='25' className='mr-3 object-cover' /> Search Engine Optimization</p>
                    <p className='flex px-4 py-2 text-slate-500'> <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-e07ea62/wp-content/themes/thrive-agency/images/ppc-advertising.svg" alt=""width='25' height='25' className='mr-3 object-cover' />Pay-Per-Click</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero