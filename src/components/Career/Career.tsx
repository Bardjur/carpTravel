import CareerForm from '../CareerForm/CareerForm';
import css from './Career.module.css';
import TextBlock from './TextBlock/TextBlock';

export default function Career({id}: {id: string}) {
  return (
    <section id={id}>
      <div className={`${css.section} responsive relative`}>
        
        <div className="mb-[36px] md:mb-[5px] md:flex">
          <h2 className="heading xl:leading-[1.2] mb-[24px] md:mb-0">
            Choose 
            <span className="font-medium ">US</span> 
          </h2>
          
          <p className="text2 w-[179px] md:w-[221px] xl:w-[293px] md:text-justify ml-auto">Your chance to join our passionate team in Carpathian tourism. Seeking talented professionals to share our common mission.</p>
        </div>

        <h3 className="w-[179px] text-[30px] xl:text-[36px] leading-[1.2] xl:leading-[39px] font-extralight uppercase mb-[36px] md:mb-[56px] xl:mb-[45px] ml-auto md:ml-[80px] ">Why us ?</h3>

        <div className="md:flex justify-between">
          <div className="w-[181px] md:w-[221px] xl:w-[604px] md:shrink-0 md:mr-[20px] xl::mr-[24px]">
            <TextBlock
              title="Professional development"
              text="We offer growth opportunities and a creative environment to nurture your talents."
            />

            <TextBlock
              title="Teamwork"
              text="Join our close-knit family, where support and inspiration abound."
            />

            <TextBlock
              title="Stimulating work environment"
              text="Flexibility and remote options for a comfortable experience."
            />

            <TextBlock
              title="Exciting challenges"
              text="Unleash your potential through unforgettable projects showcasing Carpathian beauty."
            />
          </div>
  
          <div className="hidden md:block w-full">
            <p className="text2 w-[179px] xl:w-[234px] mb-[28px] xl:mt-[-100px]">Don't miss your opportunity!<br/> Fill out the form right now and join our team!</p>
            <CareerForm />
          </div>
        </div>
      </div>
      
      <div className={`${css.section} responsive md:hidden`}>
        <p className="text2 w-[179px] ml-auto mb-[24px]">Don't miss your opportunity!<br/> Fill out the form right now and join our team!</p>
        <CareerForm />
      </div>
    </section>
  )
}