'use client'
import Link from "next/link";
import Button from "./Button";
import CardIcon from "./IconCard";
import MyModal from "./MyModal";
import { useRouter } from "next/navigation";
import Image from 'next/image'




const Card = ({ children,
    name,
    description,
    snapshot,
    code = '/',
    demo = '/'
}) => {

    return (
        <div className="border border-gray-600 h-[min-content] p-4 lg:p-5 rounded-md mt-5 cursor-pointer duration-200 hover:scale-105 group">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white tracking-wide">{name}</h2>
            <p className="text-gray-400 mt-0.5 w-full lg:max-w-[90%]">{description}</p>

            <div className="flex items-center gap-3 mt-1.5">
                {children}
            </div>

            <div className="w-full rounded-md overflow-hidden mt-2">
                <MyModal image={snapshot}>
                    <img src={snapshot} className="w-full max-h-[200px]" />
                </MyModal>
            </div>

            <div className="md:text-lg flex items-center justify-between">
                <Button className='border-neutral-800 mt-3.5'>
                    <Link target="_blank" href={code}>
                        Code
                    </Link>
                </Button>
                <div className="flex flex-col relative">
                    <Link target="_blank" href={demo}>
                        <span className="block mt-3.5">
                            Demo →
                        </span>
                    </Link>
                    <span className="absolute block -bottom-1 h-0.5 left-0 right-full group-hover:right-0  transition-all duration-500 primary rounded-md"></span>
                </div>
            </div>
        </div>
    );
}

export default Card;