'use client';

import { Post } from '@/types';

interface BlogContentProps {
    blog: Post;
}

const BlogContent = ({ blog }: BlogContentProps) => {
    return (
        <div className="mt-10">
            {/* Thumbnail */}
            {blog.thumbnail && (
                <div className="mb-6">
                    <img
                        src={blog.thumbnail}
                        alt={blog.title}
                        className="w-full rounded-lg object-cover"
                    />
                </div>
            )}

            {/* Title */}
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

            {/* Metadata */}
            <div className="text-sm text-gray-500 mb-6">
                <p>
                    Posted by{' '}
                    <span className="font-semibold">{blog.userName}</span> on{' '}
                    {new Date(blog.createdAt).toLocaleDateString()}
                </p>
                <p>Category: <span className="font-semibold">{blog.category}</span></p>
                <p>Tags: <span className="font-semibold">{blog.tags}</span></p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-6">{blog.description}</p>

            {/* Content */}
            <div
                className="prose prose-lg text-gray-800"
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />
        </div>
    );
};

export default BlogContent;
