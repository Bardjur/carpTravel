import { TServiceSlideProps } from '@/types';

export default function ServiceItem({slide}: {slide: TServiceSlideProps}) {
  return (
    <div className="responsive h-full">
      <div className="mb-4 md:mb-[31px] md:flex">
        <h2 className="heading md:w-[463px] xl:w-[607px] mb-6 md:mb-0 md:mr-[20px]">
          WE <span className="font-medium ">OFFER</span> 
        </h2>

        <p className="text-[43px] md:text-[67px] xl:text-[98px] font-thin text-right md:text-left leading-[1.2] md:leading-none">
          {slide.number}/<span className="text-white/20">{slide.count}</span>
        </p>
      </div>

      <div className="md:flex md:justify-between">
        <picture className="block mb-3 md:mb-0 md:shrink-0">
          <source media="(min-width:1280px)" srcSet={slide.img.desk} />
          <source media="(min-width:768px)" srcSet={slide.img.tab} />
          <img src={slide.img.mob} className="mx-auto" alt="slide"/>
        </picture>
  
        <div className="flex flex-col md:w-[221px] xl:w-[293px]">
          <p className="xl:hidden text-right md:text-left text-xs font-extralight leading-[24px] tracking-widest md:tracking-[2.4px] mb-[224px] md:mb-0 md:mt-[197px] ">{slide.appeal}</p>

          <p className="text2 md:text-justify mt-auto">{slide.text}</p>
        </div>
      </div>
      
    </div>
  )
}
