"use client"

import { Keyboard, Navigation, A11y } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import css from './Gallery.module.css';
import './gallery.css';

import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const slides = ['gallery1.png', 'gallery2.png', 'gallery3.png','gallery1.png'];

export default function Gallery({id}: {id: string}) {
  return (
    <section id={id}>
      <div className={`${css.gallery} gallery responsive`}>
        <h2 className="max-xl:md:text-center heading mb-[24px] md:mb-[64px] xl:mb-[24px]">
          OUR
          <span className="font-medium "> GALLERY</span> 
        </h2>

        <Swiper
          modules={[Keyboard, Navigation, A11y]}
          direction={'vertical'}
          spaceBetween={24}
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }}
          keyboard={{
            enabled: true,
          }}
          loop={true}
          breakpoints={{
          768: {
            slidesPerView: 2,
            centeredSlides: true,
            direction: 'horizontal',
          },
        }}
          className='max-md:max-h-[952px] max-sm:h-[calc((100vw-40px)*2+72px)]'
        >
          {slides.map((item, id) => (
            <SwiperSlide key={id} >
              <div className="imgWrap ">
                <Image width="604" height="429" src={`/${item}`} alt={`slide ${id}`} />
              </div>
            </SwiperSlide>
          ))}
          <div className="!hidden md:!block !w-[124px] xl:!w-[294px] !h-auto text-right  swiper-button-prev after:!content-[none] !bottom-[17px] xl:!bottom-0 !top-auto !left-0 !text-white text-[33px] font-thin leading-none">Back</div>
          <div className="!hidden md:!block !w-[124px] xl:!w-[294px] !h-auto swiper-button-next after:!content-[none] !bottom-[17px] xl:!bottom-0 !top-auto !right-0 !text-white text-[33px] font-thin leading-none">Next</div>
        </Swiper>
      </div>
    </section>
  )
}
