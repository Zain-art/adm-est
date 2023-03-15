import React from 'react'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase py-2'>Media Monitoring</h6>
                <ul>
                    <li className='py-1'>Social Media Monitoring</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Brand Management</li>
                    <li className='py-1'>Web Monitoring</li>
                    <li className='py-1'>Social Media Management</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase py-2'>Resources</h6>
                <ul>
                    <li className='py-1'>Marketing Library</li>
                    <li className='py-1'>The Instagram Report</li>
                    <li className='py-1'>The Twitter Report</li>
                    <li className='py-1'>The Influencer Marketing Stack</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase py-2'>More Infos ADM</h6>
                <ul>
                    <li className='py-1'>Pricing</li>
                    <li className='py-1'>Terms and Privacy</li>
                    <li className='py-1'>Help Center</li>
                    <li className='py-1'>Webinars</li>
                    <li className='py-1'>Become a partner</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase py-2'>Free Tools</h6>
                <ul>
                    <li className='py-1'>Email Signature Generator</li>
                    <li className='py-1'>Instagram Hashtag Generator</li>
                    <li className='py-1'>Twitter Engagement Calculator</li>
                    <li className='py-1'>Free Invoice Generator</li>
                    <li className='py-1'>The Brand Grader</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Mention For</p>
                <h4 className='py-4'>Contact us</h4>
                <p className='py-4'> Phone No . 0585630402</p>
                <p className='py-4'> Email . Mkpdxb22@gmail.com</p>
                
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2023 Workflow, LLC. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaTwitch />
            <FaGithub />
        </div>
        </div>
    </div>
  )
}

export default Footer