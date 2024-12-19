import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <header className='p-[30px] bg-orange-600 justify-center flex gap-[30px]'>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/profile'}>Profile</Link>
        </header >
    )
}

