'use client'


import Header from "@/components/header";
import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
<>
{/*-------------Header--------------*/}
<Header />
<div className="flex">
{/*-------------Sidebar--------------*/}
<Sidebar />
{/*-------------Main--------------*/}

<Main />
</div>
</>
  );
}
