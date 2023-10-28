import Nav from '../Nav';
import Logo from '../Logo';

export default function Header() {
  const menu = [{ link: 'about', name: "About" }, { link: 'services', name: "Services" }, { link: 'career', name: "Career" }, { link: 'gallery', name: "Gallery" }, { link: 'contacts', name: "Contacts" }];

  return (
    <header className='absolute top-9 md:top-6 left-0 w-full'>
      <div className='sm:w-[480px] md:w-[768px] xl:w-[1280px] h-[33px] flex justify-between items-center mx-auto px-5 md:px-8 xl:px-6'>
        <Logo/>
        <Nav links={ menu } />
      </div>
    </header>
  )
}
