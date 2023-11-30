import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

function Navbar() {
  return (
    <nav className="border rounded flexBetween max-container padding-container relative z-30 py-3 shadow-xl mt-5">
        <Link href='/'>
            <Image src='/logo.jpeg'alt="logo" width={164.84} height={40} className="hidden lg:block" />
            <Image src='/logo.png'alt="logo" width={60} height={40}  className="lg:hidden"/>
        </Link>
          <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link)=>(
              <Link href={link.key} key={link.key} className="regular-16 text-[#242331] flexCenter cursor-pointer pb-1 transition-all hover:font-bold">
                {link.label}
              </Link>
            ))}
          </ul>
          <div className="lg:flexCenter hidden">
              <Button 
               type ="button"
               title='Sign in'
               variant='btn_dark_blue'
               />
          </div>
          <Image src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"/>
    </nav>
  )
}

export default Navbar