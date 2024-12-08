import React from 'react'
import Image from "next/image";
import phone from '../assets/phone.svg';
import email from '../assets/email.svg';
import insta from '../assets/insta.svg';
import yt from '../assets/youtube.svg';
import fb from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';

const Header = () => {
  return (
    <div className='bg-cg hidden lg:block'>
        <div className='flex py-3 justify-between content-center max-w-screen-xl mx-auto'>
            <div className="flex ">
                <div className="flex items-center phone">
                <Image
                        aria-hidden
                        src={phone}
                        alt="Globe icon"
                        width={14}
                        height={14}
                    />
                    <h1 className='text-white font-normal text-xs px-1'>(225) 555-0118</h1>
                </div>
                <div className="flex items-center email pl-7">
                <Image
                        aria-hidden
                        src={email}
                        alt="Globe icon"
                        width={14}
                        height={14}
                    />
                    <h1 className='text-white font-normal text-xs px-1'>michelle.rivera@example.com</h1>
                </div>
            </div>
            <div className='flex items-center font-semibold'>
                <h1 className='text-white text-xs'>Follow Us  and get a chance to win 80% off</h1>
            </div>
            <div className='flex icons items-center justify-center space-x-2 '>
                <h1 className='text-white text-xs'>Follow Us : </h1>
                <Image
                    aria-hidden
                    src={insta}
                    alt="Instagram"  
                />
                <Image
                    aria-hidden
                    src={yt}
                    alt="Youtube"
                />
                <Image
                    aria-hidden
                    src={fb}
                    alt="Facebook"
                />
                <Image
                    aria-hidden
                    src={twitter}
                    alt="Twitter"
                />
            </div>
        </div>
    </div>
  )
}

export default Header