"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import Input from "../FormElems/Input";
import { IContactFormInputs } from '../../types';
import Textarea from "../FormElems/Textarea";

export default function ContactsForm({className}: {className?: string}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactFormInputs>();

  const onSubmit: SubmitHandler<IContactFormInputs> = () => {}

  return (
    <form className={`${className} bg-inherit`} onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="max-xl:md:flex max-xl:md:justify-between">
        <div className="xl:flex xl:justify-between md:w-[221px] xl:w-[607px]">
          <Input
            className="mb-[6px] xl:w-[293px]"
            error={errors.name?.message || null}
            placeholder="John Smith"
            register={{...register("name", {required: "Name must be required"})}}
            type="text"
            title="Full name"
          />
  
          <Input
            className="xl:w-[293px]"
            error={errors.email?.message || null}
            placeholder="support@carptravel.com"
            register={{
              ...register("email", {
                required: "Email must be required", pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Invalid email address"
                }
              })
            }}
            type="email"
            title="E-mail"
          />
        </div>
  
        <div className="md:w-[463px] xl:w-[607px]">
          <Textarea
            className="h-[239px] md:h-[265px]"
            register={{...register("message")}}
            title="Message"
          />
    
          <button className="block ml-auto text-[30px] font-medium leading-[1.2] disabled:text-white/[0.8]" type="submit" >SEND</button>
        </div>
      </div>
    </form>
  )
}
