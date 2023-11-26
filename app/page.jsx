'use client'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Icon from '@/components/Icon'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import MyModal from '@/components/MyModal'
import CardIcon from '@/components/IconCard'

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    AOS.init();
  }, [])

  const buttons = [
    { label: 'See my projects', to: '/projects' },
    { label: 'See more about me', to: '/about' },
  ]

  return (
    <main className='px-4 sm:px-7 md:px-10 lg:px-12 pt-28 md:pt-36 lg:pt-40'>
      <h1 className='text-3xl sm:text-4xl md:text-6xl font-extrabold lead leading-snug md:leading-[66px] lg:leading-[69px] tracking-wide' data-aos='fade-up'>
        <span className='text-xl sm:text-2xl md:text-4xl'>Hi! <br /></span>
        I'm <span className='text-primary'>Far</span> - Full Stack
        Developer
      </h1>

      <p className='lg:max-w-[80%] text-gray-300 mt-3.5 sm:mt-4 md:mt-4 lg:mt-5 xl:mt-6 leading-normal sm:leading-relaxed text-base md:text-lg lg:text-xl lg:leading-normal' data-aos='fade-up'>
        I'm a self-taught developer, who's currently pursuing a Full-Stack development to create stunning user experiences on the front-end, scalable, and secure infrastructure on the backend.
      </p>

      <div data-aos='fade-up'>
        {
          buttons.map(({ label, to }, index) => (
            <Button onClick={() => router.push(to)} className='mt-5 lg:mt-6 xl:mt-7' key={index} data-aos='fade-up'>
              {label}
            </Button>
          ))
        }
      </div>

      <div className='mt-5 lg:mt-6 xl:mt-7 flex items-center gap-3 md:gap-4 lg:gap-5 text-gray-400 text-sm md:text-base' data-aos='fade-up'>
        <Link href='https://docs.google.com/document/d/1gWJA-ROPYqVTjLjEcjsJ3SY2zmEa9GEkh8aKym8J7ek/edit?usp=sharing' target='_blank' className='flex items-center gap-1.5 group'>
          <Icon variant='resume' />
          <span className='block group-hover:text-[#00C0FF]'>Resume</span>
        </Link>
        <Link href='https://www.linkedin.com/in/fakhri-tarihoran-7b219628b/' target='_blank' className='flex items-center gap-1.5 group'>
          <Icon variant='linked-in' />
          <span className='block group-hover:text-[#00C0FF]'>LinkedIn</span>
        </Link>
        <Link href='https://github.com/fahriTrh' target='_blank' className='flex items-center gap-1.5 group'>
          <Icon variant='github' />
          <span className='block group-hover:text-[#00C0FF]'>GitHub</span>
        </Link>
      </div>

      <div className='mt-48' data-aos='fade-up'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary'>
          Featured Project
        </h1>
        <h2 className='text-base sm:text-lg md:text-xl mt-2 md:mt-3 text-gray-400'>
          Check out my featured project.
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-h-[max-content] gap-4'>
          {/* projects card */}
          <Card
            name='Twitter Clone'
            description='
              Fullstack Twitter clone built with Laravel, React.js, Tailwind, and mysql.
            '
            snapshot='/snapshot.png'
            demo='https://youtu.be/1hCnx00sJLo?si=SFDKCX1Crkmh3yWe'
            code='https://github.com/fahriTrh/twitter-clone'
          >
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
          </Card>
        </div>
        <div className='flex items-center justify-center mt-6' data-aos='fade-up'>
          <Button onClick={() => router.push('/projects')}>
            See More Projects
          </Button>
        </div>
      </div>
    </main>
  )
}