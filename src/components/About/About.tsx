import css from './About.module.css';

export default function About({id}: {id: string}) {
  return (
    <section id={id}>
      <div className={`${css.section} responsive relative`}>
        <div className="md:flex md:justify-between xl:justify-normal md:mb-16 xl:mb-[72px]">
          <h2 className="heading mb-2 md:mb-0">
            WHO
            <span className="font-medium ">WE ARE</span> 
          </h2>
  
          <div className="w-[180px] md:w-[220px] xl:w-[292px] mb-10 md:mb-0 xl:ml-6">
            <p className="text mb-5 md:mb-4 xl:mb-6"><span className="font-normal">a team of enthusiasts</span> who are fully committed to the mission of creating unforgettable and extraordinary trips to the most beautiful parts of the Carpathians. Our goal is not just to show you the natural wonders of the mountains, but to provide you with a deep immersion in their magical atmosphere.</p>

            <p className="text"><span className="font-normal">We believe</span> that nature has the power to inspire, strengthen character and provide new perspectives. Therefore, each of our tours is aimed at unlocking your potential, enriching your spiritual world and creating unforgettable memories.</p>
          </div>
  
          <div className="w-[221px] xl:w-[296px] ml-auto mb-10 md:absolute md:bottom-[188px] xl:bottom-[104px] md:left-[32px] xl:left-0 xl:right-[24px] md:mb-0 text-sm md:text-[16px] xl:text-lg leading-[20px] xl:leading-6">
            <p className=" uppercase ">From vacationers</p>
            <p className="text-right uppercase">to active travelers</p>
            <p className="font-extralight tracking-[-0.15px]">we have a tour for everyone.</p>
          </div>
        </div>

        <p className="text md:w-[463px] xl:w-[605px] md:ml-auto xl:ml-0"><span className="font-normal">We use methods</span> that are time-tested and proven. Our expert guides with in-depth knowledge of the Carpathian landscapes lead you safely through the mysteries of these mountains. </p>

      </div>
    </section>
  )
}