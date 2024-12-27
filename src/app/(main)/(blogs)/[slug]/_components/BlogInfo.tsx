import BreadCrumb from '@/components/BreadCrumb';
import { Badge } from '@/components/ui/badge';
import { CategoryItems, TagsItems } from '@/contansts';
import { Post } from '@/types';

interface BlogInfoProps {
    blog: Post;
}

const BlogInfo = ({ blog }: BlogInfoProps) => {
    let color = 'bg-blue-400';

    if (blog?.category === 'finance') {
        color = 'bg-green-400';
    } else if (blog?.category === 'it') {
        color = 'bg-yellow-400';
    } else {
        color = 'bg-blue-400';
    }

    return (
        <div>
            <BreadCrumb url={blog?.slug} cat={blog.category} />
            <div
                className="flex flex-row mt-5 gap-3 justify-start items-center
      "
            >
                <Badge
                    className={`bg-slate-500 text-white min-w-20 min-h-4 p-1 items-center justify-center`}
                >
                    {blog?.createdAt?.toLocaleDateString()}
                </Badge>
                <Badge
                    className={`bg-slate-500 text-white min-w-20 min-h-4 p-1 items-center justify-center`}
                >
                    {blog?.userName}
                </Badge>
                <Badge
                    className={`${color} text-white min-w-20 min-h-4 p-1 items-center justify-center`}
                >
                    {CategoryItems.find((item) => item.value === blog?.category)?.label}
                </Badge>

            </div>
            <h1 className="text-4xl font-bold m-16 text-center">{blog?.title}</h1>
        </div>
    );
};

export default BlogInfo;