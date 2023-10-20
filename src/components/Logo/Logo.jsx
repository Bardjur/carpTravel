import Image from 'next/image';
import logoUrl from '../../assets/imgs/Logo.png';

export default function Logo() {
  return (
    <div>
      <Image
        src={logoUrl}
        alt="CarpTravel"
        priority
        width="61"
      />
    </div>
  )
}
