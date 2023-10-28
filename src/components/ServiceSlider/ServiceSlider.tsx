"use client"

import { Pagination, A11y, EffectFade } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import ServiceItem from '../ServiceItem';
import { Paginate, Slide } from './ServiceSlider.styled';
import { TServiceSlide } from '@/types';

import 'swiper/css';
import 'swiper/css/navigation';

export default function ServiceSlider({ slides }: { slides: TServiceSlide[] }) {
  const renderBullet = (i: number, className: string) => `<p class="${className}">${slides[i].paginationText} <span class="appeal">${slides[i].appeal}</span></p>`;

  return (
    <Swiper
        modules={[Pagination, EffectFade, A11y]}
        slidesPerView={1}
        allowTouchMove={false}
        effect="fade"
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
          renderBullet
        }}
        className='responsive'
      >
        {slides.map((item, id) => (
          <Slide style={{height:'auto'}} bg={item.bg} key={item.paginationText}>
            <ServiceItem slide={{...item, number: id+1, count:slides.length}} />
          </Slide>
        ))}

        <Paginate className="swiper-pagination"/>
      </Swiper>
  )
}