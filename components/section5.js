import React from 'react'
import Link from 'next/link'

export default function section5() {
  return (
    <section className='py-3  bg-gray-100 items-center flex flex-col'>
    <div className='container flex flex-row gap-5 items-center  '>
        
     <Link href="/"><a href='/'><h1 className='text-gray-400 hover:text-[#1ED760]  font-bold text-2xl'>Home</h1></a></Link>
     <Link href="/"><a href='/'><h1 className='text-gray-400 hover:text-[#1ED760]  font-bold text-2xl'>Service</h1></a></Link>
     <Link href="/"><a href='/'><h1 className='text-gray-400 hover:text-[#1ED760]  font-bold text-2xl'>Contact</h1></a></Link>
     <Link href="/"><a href='/'><h1 className='text-gray-400 hover:text-[#1ED760]  font-bold text-2xl'>Labs</h1></a></Link>
     <Link href="/"><a href='/'><h1 className='text-gray-400 hover:text-[#1ED760]  font-bold text-2xl'>About us</h1></a></Link>



    </div>
    </section>
  )
}
