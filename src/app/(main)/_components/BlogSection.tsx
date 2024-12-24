'use client';

import { Post } from '@/types';
import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
// import CategoryList from './CategoryList';
import Link from 'next/link';
import { Ellipsis } from 'lucide-react';
// import CustomLoader from '@/components/CustomLoader';

const BlogSection = () => {
    // Dữ liệu mẫu cho các bài viết
    const mockPosts: Post[] = [
        {
            id: 1,
            postId: '1',
            title: 'Sample Blog Post 1',
            slug: 'sample-blog-post-1',
            description: 'This is a description of the blog post.',
            category: 'Tech',
            tags: 'React, Next.js',
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1', // Link thay thế ảnh
            content: 'Full content of the post goes here...',
            status: 'publish',
            createdAt: new Date('2024-01-01T10:00:00Z'),
            updatedAt: new Date('2024-01-02T15:00:00Z'),
            createdBy: 'admin',
            userName: 'John Doe',
            userProfileImage: 'https://via.placeholder.com/35?text=John', // Link thay thế ảnh
        },
        {
            id: 2,
            postId: '2',
            title: 'Sample Blog Post 2',
            slug: 'sample-blog-post-2',
            description: 'This is a description of the second blog post.',
            category: 'Design',
            tags: 'UI, UX',
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+2', // Link thay thế ảnh
            content: 'Full content of the second post goes here...',
            status: 'publish',
            createdAt: new Date('2024-01-05T12:00:00Z'),
            updatedAt: new Date('2024-01-06T18:00:00Z'),
            createdBy: 'admin',
            userName: 'Jane Smith',
            userProfileImage: 'https://via.placeholder.com/35?text=Jane', // Link thay thế ảnh
        },
        {
            id: 3,
            postId: '3',
            title: 'Sample Blog Post 3',
            slug: 'sample-blog-post-3',
            description: 'This is a description of the third blog post.',
            category: 'Marketing',
            tags: 'SEO, Content Strategy',
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+3', // Link thay thế ảnh
            content: 'Full content of the third post goes here...',
            status: 'publish',
            createdAt: new Date('2024-01-10T09:00:00Z'),
            updatedAt: new Date('2024-01-11T14:00:00Z'),
            createdBy: 'admin',
            userName: 'Alice Cooper',
            userProfileImage: 'https://via.placeholder.com/35?text=Alice', // Link thay thế ảnh
        },
        {
            id: 4,
            postId: '4',
            title: 'Sample Blog Post 4',
            slug: 'sample-blog-post-4',
            description: 'This is a description of the fourth blog post.',
            category: 'Health',
            tags: 'Fitness, Nutrition',
            thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+4', // Link thay thế ảnh
            content: 'Full content of the fourth post goes here...',
            status: 'publish',
            createdAt: new Date('2024-01-15T08:00:00Z'),
            updatedAt: new Date('2024-01-16T16:00:00Z'),
            createdBy: 'admin',
            userName: 'Bob Marley',
            userProfileImage: 'https://via.placeholder.com/35?text=Bob', // Link thay thế ảnh
        },
        // Thêm một số bài viết mẫu khác nếu cần
    ];


    const [BlogList, setBlogList] = useState<Post[]>(mockPosts); // Đặt dữ liệu mẫu làm state ban đầu
    const [loading, setLoading] = useState(false);

    // Chỉ hiển thị 8 bài viết đầu tiên
    const displayBlogList = BlogList.slice(0, 8);

    return (
        <div className="">
            {/* Thông tin */}
            <div className="flex flex-col gap-10 md:flex-row justify-between">
                {/* <CategoryList cat="" /> */}
                <Link
                    href={`/blog`}
                    className="flex items-center justify-center bg-myPrimaryBlue hover:opacity-70 text-white p-3 rounded-lg max-h-14"
                >
                    <p className="mr-2">Xem thêm</p>
                    <Ellipsis size={30} />
                </Link>
            </div>
            {/* Danh sách bài viết */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-20">
                {displayBlogList.map((post, index) => (
                    <div key={index}>
                        <BlogCard post={post} />
                    </div>
                ))}
            </div>

            {/* <CustomLoader isLoading={loading} title="Vui lòng chờ" /> */}
        </div>
    );
};

export default BlogSection;
