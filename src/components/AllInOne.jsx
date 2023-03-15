import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

const AllInOne = () => {
  return (
    <div name='platforms' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>All-In-One Platform</h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
        We are providing on demand riders in all over the UAE. In just 1 call our Professional riders will be on your location. we will provide you cost effecting delivery services and solutions.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Sales</h3>
              <p className='text-lg pt-2 pb-4'>
              We understand the criticality of sales & purchase stocked saved 
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Food Delivery</h3>
              <p className='text-lg pt-2 pb-4'>
              We understand the criticality of "ON TIME" food delivery
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>On Demand Delivery</h3>
              <p className='text-lg pt-2 pb-4'>
              We offers a host of an on demand cost effecting delivery services in all over the UAE.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>
EXPRESS COURIOR</h3>
              <p className='text-lg pt-2 pb-4'>
              We offer an direct delivery service for fast delivery of your urgent orders/items
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>
E-COMMERCE</h3>
              <p className='text-lg pt-2 pb-4'>
              
E-COMMERCE
Online businesses want to supply their products to their customers and collect cash at time.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>
DOCUMENTATION SERVICES</h3>
              <p className='text-lg pt-2 pb-4'>
               
DOOR TO DOOR
We are delivering Freight services that are focussed on movement of goods by Air and Sea.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>
DOOR TO DOOR</h3>
              <p className='text-lg pt-2 pb-4'>
              We offers a host of logistic management services and supply chain solutions. We offer an unrivalled direct delivery service to any Emirate as well as same Emirate for fast delivery of your urgent orders/items, where the services of a dedicated driver are required to go immediately from door to door.We will manage your product delivery.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>GLOBAL SERVICE</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AllInOne;
