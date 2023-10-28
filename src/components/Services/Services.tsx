import ServiceSlider from '../ServiceSlider';

async function getData() {
  try {
    const data = await fetch(`${process.env.API_HOST}`);

    if (!data.ok) {
      throw new Error('Failed to fetch data')
    }

    return data.json();
  } catch (error) {}
}


export default async function Services({ id }: { id: string }) {
  const slides = await getData();
  console.log(slides);
  
  return (
    <section id={id}>
      <ServiceSlider slides={slides} />

    </section>
  )
}
