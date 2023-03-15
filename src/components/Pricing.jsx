import React from 'react';

import { CheckIcon } from '@heroicons/react/solid';

const Pricing = () => {
  return (
    <div name='pricing' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-3xl uppercase'>Pricing</h2>
          <h3 className='text-5xl font-bold text-white py-8'>The right price for your research.</h3>
          <p className='text-3xl'>
          We offers a host of logistic management services and supply chain solutions. We offer an unrivalled direct delivery service to any Emirate as well as same Emirate for fast delivery of your urgent orders/items, where the services of a dedicated driver are required to go immediately from door to door.We will manage your product delivery.
          </p>
        </div>

        <div className='grid md:grid-cols-2'>

          <div className='bg-white text-slate-900 m-4 p-6 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>We provide a range of support options to suit your customers, including tele</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />We are offering a professional  Sales man creativity  provide our.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />We are offering a professional yet Food Delivery environment that encourages creativity </p>
               
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />We are offering a professional labour </p>
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-4 p-6 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$89<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>We provide a range of support options to suit your customers, including tele</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />We are offering a professional  Sales man creativity  provide our.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />We are offering a professional yet Food Delivery environment that encourages creativity </p>
               
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />We are offering a professional labour </p>
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Pricing;
