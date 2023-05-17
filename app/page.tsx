import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight } from "react-icons/fi";
import HomeBanner from './components/HomeBanner'

export default function Home() {
  return (
    <>
      <HomeBanner />
      <section className='py-[100px]'>
        <h2 className='text-2xl font-bold'>Categories</h2>
        <div className='grid grid-cols-4 gap-4 mt-10'>
          {[...Array(4)].map((category, id) => (
            <Link 
              href="/" 
              key={id}
              className='categories-card flex items-end relative w-full p-8 aspect-square rounded-md overflow-hidden'
            >
              <img 
                src="https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=902&q=80" 
                alt="alt"
                className='w-full h-full absolute top-0 left-0 object-cover block duration-300'
              />
              <div className='relative w-full z-10 bg-white p-4 rounded-md flex items-center justify-between hover:bg-gray-100'>
                Jackets <FiArrowRight />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
