interface ICardProps{
    img:string
}
import React from 'react'
import Image from "next/image";
import clock from '../assets/time.png';
import graph from '../assets/graph.png';
import arrow from '../assets/arrow.png';

const Featured = (props:ICardProps) => {
    const {img}= props;
  return (
    <div> <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
    <a href="#">
    <Image
      aria-hidden
      src={img}
      alt="boy image"
      className="w-[22rem] h-[20rem] mx-auto bg-red-900"
    />
    </a>
    <div className="p-5 flex flex-col justify-center pl-12 pr-10">
        <div className="flex space-x-4">
            <h5 className="mb-2 text-sm font-medium tracking-tight text-[#8EC2F2]">Google</h5>
            <h5 className="mb-2 text-sm font-medium tracking-tight text-[#737373]">Trending</h5>
            <h5 className="mb-2 text-sm font-medium tracking-tight text-[#737373]">New</h5>
        </div>
        
        <p className="mb-3 text-logo font-medium text-2xl">Loudest à la Madison 1 
        (L'integral)</p>
        <p className="mb-3 text-[#737373] font-normal text-md">We focus on ergonomics and meeting 
you where you work. Its only a 
keystroke away.</p>
<div className="flex justify-between space-x-3 my-2">
  <div className="flex items-center">
    <Image
      aria-hidden
      src={clock}
      alt="clock icon"
      className="mr-2" // Add margin-right to separate the icon from the text
    />
    <span className="text-[#737373] font-normal font-sm">22 April 2021</span>
  </div>
  <div className="flex items-center">
    <Image
      aria-hidden
      src={graph}
      alt="graph icon"
      className="mr-2" // Add margin-right to separate the icon from the text
    />
    <span className="text-[#737373] font-normal font-sm">10 comments</span>
  </div>
</div>

<div className="flex items-center space-x-2 mt-3">
  <span className="text-[#737373] font-semibold text-lg">Learn More</span>
  <Image
    aria-hidden
    src={arrow}
    alt="graph icon"
    className="w-4 h-4" // Set the width and height of the image
  />
</div>

    </div>
</div>
</div>
  )
}

export default Featured