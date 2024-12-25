'use client';

import { CategoryItems } from '@/contansts';
import Link from 'next/link';

interface CategoryListProps {
    cat?: string;
}

const CategoryList = ({ cat }: CategoryListProps) => {
    return (
        <div className=" flex flex-wrap items-center justify-center gap-6">
            {CategoryItems.map((item, index) => {
                const Icon = item.icon
                return (
                    <Link
                        key={index}
                        href={`${item.href}`}
                        className={`flex flex-row gap-2 rounded-lg min-w-[140px] hover:shadow-2xl hover:opacity-70 p-3 text-white items-center ${cat === ''
                            ? item.bgColor
                            : cat === item.value
                                ? item.bgColor
                                : 'bg-slate-400'
                            }`}
                    >
                        <Icon size={30} />
                        {item.label}
                    </Link>
                );
            })}
        </div>
    );
};

export default CategoryList;
