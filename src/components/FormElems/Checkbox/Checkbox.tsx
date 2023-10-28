import css from './Checkbox.module.css';
import { TCheckboxProps } from '../../../types';

export default function Checkbox({ title, register, className }: TCheckboxProps) {
  return (
    <label className={`${css.wrapper} ${className}`}>
      <input type="checkbox" {...register} />

      <svg className="w-[22px] h-[22px] xl:w-[24px] xl:h-[24px] mr-[8px] shrink-0 text-white/10" role="checkbox" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="23" height="23" stroke="white"/>
        <rect x="4" y="4" width="16" height="16" fill="currentColor"/>
      </svg>

      <div className="text-[12px] leading-[22px] xl:leading-[24px] font-extralight">{title}</div>
  </label>
  )
}
