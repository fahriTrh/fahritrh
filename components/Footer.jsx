'use client'

import Link from "next/link";
import IconFooter from "./IconFooter";
import { useRouter } from "next/navigation";

const Footer = () => {
    

    const router = useRouter()

    return (
        <footer className="w-full mt-12 px-4 sm:px-7 md:px-10 lg:px-12">

            <div className="border-t border-t-gray-600">
            </div>

            <h2 className="text-center mt-8 text-lg md:text-xl">
                Reach me out
            </h2>

            <div className="flex items-center justify-center mt-3 gap-3 md:gap-4">
                <div className="relative w-[min-content]">
                    <Link href='mailto:mefakhrialauddin44@gmail.com' target="_blank" className='peer'>
                        <IconFooter variant='email' />
                    </Link>
                    <div className="absolute -top-10 -left-24 -right-24 md:-left-28 md:-right-28 opacity-0 duration-300 peer-hover:opacity-100 bg-black flex items-center justify-center py-1 rounded-md border text-sm md:text-base border-gray-400">
                        <span className="block m-auto">fakhrialauddin44@gmail.com</span>
                    </div>
                </div>
                <div className="relative w-[min-content]">
                    <Link href='https://github.com/fahriTrh' target="_blank" className='peer'>
                        <IconFooter variant='github' />
                    </Link>
                    <div className="absolute -top-10 -left-28 -right-28 md:-left-32 md:-right-32 opacity-0 duration-300 peer-hover:opacity-100 bg-black flex items-center justify-center py-1 rounded-md border text-sm md:text-base border-gray-400">
                        <span className="block m-auto">See my other projects on GitHub</span>
                    </div>
                </div>
                <div className="relative w-[min-content]">
                    <Link href='https://www.linkedin.com/in/fakhri-tarihoran-7b219628b/' target="_blank" className='peer'>
                        <IconFooter variant='linkedin' onClick={() => router.push('https://www.linkedin.com/in/fakhri-tarihoran-7b219628b/')} />
                    </Link>
                    <div className="absolute -top-10 -left-16 -right-16 md:-left-20 md:-right-20 opacity-0 duration-300 duration-400 peer-hover:opacity-100 bg-black flex items-center justify-center py-1 rounded-md border text-sm md:text-base border-gray-400">
                        <span className="block m-auto">Find me on LinkedIn</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center mt-6 text-gray-300 text-sm md:text-base">
                &copy; Fakhri Trh 2023
            </div>

        </footer>
    );
}

export default Footer;