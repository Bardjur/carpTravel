import { TInputProps } from '../../../types'
import InputWrap from '../InputWrap';

export default function Input({ type, placeholder, title, className, error, register } : TInputProps) {
  return (
    <InputWrap title={title} className={className} error={error}>
      <input
        {...register}
        type={type}
        placeholder={placeholder}
        className="px-[8px] block w-full text-[13px] leading-[24px] font-extralight outline-none bg-white/[0.05] focus:bg-white/[0.1]"
      />
    </InputWrap>
  )
}