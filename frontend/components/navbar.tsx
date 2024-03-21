import React from 'react'
import Link from 'next/link';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Stack, stackClasses } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';

const navbar = () => {
  return (
    <header className="bg-tertiary-blue  min-h-[10vh] flex items-center border-b-2 border-primary-blue">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div className='flex justify-between items-center gap-2 text-primary-blue text-4xl font-bold'>
          <img className="w-16 cursor-pointer" src="/logo.png" alt="..." />
          SACC
        </div>
        <div className={`nav-links duration-500 md:static absolute bg-tertiary-blue md:min-h-fit min-h-[60vh] left-0 ${isMenuOpen ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-primary-blue text-lg">
            <li>
              <a className="hover:text-gray-500" href="/">Home</a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="/profile">Profile</a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="/about">About</a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="/photowall">Photo Wall</a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="/testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-primary-blue text-white px-5 py-2  hover:bg-[#87acec]" ><a href='/api/login'>Log In </a></button>
          <Button variant="outlined" startIcon={<MenuIcon />} onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden"></Button>

        </div>
      </nav>
    </header>
  );
};

export default navbar