export default function TextBlock({title, text}: {title: string, text: string}) {
  return (
    <div className="xl:flex xl:justify-between mb-[16px] md:mb-[30px]">
    <p className="xl:w-[290px] text text-right font-normal mb-[8px]">{title}</p>
    <p className="xl:w-[290px] text-right xl:text-left text-[12px] font-extralight leading-[20px] xl:leading-[24px]">{text}</p>
    </div>
  )
}
