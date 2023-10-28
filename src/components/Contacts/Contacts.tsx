import ContactsForm from "../ContactsForm";
import css from "./Contacts.module.css";

export default function Contacts({id}: {id: string}) {
  return (
    <section id={id}>
      <div className={`${css.section} responsive relative`}>
        <h2 className="heading mb-[36px]">
          CONTACT 
          <span className="font-medium "> US</span> 
        </h2>

        <div className="xl:flex justify-between">
          <div className="max-xl:md:flex mb-[12px] md:mb-[64px] xl:mb-0 xl:w-[394px]">
            <div className="max-md:mb-[24px] xl:mb-[124px] max-xl:md:mr-[90px]">
              <div className="flex justify-end mb-[24px] xl:mb-[64px]">
                <div className="md:w-[221px] mr-[20px]">
                  <a 
                    href="tel:+38 (098) 12 34 567"
                    className="block text-right text-[14px] md:text-[16px] xl:text-[18px] leading-[24px] hover:underline focus:outline-none focus:underline"
                  >+38 (098) 12 34 567</a>
    
                  <a 
                    href="tel:+38 (098) 12 34 567"
                    className="block text-right text-[14px] md:text-[16px] xl:text-[18px] leading-[24px] hover:underline focus:outline-none focus:underline"
                  >+38 (098) 12 34 567</a>
                </div>
    
                <p className="w-[81px] text-[12px] leading-[20px] xl:leading-[24px] font-extralight">Phone number</p>
              </div>
    
              <div className="flex justify-end ">
                <div className="md:w-[221px] mr-[20px]">
                  <a 
                    href="mailto:support@carptravel.com"
                    className="block text-right text-[14px] md:text-[16px] xl:text-[18px] leading-[24px] hover:underline focus:outline-none focus:underline"
                  >support@carptravel.com</a>
                </div>
    
                <p className="w-[81px] text-[12px] leading-[20px] xl:leading-[24px] font-extralight">E-mail</p>
              </div>
            </div>
    
            <div className="flex justify-end xl:justify-start xl:flex-row-reverse">
              <p className="w-[81px] text-[12px] leading-[20px] xl:leading-[24px] font-extralight max-xl:mr-[20px]">Follow us</p>
    
              <div className="max-xl:w-[81px] xl:mr-[20px]">
                <a 
                  href="https://www.facebook.com/"
                  className="block text-[14px] md:text-[16px] xl:text-[18px] leading-[24px] hover:underline focus:outline-none focus:underline"
                >facebook</a>
    
                <a 
                  href="https://www.instagram.com"
                  className="block text-[14px] md:text-[16px] xl:text-[18px] leading-[24px] hover:underline focus:outline-none focus:underline"
                >instagram</a>
    
                <a 
                  href="https://www.youtube.com/"
                  className="block text-[14px] md:text-[16px] xl:text-[18px] leading-[24px] hover:underline focus:outline-none focus:underline"
                >youtube</a>
    
                <a 
                  href="https://www.tiktok.com/"
                  className="block text-[14px] md:text-[16px] xl:text-[18px] leading-[24px] hover:underline focus:outline-none focus:underline"
                >tiktok</a>
              </div>
            </div>
          </div>
  
          <ContactsForm />
        </div>
      </div>
    </section>
  )
}