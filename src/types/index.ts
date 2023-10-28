export type TMenu = { link: string, name: string }

export type TInputWrapProps = {
  title: string,
  className?: string,
  error?: string | null,
  children?: React.ReactNode;
}

export type TCheckboxProps = {
  title: string,
  className?: string,
  register: {},
}

export type TTextareaProps = TInputWrapProps & {
  placeholder?: string,
  register: {}
}

export type TInputProps = TTextareaProps & {
  type: string,
}

export interface ICareerFormInputs {
  name: string,
  email: string,
  position: string,
  phone: string,
  message: string,
  confirm: boolean
}

export interface IContactFormInputs {
  name: string,
  email: string,
  message: string,
}

export type TResponsiveImg = {
  mob: string,
  tab: string,
  desk:string,
}

export type TServiceSlide = {
  img: TResponsiveImg,
  bg: TResponsiveImg,
  appeal: string,
  text: string,
  paginationText: string,
}

export type TServiceSlideProps = {
  img: {
    mob: string,
    tab: string,
    desk: string
  },
  bg: {
    mob: string,
    tab: string,
    desk: string
  },
  appeal: string,
  text: string,
  number: number,
  count: number
}