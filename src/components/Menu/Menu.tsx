"use client"

import { useEffect } from 'react';
import { TMenu } from '../../types';
import { Link,Events } from 'react-scroll';

export default function Menu({ links, className, isMobile, onClick }: { links: TMenu[], className: string, isMobile?: boolean, onClick?: Function }) {
  useEffect(() => {
    Events.scrollEvent.register('begin', () => {
      if (isMobile) {
        onClick && onClick();
      }
    });

    return () => {
      Events.scrollEvent.remove('begin');
    };
  }, [onClick, isMobile]);

  return (
    <ul className={className}>
      {links.map(({link, name}:{link:string, name:string}, id:number) => (
        <li key={id} className="mb-12 last:mb-0 md:mb-0 md:mr-6 md:last:mr-0 xl:mr-14 xl:last:mr-0">
          <Link 
            to={link}
            smooth={true}
             className="text-white text-lg md:text-sm font-normal tracking-widest hover:underline focus:outline-none focus:underline"
          >{name}</Link>
        </li>
      ))}
    </ul>
  )
}