'use client';

import { mockPosts } from '@/contansts';
import BlogCard from '@/app/(main)/_components/BlogCard';
import CategoryList from '@/app/(main)/_components/CategoryList';
import { Post } from '@/types';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type Params = Promise<{ catSlug: string }>;
type SearchParams = Promise<{ [key: string]: string | undefined }>;

const BlogByCatPage = (props: { params: Params; searchParams: SearchParams }) => {
    const params = React.use(props.params);
    const searchParams = React.use(props.searchParams);

    const [blogs, setBlogs] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const catSlug = params?.catSlug;
    const currentTag = searchParams?.tag || '';

    useEffect(() => {
        setLoading(true);
        const getPosts = () => {
            if (!catSlug) {
                router.push('/');
                return;
            }

            const filteredPosts = mockPosts.filter(
                (post) =>
                    post.category === catSlug &&
                    (currentTag ? post.tags.includes(currentTag) : true)
            );

            setBlogs(filteredPosts);
        };

        getPosts();
        setLoading(false);
    }, [catSlug, currentTag, router]);

    return (
        <div className="flex gap-10 top-0 w-full">
            {/* CatList Sidebar */}
            <div className="shadow-xl p-5 sticky hidden lg:block max-w-[240px] overflow-y-scroll h-screen">
                <CategoryList cat={catSlug} />
            </div>

            {/* TagList and Post Card */}
            <div className="flex flex-col w-full gap-5 p-5">
                {/* <TagList cat={catSlug} /> */}
                <hr className="border-2 w-[30%] my-5 ml-[35%]" />
                {blogs.length === 0 ? (
                    <p>Không có bài viết.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog, index) => (
                            <div key={index} className="flex flex-col gap-3">
                                <BlogCard post={blog} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogByCatPage;
