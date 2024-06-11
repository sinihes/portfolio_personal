"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },

]


const Nav = () => {
    const pathname = usePathname()
  return (
    <nav className="flex gap-8">
        {
             links.map((link, id) => {
                return (
                    <Link href={link.path} key={id} className={`${link.path === pathname && "text-accent border-b-2 border-accent"  }`}>{link.name}</Link>
                
                );
            }) 
            
        }
    </nav>
  )
}


export default Nav