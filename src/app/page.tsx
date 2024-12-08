import Image from "next/image";
import banner from './assets/banner.svg';
import girl from './assets/girl.svg';
import boy from './assets/boy.svg';
import acc from './assets/accessories.svg';
import kids from './assets/kids.svg';
import Card from "./components/Card";
import bs1 from './assets/bestSeller/1.png';
import bs2 from './assets/bestSeller/2.png';
import bs3 from './assets/bestSeller/3.png';
import bs4 from './assets/bestSeller/4.png';
import bs5 from './assets/bestSeller/5.png';
import bs6 from './assets/bestSeller/6.png';
import bs7 from './assets/bestSeller/7.png';
import bs8 from './assets/bestSeller/8.png';
import hero1 from './assets/hero1.png';
import hero2 from './assets/hero2.png';
import Featured from "./components/Featured";
import f1 from "./assets/featured/1.png";
import f2 from "./assets/featured/2.png";
import f3 from "./assets/featured/3.png";

export default function Home() {
  return (
    <div className=""> 
{/* Banner */}
<div className="relative w-full h-[60vh] md:h-[80vh]">
  <Image
    className="w-full h-full object-cover"
    aria-hidden
    src={banner}
    alt="banner"
  />

  <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 transform -translate-y-1/2 p-6 text-white text-center sm:left-1/4 sm:text-left sm:translate-x-0">
    <h1 className="text-sm sm:text-md font-bold">Summer 2020</h1>
    <p className="mt-4 text-3xl sm:text-4xl font-bold">New Collection</p>
    <p className="mt-4 text-lg">We know how large objects will act,</p>
    <p className="text-lg">but things on a small scale.</p>
    <button className="bg-[#2DC071] px-5 py-2.5 uppercase font-semibold mt-8 text-lg sm:text-xl">
      Shop Now
    </button>
  </div>
</div>


{/* Editors Choice Heading */}
<div className="editor flex flex-col text-center justify-center mt-20">
  <h1 className="text-logo uppercase text-lg font-bold">EDITOR’S PICK</h1>
  <h1 className="text-[#737373] pt-3">Problems trying to resolve the conflict between</h1>
</div>

{/* Editors Choice */}
<div className="flex flex-col md:flex-row justify-center mt-14 mb-10 space-y-6 md:space-y-0 md:space-x-6">

  {/* First Image - Boy with text overlay */}
  <div className="relative w-full md:w-[30%]">
    <Image
      aria-hidden
      src={boy}
      alt="boy image"
      className="w-full h-full object-cover"
    />
    <div className="absolute bottom-6 left-6 bg-white bg-opacity-75 p-2 text-black">
      <h3 className="text-xl font-bold uppercase px-10">Men</h3>
    </div>
  </div>

  {/* Second Image - Girl with text overlay */}
  <div className="relative w-full md:w-[30%]">
    <Image
      aria-hidden
      src={girl}
      alt="girl image"
      className="w-full h-full object-cover"
    />
    <div className="absolute bottom-6 left-6 bg-white bg-opacity-75 p-2 text-black">
      <h3 className="text-xl font-bold uppercase px-7">Women</h3>
    </div>
  </div>

  {/* Third Image Group - Accessories and Kids */}
  <div className="flex flex-col w-full md:w-[30%] space-y-3">
    
    {/* Accessories Image with text overlay */}
    <div className="relative w-full">
      <Image
        aria-hidden
        src={acc}
        alt="accessories image"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-6 left-6 bg-white bg-opacity-75 p-2 text-black">
        <h3 className="text-xl font-bold uppercase">Accessories</h3>
      </div>
    </div>

    {/* Kids Image with text overlay */}
    <div className="relative w-full">
      <Image
        aria-hidden
        src={kids}
        alt="kids image"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-6 left-6 bg-white bg-opacity-75 p-2 text-black">
        <h3 className="text-xl font-bold uppercase px-7">Kids</h3>
      </div>
    </div>
  </div>
</div>


{/* Best Seller Heading */}
    <div className="editor flex flex-col text-center justify-center mt-20">
      <h1 className="text-[#737373] pt-3">Featured Products</h1>
      <h1 className="text-logo uppercase text-lg font-bold  pt-3">BESTSELLER PRODUCTS</h1>
      <h1 className="text-[#737373] pt-3">Problems trying to resolve the conflict between </h1>
    </div>

{/* Best Seller Cards */}
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

{/* Hero Section 1  */}
  <div className="grid grid-cols-12 bg-cg md:mt-12">
  {/* Text Section */}
  <div className="col-span-12 md:col-span-6 py-20 flex flex-col justify-between px-6 md:px-40">
    <div className="text-white text-center md:text-left">
      <h1 className="text-md font-bold">Summer 2020</h1>
      <p className="mt-4 text-4xl md:text-[3.5rem] font-bold">Vita Classic Product</p>
      <p className="mt-4 text-md px-5">
      We know how large objects 
will act, but things on a 
small scale.
      </p>
      <div className="flex flex-col md:flex-row  items-center mt-8">
        <p className="mt-4 text-lg font-semibold text-white md:pr-7 pb-3">$16.48</p>
        <button className="bg-[#2DC071] px-5 py-2.5 uppercase font-semibold text-md rounded-md">
          Add to cart
        </button>
      </div>
    </div>
  </div>

  {/* Image Section */}
  <div className="col-span-12 md:col-span-6 flex flex-col justify-end">
    <Image
      className="h-[90%]"
      aria-hidden
      src={hero1}
      alt="banner"
    />
  </div>
</div>


{/* Hero Secction 2 */}
<div className="grid grid-cols-12 bg-white">
  {/* Image Section */}
  <div className="col-span-12 md:col-span-6 flex justify-center md:ml-40 order-2 md:order-1">
    <Image
      className="h-[90%] object-cover"
      aria-hidden
      src={hero2}
      alt="banner"
    />
  </div>

  {/* Text Section */}
  <div className="col-span-12 md:col-span-6 py-20 flex flex-col justify-center order-1 md:order-2">
    <div className="pr-12 md:pr-20 text-center md:text-left">
      <h1 className="text-md font-bold  text-[#BDBDBD]">Summer 2020</h1>
      <p className="mt-4 text-2xl md:text-[3.5rem] font-bold text-logo">Part of the Neural Universe</p>
      <p className="mt-4 text-md text-[#737373] font-medium px-5">
        We know how large objects will act, but things on a small scale.
      </p>
      <div className="flex flex-col md:flex-row items-center mt-8 md:space-x-2">
        <button className="bg-[#2DC071] text-white px-9 py-3 uppercase font-semibold text-sm rounded-md">
          BUY NOW
        </button>
        <button className="bg-white mt-3 md:mt-0 px-6 text-[#2DC071] border border-[#2DC071] md:px-9 py-3 uppercase font-semibold text-sm rounded-md">
          READ MORE
        </button>
      </div>
    </div>
  </div>
</div>


{/* Feaured Posts */}
  <div className="editor flex flex-col text-center justify-center mt-20  ">
        <h1 className="text-[#23A6F0] pt-3 font-semibold">Practice Advice</h1>
        <h1 className="text-logo text-4xl font-bold  pt-3">Featured Posts</h1>
        <h1 className="text-[#737373] pt-3 font-medium">Problems trying to resolve the conflict between 
         </h1>
        <h1 className="text-[#737373] font-medium">the two major realms of Classical physics: Newtonian mechanics 
         </h1>
  </div>

<div className="flex flex-col md:flex-row mt-14 mx-3 max-w-screen-xl md:mx-auto space-y-6 md:space-y-0">
<Featured img={f1}/>
<Featured img={f2}/>
<Featured img={f3}/>
</div>

  </div>

  );
}
