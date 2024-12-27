'use client';

import { mockPosts } from '@/contansts';
import { Post } from '@/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import BlogInfo from './_components/BlogInfo';
import BlogContent from './_components/BlogContent';

type Params = { slug: string }; // Thay đổi kiểu Params từ Promise thành object chứa slug

const BlogDetailPage = (props: { params: Params }) => {
    const { slug } = props.params; // Truyền trực tiếp slug từ props

    const router = useRouter();

    const [blog, setBlog] = useState<Post | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getPost = () => {
            if (!slug) return;
            const post = mockPosts.find((item) => item.slug === slug); // Tìm bài viết từ mockPosts
            if (!post) {
                router.push('/'); // Nếu không tìm thấy bài viết, chuyển hướng về trang chủ
            } else {
                setBlog(post); // Cập nhật state với bài viết tìm được
            }
        };
        getPost();
        setLoading(false);
    }, [slug, router]);



    return (
        <div>
            {/* Blog Detail Page */}
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
