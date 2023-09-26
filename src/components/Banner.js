import React from 'react';

const Banner = () => {
  return (
    <div className='  xl:m-10    2xl: text-white 2xl:mx-52 2xl:my-28 2xl:flex flex-row'>
      <div className=' w-100%  xl:w-1/2 mx-20 mt-20 '>
        <h3 className='text-[50px] font-light 2xl:mr-32'>
          Searching for
          <span className='font-medium'>Augmented Development</span> Teams to
          steer your product towards triumph?"
        </h3>
        <div className='sm:flex'>
          <div className='w-3/12 '>
            <h2 className='text-[30px] font-semibold'>50+</h2>
            <p className='text-gray-400'>Clients</p>
          </div>
          <div className='w-4/12'>
            <h2 className='text-[30px] font-semibold'>80+</h2>
            <p className='text-gray-400'>Projects successfully completed</p>
          </div>
          <div className=''>
            <h2 className='text-[30px] font-semibold'>60%</h2>
            <p className='text-gray-400'>
              Of the client converted into <br /> log term engagement partners
            </p>
          </div>
        </div>
      </div>
      <div className='mt-5 2xl:w-1/2 text-black 2xl:mt-0'>
        <div className=' bg-gradient-to-t from-gray-300 to-gray-200 px-5 py-10 w-10/12 rounded-xl '>
          <div>
            <h4 className='text-xl font-semibold'>Fill out the form</h4>
            <p className='text-sm'>
              Our team will touch base with you within 24 hours.
            </p>
          </div>
          <div className='flex flex-col gap-10 mt-10'>
            <div className='flex gap-5'>
              <input
                placeholder='Full Name*'
                className=' bg-transparent border-b-[1px] border-gray-400 w-full'
              />
              <input
                placeholder='Email ID*'
                className=' bg-transparent border-b-[1px] border-gray-400 w-full'
              />
            </div>
            <div className='flex gap-5'>
              <input
                placeholder='Country'
                className=' bg-transparent border-b-[1px] border-gray-400 w-full'
              />
              <input
                placeholder='Contact Number'
                className=' bg-transparent border-b-[1px] border-gray-400 w-full'
              />
            </div>
            <div className=''>
              <input
                placeholder='Tell us your requirements*'
                className=' bg-transparent border-b-[1px] border-gray-400 w-full'
              />
            </div>
          </div>
          <div className='text-white mt-10'>
            <button className='bg-black py-2 px-6 rounded-full'>Submit</button>
            <button className='bg-black py-2 px-3 rounded-full ml-1'>→</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
