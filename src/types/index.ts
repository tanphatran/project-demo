export type Post = {
    id: number;
    postId: string;
    title: string;
    slug: string;
    description: string;
    category: string;
    tags: string;
    thumbnail: string;
    content: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    userName: string;
    userProfileImage: string;
};