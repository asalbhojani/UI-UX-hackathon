'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import profile from '../assets/profile.svg';
import search from '../assets/search.svg';
import cart from '../assets/cart.svg';
import heart from '../assets/heart.svg';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  {/* Logo */}
  <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
    <span className="self-center text-2xl font-bold whitespace-nowrap text-logo">BANDAGE</span>
  </a>

  {/* Hamburger Menu */}
  <button
    onClick={toggleMenu}
    type="button"
    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
    aria-controls="navbar-multi-level"
    aria-expanded={isOpen ? 'true' : 'false'}
  >
    <span className="sr-only">Open main menu</span>
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
    </svg>
  </button>

  {/* Navbar Links */}
  <div
    className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
    id="navbar-multi-level"
  >
    <ul className="flex flex-col text-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-white text-black text-sm">
      <li className="block py-2 px-3 rounded md:bg-transparent" aria-current="page">
        <Link href='/'>Home</Link>
      </li>
      <li className="py-2 px-3 rounded md:bg-transparent flex justify-center" aria-current="page">
        <Link href='/shop'>
          Shop{' '}
          </Link>
          <svg className="w-2.5 h-2.5 ms-2.5 mt-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded">Blog</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded">Contact</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded">Pages</a>
      </li>
    </ul>

    {/* Icons for Mobile View */}
    {isOpen && (
      <div className="flex flex-col items-center space-y-3 md:hidden mt-4">
        <div className="profile flex items-center space-x-1">
          <Image aria-hidden src={profile} alt="profile icon" />
          <h1 className="text-[#23A6F0] text-xs font-semibold">Login / Register</h1>
        </div>
        <div className="flex space-x-1">
          <Image aria-hidden src={search} alt="search icon" />
        </div>
        <div className="flex items-center space-x-1">
          <Image aria-hidden src={cart} alt="cart icon" />
          <h1 className="text-[#23A6F0] text-xs font-semibold">1</h1>
        </div>
        <div className="flex items-center space-x-1">
          <Image aria-hidden src={heart} alt="heart icon" />
          <h1 className="text-[#23A6F0] text-xs font-semibold">1</h1>
        </div>
      </div>
    )}
  </div>

  {/* Icons for Desktop View */}
  <div className="hidden md:flex items-center space-x-3">
    <div className="profile flex items-center space-x-1">
      <Image aria-hidden src={profile} alt="profile icon" />
      <h1 className="text-[#23A6F0] text-xs font-semibold">Login / Register</h1>
    </div>
    <div className="profile flex space-x-1">
      <Image aria-hidden src={search} alt="search icon" />
    </div>
    <div className="search flex items-center space-x-1">
      <Image aria-hidden src={cart} alt="cart icon" />
      <h1 className="text-[#23A6F0] text-xs font-semibold">1</h1>
    </div>
    <div className="profile flex items-center space-x-1">
      <Image aria-hidden src={heart} alt="heart icon" />
      <h1 className="text-[#23A6F0] text-xs font-semibold">1</h1>
    </div>
  </div>
</div>

      </nav>
    </div>
  );
};

export default Navbar;
