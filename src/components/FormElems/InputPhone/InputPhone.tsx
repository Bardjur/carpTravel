import { TInputProps } from '../../../types'
import InputWrap from '../InputWrap';

export default function InputPhone({ type, placeholder, title, className, error, register } : TInputProps) {
  return (
    <InputWrap title={title} className={className} error={error}>
      <div className="relative">
        <input
          {...register}
          type={type}
          placeholder={placeholder}
          className="pr-[8px] pl-[40px] block w-full text-[13px] leading-[24px] font-extralight outline-none bg-white/[0.05] focus:bg-white/[0.1]" />
        <div className="absolute bottom-0 left-[8px] text-[13px] leading-[24px] font-extralight">+ 38</div>
      </div>
    </InputWrap>
  )
}