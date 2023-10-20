export default function Menu({links, className}) {
  return (
    <ul className={className}>
      {links.map(({link, name}:{link:string, name:string}, id:number) => (
        <li key={id} className="mb-12 last:mb-0 md:mb-0 md:mr-6 md:last:mr-0 xl:mr-14 xl:last:mr-0">
          <a 
            className="text-white text-lg md:text-sm font-normal tracking-widest hover:underline focus:outline-none focus:underline"
            href={link}
          >{name}</a>
        </li>
      ))}
    </ul>
  )
}