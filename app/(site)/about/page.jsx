import Card from "@/components/Card";
import CardIcon from "@/components/IconCard";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    return (
        <div className="px-4 sm:px-7 md:px-10 lg:px-12 pt-28 md:pt-36 lg:pt-40 mb-20" data-aos="fade-up">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">About</h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-primary font-bold mt-2 sm:mt-3">
                Fakhri Tarihoran
            </h1>
            <p className="lg:max-w-[65%] text-gray-300 mt-4 leading-normal sm:leading-relaxed text-base md:text-lg lg:leading-normal">
                As a Fullstack Developer, my journey began in 2021 when I immersed myself in the world of web development through the Web Programming UNPAS YouTube channel. Commencing with the fundamentals of programming, I actively engaged in practical applications by initiating open-source projects on GitHub. My commitment to mastering these skills laid the foundation for adopting a robust tech stack, including Laravel, React, Next.js, Tailwind, and MySQL.
            </p>
            <p className="lg:max-w-[65%] text-gray-300 mt-4 leading-normal sm:leading-relaxed text-base md:text-lg lg:leading-normal">
                Implementing Laravel as the server-side framework provided me with full control over the security and performance of applications. On the client side, I utilized React, Next.js, and Tailwind to craft engaging and responsive user interfaces. Seamless integration with MySQL enabled me to efficiently manage and store data. Beyond technical development, my involvement in open-source projects contributed to fostering an inclusive developer community, emphasizing collaboration and knowledge exchange within the context of the Web Programming UNPAS channel.
            </p>
            <p className="lg:max-w-[65%] text-gray-300 mt-4 leading-normal sm:leading-relaxed text-base md:text-lg lg:leading-normal">
                With an innovative spirit, I consistently challenge myself to learn and grow. This strong foundation ensures that I can swiftly embrace the latest technological advancements, always remaining prepared to tackle new challenges in this dynamic digital landscape.
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-14">
                Favorite Tech Stack
            </h2> 

            <div className="flex items-center gap-3 md:gap-4 xl:gap-5 mt-1 md:mt-2">
                <div className="group relative">
                    <CardIcon variant="laravel" size="w-8 h-8 sm:w-10 md:h-10 fill-gray-300 hover:fill-[#00C0FF] cursor-pointer peer" />
                    <div className="absolute -top-20 min-w-[300px] text-center p-3 opacity-0 duration-300 group-hover:opacity-100 bg-black flex items-center justify-center rounded-md border text-sm md:text-base border-gray-400">
                        <span className="block m-auto">Laravel is a web application framework with expressive, elegant syntax.</span>
                    </div>
                </div>  
                <div className="group relative">
                    <CardIcon variant="next" size="w-8 h-8 sm:w-10 md:h-10 fill-gray-300 hover:fill-[#00C0FF] cursor-pointer peer" />
                    <div className="absolute -top-20 -left-20 -right-20 text-center p-2.5 opacity-0 duration-300 group-hover:opacity-100 bg-black flex items-center justify-center rounded-md border text-sm md:text-base border-gray-400">
                        <span className="block m-auto">The React Framework for the Web</span>
                    </div>
                </div>  
                <div className="group relative">
                    <CardIcon variant="react" size="w-8 h-8 sm:w-10 md:h-10 fill-gray-300 hover:fill-[#00C0FF] cursor-pointer peer" />
                    <div className="absolute -top-20 -left-20 -right-20 text-center p-2.5 opacity-0 duration-300 group-hover:opacity-100 bg-black flex items-center justify-center rounded-md border text-sm md:text-base border-gray-400">
                        <span className="block m-auto">The library for web and native user interfaces</span>
                    </div>
                </div>  
                <div className="group relative">
                    <CardIcon variant="tailwind" size="w-8 h-8 sm:w-10 md:h-10 fill-gray-300 hover:fill-[#00C0FF] cursor-pointer peer" />
                    <div className="absolute -top-20 md:-top-24 -left-24 -right-24 text-center p-2.5 opacity-0 duration-300 group-hover:opacity-100 bg-black flex items-center justify-center rounded-md border text-sm md:text-base border-gray-400">
                        <span className="block m-auto">Rapidly build modern websites without ever leaving your HTML.</span>
                    </div>
                </div>  
                <div className="group relative">
                    <CardIcon variant="mysql" size="w-12 h-12 sm:w-16 md:h-16 fill-gray-300 hover:fill-[#00C0FF] cursor-pointer mb-1 peer" />
                    <div className="absolute -top-24 -left-28 -right-28 text-center p-2.5 opacity-0 duration-300 group-hover:opacity-100 bg-black flex items-center justify-center rounded-md border text-sm md:text-base border-gray-400">
                        <span className="block m-auto">MySQL: Open-source RDBMS with high-performance SQL for relational data management.</span>
                    </div>
                </div>  
                
            </div>
        </div>
    );
}

export default About;