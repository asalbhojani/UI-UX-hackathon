interface ICardProps{
    img:string
}
import React from 'react'
import Image from "next/image";
import boy from '../assets/boy.svg';
const Card = (props:ICardProps) => {
    const {img}= props;
  return (
    <div>

    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <a href="#">
        <Image
          aria-hidden
          src={img}
          alt="boy image"
          className="w-[250px] h-[400px] mx-auto"
        />
        </a>
        <div className="p-5 flex flex-col justify-center items-center">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#252B42]">Graphic Design</h5>
            </a>
            <p className="mb-3 text-[#737373] font-semibold">English Department</p>
            <div className="flex space-x-3">
            <span className="mb-3 text-[#BDBDBD] font-semibold">$16.48</span>
            <span className="mb-3 text-[#23856D] font-semibold">$6.48</span>
            </div>
            <div className="flex space-x-2">
                <div className="w-5 h-5 rounded-full bg-[#23A6F0]"></div>
                <div className="w-5 h-5 rounded-full bg-[#23856D]"></div>
                <div className="w-5 h-5 rounded-full bg-[#E77C40]"></div>
                <div className="w-5 h-5 rounded-full bg-[#252B42]"></div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Card