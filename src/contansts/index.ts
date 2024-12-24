import {
    BadgeDollarSign,
    Calculator,
    FilePlusIcon,
    GlobeLock,
    LayoutDashboard,
    LoaderIcon,
    SettingsIcon,
    StickyNoteIcon,
} from 'lucide-react';
export const NavMenuItems = [
    { value: 'home', label: 'Home', href: '/' },
    { value: 'blog', label: 'Blog', href: '/blog' },
    { value: 'about', label: 'About', href: '/about' },
    { value: 'contact', label: 'Contact', href: '/contact' },
];

export const CategoryItems = [
    {
        value: 'accounting',
        label: 'Kế toán',
        href: '/category/accounting',
        icon: Calculator,
        bgColor: 'bg-myPrimaryBlue',
        color: 'myPrimaryBlue',
    },
    {
        value: 'finance',
        label: 'Tài chính',
        href: '/category/finance',
        icon: BadgeDollarSign,
        bgColor: 'bg-myPrimaryGreen',
        color: 'myPrimaryGreen',
    },
    {
        value: 'it',
        label: 'IT',
        href: '/category/it',
        icon: GlobeLock,
        bgColor: 'bg-myPrimaryYellow',
        color: 'myPrimaryYellow',
    },
];