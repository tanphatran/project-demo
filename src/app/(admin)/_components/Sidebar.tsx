'use client';


import { SidebarMenuItems } from '@/contansts';
import { usePathname } from 'next/navigation';
import SidebarMenuItem from './SidebarMenuItem';

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="fixed h-full border-r-2 md:w-64 shadow-md p-5">
            <div>
                {SidebarMenuItems.map((item, index) => (
                    <SidebarMenuItem
                        key={index}
                        link={item.link}
                        label={item.label}
                        Icon={item.icon}
                        pathname={pathname}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;