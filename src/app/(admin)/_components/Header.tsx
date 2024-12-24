
import { Logo } from '@/app/components/Logo';
import Link from 'next/link';

const Header = () => {


    return (
        <section className="flex items-center justify-between border-b px-20 py-3 shadow-sm">
            <Link href="/" className="hidden lg:block">
                <Logo />
            </Link>

        </section>
    );
};

export default Header;