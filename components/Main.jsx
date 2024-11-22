import React, { useState } from "react";

const Main = () => {
  const [isHover, setIsHover] = useState(-1);

  const videos = [
    {
      onHover: "",
      image:
        "https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Video1",
      description: "Description1",
    },
    {
      onHover:
        "https://i.ytimg.com/an_webp/DOKVREgWKbE/mqdefault_6s.webp?du=3000&sqp=CMb8gboG&rs=AOn4CLD-mvRihC-9Sxhtnm2XL1k2A0yflg",
      image:
        "https://i.ytimg.com/vi/DOKVREgWKbE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1yy_SvgzlwtkHVq0r9GUeALZmdg",
      heading: "Video2",
      description: "Description2",
    },
    {
      onHover: "",
      image:
        "https://images.unsplash.com/photo-1731952161739-bc8bb6d17a76?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Video3",
      description: "Description3",
    },
    {
      onHover: "",
      image:
        "https://images.unsplash.com/photo-1664566484452-03b6f3817fdc?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Video4",
      description: "Description4",
    },
    {
      onHover: "",
      image:
        "https://i.ytimg.com/vi/snX5YyflrGw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5CHRWvq5On6O79vs6cO5FNv2zGw",
      heading: "Video5",
      description: "Description5",
    },
    {
      onHover: "",
      image:
        "https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Video6",
      description: "Description6",
    },
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-4em)] bg-black w-full place-items-center p-4 justify-center">
      <div className="flex flex-wrap overflow-y-auto gap-6  w-full h-full ">
        {videos.map((video, index) => (
          <div key={video.heading} className=" flex flex-col gap-2 ">
            <div
              onMouseEnter={() => setIsHover(index)}
              onMouseLeave={()=> setIsHover(-1)}
              style={{
                backgroundImage: `url(${isHover === index ? video.onHover : video.image})`,
              }}
              className="bg-white/10 cursor-pointer rounded-xl bg-cover bg-center bg-no-repeat w-[25.5em] h-[17em]"
            ></div>
            <div className="flex place-items-center gap-4">
              <div className=" w-[3.5em] h-[3.5em] bg-white/10 rounded-full "></div>
              <div className=" text-white/90 ">
                <h1>{video.heading}</h1>
                <h2 className=" text-sm text-white/70 ">{video.description}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
