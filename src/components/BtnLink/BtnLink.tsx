"use client"

import css from './BtnLink.module.css';
import { Link } from 'react-scroll';

export default function BtnLink({ children }: { children: React.ReactNode }) {
  return (
    <Link
      to="about"
      smooth={true}
      className={`${css.btn} w-[280px] md:w-[230px] xl:w-[293px] md:h-[50px] xl:h-[71px] mx-auto block px-16 py-[18px] xl:py-4 md:py-3.5 bg-white bg-opacity-10 hover:bg-opacity-20 text-lg xl:text-[32px] font-bold leading-none transition duration-300 text-center`}
    >
      {children}
    </Link>
  )
}
