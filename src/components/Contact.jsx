import React from "react";
import "../styles.css";
import "tailwindcss/tailwind.css";

export default function App() {
  return (
    <div>
      <section name='contact' className="text-gray-700 body-font relative">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12 ">
            <h1 className="sm:text-2xl text-7xl font-bold title-font mb-0 text-gray-900">
              Address
            </h1>
           
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="number" className="leading-7 text-sm text-gray-600">
                    Phone No
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value='0585630402'
                    readOnly
                    className="w-full bg-gray-100 rounded border-none  py-1 px-3 leading-8 transition-colors "
                  />
                </div>
                
                <div className="relative">
                  <label for="number" className="leading-7 text-sm text-gray-600">
                    Fax No
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value='0'
                    readOnly
                    className="w-full bg-gray-100 rounded border-none  py-1 px-3 leading-8 transition-colors "
                  />
                </div>
                
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value='Mkpdxb22@gmail.com'
                    readOnly
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative">
                  <label for="number" className="leading-7 text-sm text-gray-600">
                    Mobile No
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value='0585630402'
                    readOnly
                    className="w-full bg-gray-100 rounded border-none  py-1 px-3 leading-8 transition-colors "
                  />
                </div>
               
              </div>
             <div className='p-2 w-1/2'>
             <div className="relative">
                  <label for="number" className="leading-7 text-sm text-gray-600">
                    P.O.Box
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value='0'
                    readOnly
                    className="w-full bg-gray-100 rounded border-none  py-1 px-3 leading-8 transition-colors "
                  />
                </div>
                <div className="relative">
                  <label for="number" className="leading-7 text-sm text-gray-600">
                   Parcel ID
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value='0'
                    readOnly
                    className="w-full bg-gray-100 rounded border-none  py-1 px-3 leading-8 transition-colors "
                  />
                </div>
             </div>
              
              {/* <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <span> Company Email :</span><a className="text-indigo-500" href="#">Mkpdxb22@gmail.com</a>
                
                
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
