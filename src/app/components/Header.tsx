import React from 'react'
import { Logo } from './Logo'
import NavbarMenu from './NavbarMenu'

export const Header = () => {
    return (
        <section className='flex items-center justify-between border-b px-20 py-3 shadow-sm'>
            <div>
                <Logo />
            </div>
            <div>
                <NavbarMenu />
            </div>
        </section>

    )
}
