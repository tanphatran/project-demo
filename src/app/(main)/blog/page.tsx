'use client';

import { mockPosts } from '@/contansts';
import { Post } from '@/types';
import React, { useEffect, useState } from 'react';
import BlogList from './_components/BlogList';

const POST_PER_PAGE = 5;

type SearchParams = Promise<{ [key: string]: string | undefined }>;

const BlogPage = (props: { searchParams: SearchParams }) => {
    const searchParams = React.use(props.searchParams); // Sử dụng React.use() để xử lý Promise
    const currentPage = Number(searchParams?.page) || 1;

    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);

    const totalPages = Math.ceil(posts.length / POST_PER_PAGE);

    const displayPosts = posts.slice(
        (currentPage - 1) * POST_PER_PAGE,
        currentPage * POST_PER_PAGE
    );

    useEffect(() => {
        setLoading(true);
        const getPosts = () => {
            const publishedPosts = mockPosts.filter((post) => post.status === 'publish');
            setPosts(publishedPosts);
            setLoading(false);
        };
        getPosts();
    }, []);

    return (
        <div className="flex flex-col">
            {/* Blog List */}
            <div className="col-span-2">
                <BlogList displayPosts={displayPosts} totalPages={totalPages} />
            </div>
        </div>
    );
};

export default BlogPage;
