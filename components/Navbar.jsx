'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const header = useRef(null)
    const router = useRouter()
    const currentPath = usePathname();

    const links = [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
    ];

    useEffect(() => {

        window.addEventListener('scroll', () => {
            header.current.classList.toggle('sticky', window.scrollY > 0)
        })

    }, [])

    return (
        <header ref={header} className="w-full fixed z-50">
            <div className="h-2 primary-reverse"></div>
            <nav className="w-full py-5 px-4 sm:px-7 md:px-10 lg:px-12 flex items-center gap-4 text-sm sm:text-base md:text-lg font-semibold">
                {links.map(({ href, label }, index) => (
                    <Link key={index} href={href} className={`${href === currentPath ? "text-primary" : "hover:text-[#00C0FF]"}`}>
                        {label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}

export default Navbar;