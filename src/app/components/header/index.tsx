import Authentication from "./Authentication";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Index(){

  return (
   <header className="sticky top-0 left-0 w-full h-[60px] flex justify-between items-center">
     <Logo/>
     <Navigation/>
     <Authentication/>
   </header>
  )
}