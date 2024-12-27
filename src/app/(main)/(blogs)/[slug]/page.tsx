'use client';

import { mockPosts } from '@/contansts';
import { Post } from '@/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { use } from 'react';
import BlogInfo from './_components/BlogInfo';
import BlogContent from './_components/BlogContent';

type Params = Promise<{ slug: string }>;

const BlogDetailPage = (props: { params: Params }) => {
    const params = use(props.params);
    const slug = params?.slug;

    const router = useRouter();

    const [blog, setBlog] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;

        const post = mockPosts.find((item) => item.slug === slug);

        if (!post) {
            router.push('/');
        } else {
            setBlog(post);
        }

        setLoading(false);
    }, [slug, router]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {blog && (
                <>
                    <BlogInfo blog={blog} />
                    <BlogContent blog={blog} />
                </>
            )}
        </div>
    );
};

export default BlogDetailPage;
