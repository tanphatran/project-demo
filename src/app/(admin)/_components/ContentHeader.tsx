import { Button } from '@/components/ui/button';
import Link from 'next/link';
import BreadCrumb from './BreadCrumb';

interface ContentHeaderProps {
    leftsideTitle?: string;
    rightsideTitle?: string;
    subtitle?: string;
    breadcrumb?: string;
    isButtonVisible?: boolean;
}

const ContentHeader = ({
    leftsideTitle,
    rightsideTitle,
    subtitle,
    // breadcrumb,
    isButtonVisible,
}: ContentHeaderProps) => {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-5xl">
                    <strong className="text-red-500"> {leftsideTitle}</strong>{' '}
                    <strong>{rightsideTitle}</strong>
                </h1>
                <h2 className="text-lg font-bold text-red-500">{subtitle}</h2>
            </div>
            <div className="hidden lg:block">
                <BreadCrumb />
            </div>
            {isButtonVisible && (
                <div className="flex md:hidden">
                    <Link href={'/dashboard/create-post'}>
                        <Button className="text-lg p-6 text-white bg-green-600 hover:bg-green-600/80">
                            Tạo bài viết
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ContentHeader;