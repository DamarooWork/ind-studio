import Image from "next/image";
import LogoStemps from "@/../../public/icons/logo.png";
export default function Logo(){

  return (
   <section className="flex gap-3">
   <Image src={LogoStemps} width={28} height={28} alt='Stemps logo'/>
     STEMPS
   </section>
  )
}