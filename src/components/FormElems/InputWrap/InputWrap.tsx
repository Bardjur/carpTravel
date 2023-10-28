import Image from 'next/image';
import cross from '../../../assets/imgs/cross.svg';
import { TInputWrapProps } from '../../../types'

export default function InputWrap({ title, className, error, children } : TInputWrapProps) {
  return (
    <div className={className || ''}>
      <label className="flex flex-col h-full relative pb-[18px] md:pb-[16px] bg-inherit">
        <div className="text-[12px] leading-[24px] font-extralight  tracking-[2.4px] mb-[4px]">{title}</div>
        { children }
        {error && (
          <div className="absolute bottom-0 right-0 flex justify-end text-[12px] leading-[1.5] text-rose-500 font-extralight  tracking-[2.4px]">
            <Image width="18" src={cross.src} alt=""/>
            <span>{`${error}`}</span>
          </div>
        )}
      </label>
    </div>
  )
}