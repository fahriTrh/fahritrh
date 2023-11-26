'use client'

const Button = ({children, className, onClick}) => {
    return ( 
        <button onClick={onClick} className={`border border-neutral-400 text-neutral-200 hover:border-neutral-500 hover:scale-105 duration-200 px-3 md:px-3.5 py-1.5 md:py-2 rounded-md sm:mt-6 mr-2 sm:mr-3 md:mr-4 font-semibold ${className}`}>
            <span className="block mb-0.5 text-sm md:text-base">
                {children}
            </span>
        </button>
    );
}
 
export default Button;