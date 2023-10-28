import BtnLink from '../BtnLink';
import css from './Hero.module.css';

export default function Hero({id}: {id?: string}) {
  return (
    <section id={id}>
      <div className={`${css.section} responsive pt-[105px] md:pt-[122px] xl:pt-[130px] md:flex md:justify-between`}>
        <div className="w-[118px] ml-auto mb-6 md:hidden">
          <p className="text-[37px] font-thin tracking-[1.67px] leading-none"><span className="font-medium tracking-normal">7</span>DAYS</p>

          <p className="text-xs font-light tracking-[9.48px]">JOURNEY</p>
        </div>

        <div className="mb-6 md:mb-0 md:w-[426px] xl:w-[646px]">
          <h1 className="heading md:leading-[81px] xl:leading-[119px] mb-6 md:mb-[68px] xl:mb-[148px] md:tracking-[-2.5px]">
            <span className="font-medium">Uncover</span> Carpathian&rsquo;s Secrets
          </h1>

          <p className="w-[157px] md:w-[262px] xl:w-[608px] text-[10px] md:text-sm xl:text-base font-extralight leading-[16px] md:leading-4 xl:leading-normal md:tracking-wider">Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel</p>
        </div>

        <div className="md:w-[230px] xl:w-[305px]">
          <div className="w-[118px] md:w-auto ml-auto mb-6 md:mb-14 xl:mb-[181px] hidden md:block">
            <p className="text-[37px] md:text-[67px] xl:text-[98px] font-thin tracking-[1.67px] md:tracking-[8.71px] xl:tracking-normal leading-none">
              <span className="font-medium tracking-normal">7</span>
              DAYS
            </p>

            <p className="text-xs md:text-sm xl:text-base font-light tracking-[9.48px] md:tracking-[25.9px] xl:tracking-[36.48px]">JOURNEY</p>
          </div>

          <p className="text text-justify mb-6 md:mb-7">We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!</p>

          <BtnLink>JOIN NOW</BtnLink>
        </div>
      </div>
    </section>
  )
}
