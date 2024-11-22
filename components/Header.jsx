import React from 'react'
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { TbDotsVertical } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className=" bg-black w-full h-[4em] text-white flex justify-between place-items-center px-4 py-2 ">
{/*---------Logo & Menu----------*/}
<div className="flex place-items-center gap-6" >
<AiOutlineMenu className="text-xl"/>
<Image src={"/youtube.jpg"} width={100} height={50} alt="logo" />
</div>
{/*---------Search & Mic----------*/}
<div className=" hidden md:flex gap-4 place-items-center">
<div className="flex place-items-center border-white/40 border-[0.02em] rounded-full">
<input type="text" placeholder="Search" className="bg-transparent  w-[8em] lg:w-[35em] rounded-l-full py-2 px-4" />
<div>
  <button className="px-5 py-2  rounded-r-full  bg-white/15 hover:bg-white/20">
  <CiSearch className="text-2xl"/>
  </button>
</div>
</div>
<div className="text-xl p-2.5 rounded-full bg-white/15 hover:bg-white/30">
<FaMicrophone />
</div>
</div>
{/*---------------Side button---------------*/}
<div className="flex gap-4 place-items-center">
  <TbDotsVertical className="text-xl"/>
  <button className="py-2 px-3 bg-white/15 hover:bg-white/20 border-white/40 border-[0.02em] rounded-full flex justify-between gap-3 place-items-center">
    <FaRegUserCircle className="text-xl"/>
    Sign in
  </button>
</div>
</div>
  )
}

export default Header