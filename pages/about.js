import React from 'react';
import { BiSolidBookContent } from 'react-icons/bi';
import { TiTick } from 'react-icons/ti';
import { HiUser } from 'react-icons/hi';
import { PiSmileyStickerFill } from 'react-icons/pi';

const About = () => {
  return <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
        <div class="w-full sm:p-4 px-4 mb-6">
          <h1 class="title-font font-medium text-xl mb-2 text-gray-900">About</h1>
          <div class="leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro nesciunt voluptates nisi. Veniam sed eum optio asperiores totam ullam aliquam.</div>
        </div>
        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2 text-center">
          <h2 class="title-font font-medium text-3xl text-pink-600"><PiSmileyStickerFill className='m-auto'/></h2>
          <p class="leading-relaxed">User Friendly</p>
        </div>
        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2 text-center">
          <h2 class="title-font font-medium text-3xl text-pink-600"><HiUser className='m-auto'/></h2>
          <p class="leading-relaxed">Better UI/UX</p>
        </div>
        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2 text-center">
          <h2 class="title-font font-medium text-3xl text-pink-600"><TiTick className='m-auto'/></h2>
          <p class="leading-relaxed">Free to access</p>
        </div>
        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2 text-center">
          <h2 class="title-font font-medium text-3xl text-pink-600"><BiSolidBookContent className='m-auto' /></h2>
          <p class="leading-relaxed">Good Blogs</p>
        </div>
      </div>
      <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
        <img class="object-cover object-center w-full h-full" src="/about.jpg" alt="stats" />
      </div>
    </div>
  </section>
};

export default About;
