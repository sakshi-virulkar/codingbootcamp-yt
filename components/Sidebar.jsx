import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";

const Sidebar = () => {
  return (
    <div className="w-[15em] h-[calc(100vh-4em)] bg-black px-4 py-6 text-white text-md">
    {/*Home, Shorts, Subscription*/}
  <div className="border-b-white/40 pb-4 border-b-[0.02em] flex flex-col gap-1 w-full">
    <div className="flex place-items-center justify-start gap-6 w-full bg-white/20 p-2 rounded-lg">
    <IoMdHome className=" text-2xl" />
    <h1>Home</h1>
    </div>
    <div className="flex cursor-pointer hover:bg-white/20 hover:scale-105 transition-all place-items-center justify-start gap-6 p-2 w-full rounded-lg">
    <SiYoutubeshorts className=" text-2xl"/>
    <h1>Shorts</h1>
    </div>

  </div>
  <div className="border-b-white/40 py-4 border-b-[0.02em] flex flex-col gap-1 w-full">
    <div className="flex place-items-center justify-start gap-6 w-full  p-2 rounded-lg">
    <IoMdHome className=" text-2xl" />
    <h1>Not Home</h1>
    </div>
    <div className="flex cursor-pointer hover:bg-white/20 hover:scale-105 transition-all place-items-center justify-start gap-6 p-2 w-full rounded-lg">
    <SiYoutubeshorts className=" text-2xl"/>
    <h1>Shorts</h1>
    </div>

  </div>
  
    
  </div>
  )
}

export default Sidebar