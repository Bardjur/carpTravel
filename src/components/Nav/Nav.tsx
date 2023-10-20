"use client"

import { useState } from "react";
import Menu from "../Menu";

export default function Nav({links}) {
  const [isOpen, setIsOpen] = useState(false);

  const handlerClick = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <nav>
      <Menu className="hidden md:flex" links={links} />

      <button 
        type="button"
        onClick={handlerClick}
        className="inline-block md:hidden text-white"
      > MENU </button>

      {isOpen && (
        <div className="md:hidden top-[-36px] right-0 absolute w-full h-screen bg-zinc-950 bg-opacity-75 backdrop-blur-[50px]">
        <button
          type="button"
          onClick={handlerClick}
          className="block mt-11 mr-5 ml-auto text-white text-sm font-normal tracking-wider hover:underline"
        > CLOSE </button>
        
        <Menu className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center" links={links} />
      </div>
      )}
    </nav>
  )
}