import React from 'react';
import { BiSolidBookContent } from 'react-icons/bi';
import { TiTick } from 'react-icons/ti';
import { HiUser } from 'react-icons/hi';
import { PiSmileyStickerFill } from 'react-icons/pi';

const About = () => {
  return <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex flex-wrap mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
        <div className="w-full sm:p-4 px-4 mb-6">
          <h1 className="title-font font-medium text-xl mb-2 text-gray-900">About</h1>
          <div className="leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro nesciunt voluptates nisi. Veniam sed eum optio asperiores totam ullam aliquam.</div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 text-center">
          <h2 className="title-font font-medium text-3xl text-pink-600"><PiSmileyStickerFill className='m-auto'/></h2>
          <p className="leading-relaxed">User Friendly</p>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 text-center">
          <h2 className="title-font font-medium text-3xl text-pink-600"><HiUser className='m-auto'/></h2>
          <p className="leading-relaxed">Better UI/UX</p>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 text-center">
          <h2 className="title-font font-medium text-3xl text-pink-600"><TiTick className='m-auto'/></h2>
          <p className="leading-relaxed">Free to access</p>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 text-center">
          <h2 className="title-font font-medium text-3xl text-pink-600"><BiSolidBookContent className='m-auto' /></h2>
          <p className="leading-relaxed">Good Blogs</p>
        </div>
      </div>
      <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
        <img className="object-cover object-center w-full h-full" src="/about.jpg" alt="stats" />
      </div>
    </div>
  </section>
};

export default About;
