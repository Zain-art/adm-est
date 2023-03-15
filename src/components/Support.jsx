import React from 'react';

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'

import supportImg from '../assets/support.jpg'
import { FaInstagram } from 'react-icons/fa';

const Support = () => {
  return (
  <div name='support' className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Services</h2>
              <h3 className='text-5xl font-bold py-6 text-center'>Marketing is Not Enough You Need Sales!</h3>
              <p className='py-4 text-3xl text-slate-300 sm:text-xl flex-wrap'>Social media marketing means using social media platforms like Instagram, Twitter and Facebook to promote your brand and sell your product or service delivery.beatae, minus illo et cum vel? We provide a range of support options to suit your customers, including telephone, email, WhatsApp, and live online chat 24/7</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                  <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-e07ea62/wp-content/themes/thrive-agency/images/content-write.svg" alt="" width='70' height='70' className='-mt-16' />
                      <h3 className='font-bold text-2xl my-6'>content marketing/content creating.</h3>
                      <p className='text-gray-600 text-xl'>If your business comes out with a new item and you plan to promote the launch on social media, that's social media marketing..</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>advertising/sponsorship <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                  <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-e07ea62/wp-content/themes/thrive-agency/images/bullhorn.svg" alt="" width='70' height='70' className='-mt-16' />
                      <h3 className='font-bold text-2xl my-6'>Online Paid Ads</h3>
                      <p className='text-gray-600 text-xl'>Convert your visitors to leads, leads to prospects, prospects to customers, and customers to repeat buyers at one place with a Marketing and Sales funnel.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>social media management/community management.<ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                  <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-e07ea62/wp-content/themes/thrive-agency/images/website-d&d.svg" alt="" width='70' height='70' className='-mt-16' />
                      <h3 className='font-bold text-2xl my-6'>Marketing Ready Website Development</h3>
                      <p className='text-gray-600 text-xl'>We create beautifully customized websites that meet your business needs, whether they are e-commerce or informational and allow ....</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Marketing & Sales Automation<ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8 '>
                  <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-e07ea62/wp-content/themes/thrive-agency/images/seo-desk.svg" alt="" width='70' height='70' className='-mt-16' />
                      <h3 className='font-bold text-2xl my-6 '> Search Engine Optimization </h3>
                      <p className='text-gray-600 text-xl'>Attract more online users to your website and increase your brand visibility with integrated SEO and social media marketing services. Thrive’s Facebook social media marketing and other SMM experts perform extensive keyword research and craft SEO-optimized content that addresses your customers’ search intent to improve your organic</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>advertising/sponsorship <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                  <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-e07ea62/wp-content/themes/thrive-agency/images/ppc-advertising.svg" alt="" width='70' height='70' className='-mt-16' />
                      <h3 className='font-bold text-2xl my-6'>Pay-Per-Click (PPC) Advertisin</h3>
                      <p className='text-gray-600 text-xl'>According to Statista, social media PPC ad impressions increase by 20 percent year over year. Draw more impressions and engagement to your PPC ads with our social media PPC advertising services.  compelling images, videos and captions to increase your return on ad spend (ROAS) across social media marketing channels.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>advertising/sponsorship <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                  <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-e07ea62/wp-content/themes/thrive-agency/images/email-marketing.svg" alt="" width='70' height='70' className='-mt-16' />
                      <h3 className='font-bold text-2xl my-6'>Email Marketing</h3>
                      <p className='text-gray-600 text-xl'>Expand your online reach and generate more lead conversion opportunities with Thrive’s email marketing solutions.  customer experience. We analyze your niche market, determine your prospects’ pain points and craft email content.Additionally, we show off your social media profiles in your emails to boost your engagement. </p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Connect it Now <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Support;
