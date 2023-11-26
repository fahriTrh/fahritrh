import Card from "@/components/Card";
import CardIcon from "@/components/IconCard";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

    const projects = [
        {
            name: 'Twitter Clone',
            description: 'Fullstack Twitter clone built with Laravel, React.js, Tailwind, and mysql.',
            snapshot: 'snapshot.png',
            demo: 'https://youtu.be/1hCnx00sJLo?si=SFDKCX1Crkmh3yWe',
            code: 'https://github.com/fahriTrh/twitter-clone',
            children:<>
                        <div className="relative w-[min-content]">
                            <CardIcon variant='laravel' className='peer' />
                            <div className="absolute -top-10 -left-5 -right-5 opacity-0 peer-hover:opacity-100 duration-300 bg-black flex items-center justify-center py-1 rounded-md border text-sm md:text-base border-gray-400">
                                <span className="block m-auto">Laravel</span>
                            </div>
                        </div>
                        <div className="relative w-[min-content]">
                            <CardIcon variant='react' className='peer' />
                            <div className="absolute -top-10 -left-5 -right-5 opacity-0 peer-hover:opacity-100 duration-300 bg-black flex items-center justify-center py-1 rounded-md border text-sm md:text-base border-gray-400">
                                <span className="block m-auto">React</span>
                            </div>
                        </div>
                        <div className="relative w-[min-content]">
                            <CardIcon variant='tailwind' className='peer' />
                            <div className="absolute -top-10 -left-6 -right-6 opacity-0 peer-hover:opacity-100 duration-300 bg-black flex items-center justify-center py-1 rounded-md border text-sm md:text-base border-gray-400">
                                <span className="block m-auto">Tailwind</span>
                            </div>
                        </div>
                        <div className="relative w-[min-content]">
                            <CardIcon variant='mysql' className='peer' />
                            <div className="absolute -top-8 -left-3 -right-3 opacity-0 peer-hover:opacity-100 duration-300 bg-black flex items-center justify-center py-1 rounded-md border text-sm md:text-base border-gray-400">
                                <span className="block m-auto">Mysql</span>
                            </div>
                        </div>
                    </>
        },
        {
            name: 'Spotify Clone',
            description: 'Spotify clone application where users can listen to music previews',
            snapshot: 'spotify.png',
            demo: 'https://music-app-fahritrh.vercel.app',
            code: 'https://github.com/fahriTrh/music-app-fahritrh',
            children:<>
                        <div className="relative w-[min-content]">
                            <CardIcon variant='react' className='peer' />
                            <div className="absolute -top-10 -left-5 -right-5 opacity-0 peer-hover:opacity-100 duration-300 bg-black flex items-center justify-center py-1 rounded-md border text-sm md:text-base border-gray-400">
                                <span className="block m-auto">React</span>
                            </div>
                        </div>
                        <div className="relative w-[min-content]">
                            <CardIcon variant='api' className='peer' />
                            <div className="absolute -top-10 -left-8 -right-8 opacity-0 peer-hover:opacity-100 duration-300 bg-black flex items-center justify-center py-1 rounded-md border text-sm md:text-base border-gray-400">
                                <span className="block m-auto">spotify api</span>
                            </div>
                        </div>
                        <div className="relative w-[min-content]">
                            <CardIcon variant='css' className='peer' />
                            <div className="absolute -top-10 -left-5 -right-5 opacity-0 peer-hover:opacity-100 duration-300 bg-black flex items-center justify-center py-1 rounded-md border text-sm md:text-base border-gray-400">
                                <span className="block m-auto">Css</span>
                            </div>
                        </div>
                    </>
        },
        {
            name: 'Movie App',
            description: 'movie preview application where users can view trending films, as well as search for and play movie previews.',
            snapshot: 'movie.png',
            demo: 'https://movie-eight-lake.vercel.app/',
            code: 'https://github.com/fahriTrh/Movie',
            children:<>
                        <div className="relative w-[min-content]">
                            <CardIcon variant='react' className='peer' />
                            <div className="absolute -top-10 -left-5 -right-5 opacity-0 peer-hover:opacity-100 duration-300 bg-black flex items-center justify-center py-1 rounded-md border text-sm md:text-base border-gray-400">
                                <span className="block m-auto">React</span>
                            </div>
                        </div>
                        <div className="relative w-[min-content]">
                            <CardIcon variant='api' className='peer' />
                            <div className="absolute -top-10 -left-8 -right-8 opacity-0 peer-hover:opacity-100 duration-300 bg-black flex items-center justify-center py-1 rounded-md border text-sm md:text-base border-gray-400">
                                <span className="block m-auto">spotify api</span>
                            </div>
                        </div>
                        <div className="relative w-[min-content]">
                            <CardIcon variant='css' className='peer' />
                            <div className="absolute -top-10 -left-5 -right-5 opacity-0 peer-hover:opacity-100 duration-300 bg-black flex items-center justify-center py-1 rounded-md border text-sm md:text-base border-gray-400">
                                <span className="block m-auto">Css</span>
                            </div>
                        </div>
                    </>
        },
        
    ]

    return (
        <div className="px-4 sm:px-7 md:px-10 lg:px-12 pt-28 md:pt-36 lg:pt-40 mb-40">
            <div className='' data-aos='fade-up'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary'>
                    Projects
                </h1>
                <h2 className='text-base sm:text-lg md:text-xl mt-2 md:mt-3 text-gray-400'>
                    A showcase of my projects on the web development.
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-h-[max-content] gap-4'>
                    {/* projects card */}

                    {
                        projects.map((project, index) => (
                            <Card
                                key={index}
                                name={project.name}
                                description={project.description}
                                snapshot={project.snapshot}
                                demo={`${project.demo}`}
                                code={`${project.code}`}
                            >
                                {
                                    project.children
                                }
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Projects;