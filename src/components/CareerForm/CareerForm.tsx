"use client"
import { useForm, SubmitHandler } from 'react-hook-form'
import cross from '../../assets/imgs/cross.svg';
import Checkbox from '../FormElems/Checkbox';
import { useEffect } from 'react';
import Input from '../FormElems/Input';
import Textarea from '../FormElems/Textarea';
import InputPhone from '../FormElems/InputPhone/InputPhone';
import { ICareerFormInputs } from '@/types';

export default function CareerForm({className}: {className?: string}) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ICareerFormInputs>();

  const onSubmit: SubmitHandler<ICareerFormInputs> = data => {console.log(data);
  }
  useEffect(() => {
    const subs = watch('phone')
    const x = subs.replace(/\D/g, '').match(/(\d{0,3})(\d{0,2})(\d{0,2})(\d{0,3})$/) || [];
    let b = x[1] && subs.length > 4 ? "(" + x[1] + ") " + x[2] + ' ' + x[3] + ' ' + x[4] : "";
    setValue('phone', b.length > subs.length ? b.trim() : subs.trim());
  }, [watch('phone'),setValue,watch]);

  return (
    <form className={`${className} bg-inherit`} onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="md:flex md:justify-between">
        <div className="md:w-[221px] xl:w-[290px]">
          <Input
            error={errors.name?.message || null}
            placeholder="John Smith"
            register={{...register("name", {required: "Name must be required"})}}
            type="text"
            title="Full name"
          />

          <Input
            error={errors.email?.message || null}
            placeholder="johnsmith@email.com"
            register={{...register("email", {
                required: "Email must be required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Invalid email address"
                }
              })}}
            type="text"
            title="E-mail"
          />

          <Input
            error={errors.position?.message || null}
            placeholder="Movie maker"
            register={{...register("position", {required: "Position must be required"})}}
            type="text"
            title="Position"
          />

          <InputPhone
            error={errors.phone?.message || null}
            placeholder="(097) 12 34 567"
            register={{...register("phone", {
                required: "Phone must be required",
                pattern: {
                  value: /^[(]\d{3}[)](\s\d{2}){3}[\d]$/,
                  message: "Invalid phone"
                }
              })}}
            type="text"
            title="Phone"
          />
        </div>
  
        <div className="md:w-[221px] xl:w-[290px]">
          <Textarea
            className="h-[242px] md:h-[272px]"
            register={{...register("message", {required: "Enter message"})}}
            title="Message"
            error={errors.message?.message || null}
          />
        </div>
      </div>

      <div className="md:flex items-start">
        <Checkbox className="mb-[16px] md:mb-0 md:w-[221px]" register={{...register("confirm")}} title="I confirm my consent to the processing of personal data."/>
  
        <button className="block ml-auto text-[30px] font-medium leading-[1.2] disabled:text-white/[0.8]" type="submit" disabled={!watch("confirm")}>SEND</button>
      </div>

    </form>
  )
}