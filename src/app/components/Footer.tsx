import React from 'react'
import Image from "next/image";
import fb from '../assets/fb1.png';
import insta from '../assets/insta1.png';
import twitter from '../assets/twitter1.png';

const Footer = () => {
  return (
    <div>
      

<footer className="bg-white rounded-lg shadow  m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-bold whitespace-nowrap text-logo">BANDAGE</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 space-x-4">
                <li>
                    <a href="" className="hover:underline me-4 md:me-6">
                    <Image
                    aria-hidden
                    src={fb}
                    alt="facebook"
                    />
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">
                    <Image
                    aria-hidden
                    src={insta}
                    alt="instagram"
                    />
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">
                    <Image
                    aria-hidden
                    src={twitter}
                    alt="twitter"
                    />
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5">
        <div>
            <h2 className="mb-6 font-semibold text-gray-900 text-md">Company Info</h2>
            <ul className=" text-[#737373] font-medium text-sm">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">About Us</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Career</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">We are hiring</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Blog</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 font-semibold text-gray-900 text-md">Legal</h2>
            <ul className=" text-[#737373] font-medium text-sm">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">About Us</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Career</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">We are hiring</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Blog</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 font-semibold text-gray-900 text-md">Features</h2>
            <ul className=" text-[#737373] font-medium text-sm">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">Business Marketing</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">User Analytic</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Live Chat</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Unlimited Support</a>
                </li>
            </ul>
        </div>
     
        <div>
            <h2 className="mb-6 font-semibold text-gray-900 text-md">Resources</h2>
            <ul className=" text-[#737373] font-medium text-sm">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">IOS & Android</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Watch a Demo</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Customers</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">API</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 font-semibold text-gray-900 text-md">Get In Touch</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <div className="flex items-center space-x-2">
            <input 
                type="text" 
                name="" 
                id="" 
                placeholder="Your Email" 
                className="border-0 p-2 rounded-l-md w-44" 
            />
            <button className="bg-[#23A6F0] text-white px-6 py-4 rounded-r-md">
                Subscribe
            </button>
            </div>

            </ul>
        </div>
    </div>
    <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">Made With Love By Finland All Right Reserved 
        </span>
      
      </div>
    </div>
</footer>


    </div>
  )
}

export default Footer
