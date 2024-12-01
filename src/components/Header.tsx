import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchInput from './SearchInput'

const Header = () => {
  return (
    <div className='flex justify-between items-center py-1'>
      <Link href="/">
        <div className='relative w-[200px] h-[50px]'>
           <Image src="/logo.png" alt='logo' fill sizes='(max-width:786px) 50vw, (max-width:1200px) 100vw, 100vw' className='object-contain' />
        </div>
      </Link>
      <SearchInput/>
    </div>
  )
}

export default Header
