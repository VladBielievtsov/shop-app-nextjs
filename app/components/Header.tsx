import React from 'react'
import Link from 'next/link';
import { FiShoppingCart, FiUser } from "react-icons/fi";

export default function Header() {
  return (
    <header className='fixed left-0 top-0 w-full z-20 bg-white'>
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div>
          <Link href="/" className='text-3xl font-bold'>SHOP-APP</Link>
        </div>
        <div>
          <nav className='flex space-x-8'>
            <Link href="/" className='font-medium hover:underline'>Home</Link>
            <Link href="/" className='font-medium hover:underline'>Shop</Link>
            <Link href="/" className='font-medium hover:underline'>Categories</Link>
          </nav>
        </div>
        <div className='flex items-center space-x-6'>
          <input type="search" placeholder='Search' className='bg-gray-100 px-4 py-2 rounded-md border border-gray-200 focus:border-gray-300 focus-visible:outline-0 w-[280px]' />
          <Link href="/" className='p-2 hover:bg-gray-100 duration-150 rounded-md'>
            <FiUser className='w-[20px] h-auto' />
          </Link>
          <Link href="/" className=' p-2 hover:bg-gray-100 duration-150 rounded-md'>
            <FiShoppingCart className='w-[20px] h-auto' />
          </Link>
        </div>
      </div>
    </header>
  )
}
