import React from 'react';

const Navbar = () => {
  return (
    <div className='h-16 flex flex-col gap-2 md:flex md:flex-row md:gap-0  items-center'>
      <div className='text-white md:w-5/12 flex justify-center'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFrHr2Bkqh2lzlACPnyZNCCGRZaOfFFtZNSQ&usqp=CAU'
          alt='logo'
          className='h-6 w-6'
        />
        <h3 className='font-semibold ml-1 text-[16px]'>TECH</h3>
      </div>
      <div className='text-gray-400 md:w-4/12 flex gap-2  md:flex-row md:gap-5 lg:gap-10 '>
        <a href='/' className='hover:text-white'>
          Solution
        </a>
        <a href='/' className='hover:text-white'>
          Services
        </a>
        <a href='/' className='hover:text-white'>
          About
        </a>
        <a href='/' className='hover:text-white'>
          Culture
        </a>
      </div>
      <div className='text-white   md:w-3/12'>
        <button className='py-2 bg-zinc-800 px-5 rounded-full hover:bg-zinc-600 '>
          Contact us
        </button>
        <button className='px-3.5 bg-zinc-800  py-2 rounded-full ml-1  hover:bg-zinc-600 '>
          →
        </button>
      </div>
    </div>
  );
};

export default Navbar;
