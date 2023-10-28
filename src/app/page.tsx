import Image from 'next/image';
import Hero from '../components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Career from '@/components/Career';
import Gallery from '@/components/Gallery';
import Contacts from '@/components/Contacts/Contacts';

export default function Home() {
  return (
    <main className="min-h-screen" >
      <Hero />
      <About id="about"/>
      <Services id="services"/>
      <Career id="career"/>
      <Gallery id="gallery"/>
      <Contacts id="contacts"/>
    </main>
  )
}
