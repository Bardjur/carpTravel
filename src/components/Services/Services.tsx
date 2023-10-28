import ServiceSlider from '../ServiceSlider';

export default async function Services({ id }: { id: string }) {
  let slides = null
  try {
    const data = await fetch(`${process.env.API_HOST}`);
    slides = await data.json();
  } catch (error) {

  }
  

  return (
    <section id={id}>
      {slides
        ? <ServiceSlider slides={slides} />
        : <div className='responsive flex justify-center font-bold items-center align-middle h-[300px] bg-[rgba(0, 37, 49, 1)]'><p className='text-[40px]'>Loading...</p></div>}
    </section>
  )
}
