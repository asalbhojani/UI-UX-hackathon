import React from 'react'
import Image from "next/image";
import shop1 from "../assets/shop/shop1.png";
import shop2 from "../assets/shop/shop2.png";
import shop3 from "../assets/shop/shop3.png";
import shop4 from "../assets/shop/shop4.png";
import shop5 from "../assets/shop/shop5.png";
import shop6 from "../assets/shop/shop6.png";
import shopLogo1 from "../assets/shop/shopLogo1.png";
import shopLogo2 from "../assets/shop/shopLogo2.png";
import shopLogo3 from "../assets/shop/shopLogo3.png";
import shopLogo4 from "../assets/shop/shopLogo4.png";
import shopLogo5 from "../assets/shop/shopLogo5.png";
import shopLogo6 from "../assets/shop/shopLogo6.png";
import Card from "../components/Card";
import bs1 from '../assets/bestSeller/1.png';
import bs2 from '../assets/bestSeller/2.png';
import bs3 from '../assets/bestSeller/3.png';
import bs4 from '../assets/bestSeller/4.png';
import bs5 from '../assets/bestSeller/5.png';
import bs6 from '../assets/bestSeller/6.png';
import bs7 from '../assets/bestSeller/7.png';
import bs8 from '../assets/bestSeller/8.png';

const page = () => {
  return (
    <div className=' max-w-screen-xl mx-auto mt-10'>
      <div className="flex justify-between">
      <h1 className='text-2xl text-logo font-semibold px-4'>Shop</h1>
      <div className="flex items-center">
       <span className='text-logo px-2'>Home</span>
        <Image
      className="w-4 h-4"
      aria-hidden
      src={shop6}
      alt="banner"
    />
    <span className='text-[#BDBDBD] px-2'>Shop</span>
      </div>
      </div>
      <div className="shopCards flex flex-col md:flex-row space-y-6 md:space-y-0 mb-20 md:mb-0 justify-center items-center md:justify-between mt-4 ml-4">
      <Image
      className=""
      aria-hidden
      src={shop1}
      alt="banner"
    />
      <Image
      className=""
      aria-hidden
      src={shop2}
      alt="banner"
    />
      <Image
      className=""
      aria-hidden
      src={shop3}
      alt="banner"
    />
      <Image
      className=""
      aria-hidden
      src={shop4}
      alt="banner"
    />
      <Image
      className=""
      aria-hidden
      src={shop5}
      alt="banner"
    />
    
      </div>
      <div className="shopCards md:flex hidden justify-between mt-20 ml-4">
        <Image
          className=""
          aria-hidden
          src={shopLogo1}
          alt="banner"
        />
        <Image
          className=""
          aria-hidden
          src={shopLogo2}
          alt="banner"
        />
        <Image
          className=""
          aria-hidden
          src={shopLogo3}
          alt="banner"
        />
        <Image
          className=""
          aria-hidden
          src={shopLogo4}
          alt="banner"
        />
        <Image
          className=""
          aria-hidden
          src={shopLogo5}
          alt="banner"
        />
        <Image
          className=""
          aria-hidden
          src={shopLogo6}
          alt="banner"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:mx-40 space-y-8 md:space-y-0">
  <Card img={bs1} />
  <Card img={bs2} />
  <Card img={bs3} />
  <Card img={bs4} />
  <Card img={bs5} />
  <Card img={bs6} />
  <Card img={bs7} />
  <Card img={bs8} />
    </div>
    </div>
  )
}

export default page
