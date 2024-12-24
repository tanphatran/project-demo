import React from 'react'
import { Logo } from './Logo'
import NavbarMenu from './NavbarMenu'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const Header = () => {
    return (
        <section className='flex items-center justify-between border-b px-28 py-3 shadow-sm'>
            <div>
                <Logo />
            </div>
            <div>
                <NavbarMenu />
            </div>
            <div>
                <Link href={'/sign-in'}>
                    <Button className="">
                        Sign In
                    </Button>
                </Link>
            </div>
        </section>

    )
}
