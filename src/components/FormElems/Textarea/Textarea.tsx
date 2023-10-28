import { TTextareaProps } from '../../../types'
import InputWrap from '../InputWrap';

export default function Textarea({ placeholder, title, className, error, register } : TTextareaProps) {
  return (
    <InputWrap title={title} className={className} error={error}>
      <textarea
        {...register}
          placeholder={placeholder}
          className="h-full block w-full text-[13px] leading-[24px] px-[8px] font-extralight outline-none bg-white/[0.05] focus:bg-white/[0.1] resize-none"
      ></textarea>
    </InputWrap>
  )
}