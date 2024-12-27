import {
    BadgeDollarSign,
    Calculator,
    FilePlusIcon,
    GlobeLock,
    LayoutDashboard,
    LoaderIcon,
    SettingsIcon,
    StickyNoteIcon,
} from 'lucide-react';

export const NavMenuItems = [
    { value: 'home', label: 'Home', href: '/' },
    { value: 'blog', label: 'Blog', href: '/blog' },
    { value: 'about', label: 'About', href: '/about' },
    { value: 'contact', label: 'Contact', href: '/contact' },
];

export const CategoryItems = [
    {
        value: 'accounting',
        label: 'Kế toán',
        href: '/category/accounting',
        icon: Calculator,
        bgColor: 'bg-blue-400',
        color: 'blue-400',
    },
    {
        value: 'finance',
        label: 'Tài chính',
        href: '/category/finance',
        icon: BadgeDollarSign,
        bgColor: 'bg-green-400',
        color: 'green-400',
    },
    {
        value: 'it',
        label: 'IT',
        href: '/category/it',
        icon: GlobeLock,
        bgColor: 'bg-yellow-400',
        color: 'yellow-400',
    },
];

export const AccountTagsItems = [
    {
        parentValue: 'accounting',
        value: 'finance accounting',
        label: 'Kế toán tài chính',
        icon: Calculator,
        bgColor: 'bg-blue-400',
        color: 'blue-400',
    },
    {
        parentValue: 'accounting',
        value: 'management accounting',
        label: 'Kế toán quản trị',
        icon: Calculator,
        bgColor: 'bg-blue-400',
        color: 'blue-400',
    },
    {
        parentValue: 'accounting',
        value: 'vietnam accounting',
        label: 'Kế toán Việt Nam',
        icon: Calculator,
        bgColor: 'bg-blue-400',
        color: 'blue-400',
    },
    {
        parentValue: 'accounting',
        value: 'international accounting',
        label: 'Kế toán quốc tế',
        icon: Calculator,
        bgColor: 'bg-blue-400',
        color: 'blue-400',
    },
];

export const FinanceTagsItems = [
    {
        parentValue: 'finance',
        value: 'micro finance',
        label: 'Tài chính vi mô',
        icon: BadgeDollarSign,
        bgColor: 'bg-myPrimaryGreen',
        color: 'myPrimaryGreen',
    },
    {
        parentValue: 'finance',
        value: 'macro finance',
        label: 'Tài chính vĩ mô',
        icon: BadgeDollarSign,
        bgColor: 'bg-myPrimaryGreen',
        color: 'myPrimaryGreen',
    },
    {
        parentValue: 'finance',
        value: 'vietnam finance',
        label: 'Tài chính Việt Nam',
        icon: BadgeDollarSign,
        bgColor: 'bg-myPrimaryGreen',
        color: 'myPrimaryGreen',
    },
    {
        parentValue: 'finance',
        value: 'international finance',
        label: 'Tài chính quốc tế',
        icon: BadgeDollarSign,
        bgColor: 'bg-myPrimaryGreen',
        color: 'myPrimaryGreen',
    },
];

export const ITTagsItems = [
    {
        parentValue: 'it',
        value: 'frontend',
        label: 'Frontend',
        icon: GlobeLock,
        bgColor: 'bg-myPrimaryYellow',
        color: 'myPrimaryYellow',
    },
    {
        parentValue: 'it',
        value: 'backend',
        label: 'Backend',
        icon: GlobeLock,
        bgColor: 'bg-myPrimaryYellow',
        color: 'myPrimaryYellow',
    },
    {
        parentValue: 'it',
        value: 'devops',
        label: 'Devops',
        icon: GlobeLock,
        bgColor: 'bg-myPrimaryYellow',
        color: 'myPrimaryYellow',
    },
    {
        parentValue: 'it',
        value: 'fullstack',
        label: 'Fullstack',
        icon: GlobeLock,
        bgColor: 'bg-myPrimaryYellow',
        color: 'myPrimaryYellow',
    },
];

export const TagsItems = [
    ...ITTagsItems,
    ...FinanceTagsItems,
    ...AccountTagsItems,
];

export const SidebarMenuItems = [
    { label: 'Bảng quản trị', link: '/dashboard', icon: LayoutDashboard },
    {
        label: 'Bài viết xuất bản',
        link: '/dashboard/publish-posts',
        icon: StickyNoteIcon,
    },
    {
        label: 'Bài viết nháp',
        link: '/dashboard/draft-posts',
        icon: LoaderIcon,
    },
    {
        label: 'Tạo bài viết',
        link: '/dashboard/create-post',
        icon: FilePlusIcon,
    },
    {
        label: 'Hồ sơ admin',
        link: '/dashboard/profile',
        icon: SettingsIcon,
    },
];

export const StatusItems = [
    { value: 'draft', label: 'Bản nháp' },
    { value: 'publish', label: 'Xuất bản' },
];

export const mockPosts = [
    {
        id: 1,
        postId: '1',
        title: 'Sample Blog Post 1',
        slug: 'sample-blog-post-1',
        description: 'This is a description of the blog post.',
        category: 'it',
        tags: 'React, Next.js',
        thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+1',
        content: 'Full content of the post goes here...',
        status: 'publish',
        createdAt: new Date('2024-01-01T10:00:00Z'),
        updatedAt: new Date('2024-01-02T15:00:00Z'),
        createdBy: 'admin',
        userName: 'John Doe',
        userProfileImage: 'https://via.placeholder.com/35?text=John',
    },
    {
        id: 2,
        postId: '2',
        title: 'Sample Blog Post 2',
        slug: 'sample-blog-post-2',
        description: 'This is a description of the second blog post.',
        category: 'finance',
        tags: 'UI, UX',
        thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+2',
        content: 'Full content of the second post goes here...',
        status: 'publish',
        createdAt: new Date('2024-01-05T12:00:00Z'),
        updatedAt: new Date('2024-01-06T18:00:00Z'),
        createdBy: 'admin',
        userName: 'Jane Smith',
        userProfileImage: 'https://via.placeholder.com/35?text=Jane',
    },
    {
        id: 3,
        postId: '3',
        title: 'Sample Blog Post 3',
        slug: 'sample-blog-post-3',
        description: 'This is a description of the third blog post.',
        category: 'accounting',
        tags: 'SEO, Content Strategy',
        thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+3',
        content: 'Full content of the third post goes here...',
        status: 'publish',
        createdAt: new Date('2024-01-10T09:00:00Z'),
        updatedAt: new Date('2024-01-11T14:00:00Z'),
        createdBy: 'admin',
        userName: 'Alice Cooper',
        userProfileImage: 'https://via.placeholder.com/35?text=Alice',
    },
    {
        id: 4,
        postId: '4',
        title: 'Sample Blog Post 4',
        slug: 'sample-blog-post-4',
        description: 'This is a description of the fourth blog post.',
        category: 'it',
        tags: 'Frontend, Backend',
        thumbnail: 'https://via.placeholder.com/300x200?text=Thumbnail+4',
        content: 'Full content of the fourth post goes here...',
        status: 'publish',
        createdAt: new Date('2024-01-15T08:00:00Z'),
        updatedAt: new Date('2024-01-16T16:00:00Z'),
        createdBy: 'admin',
        userName: 'Bob Marley',
        userProfileImage: 'https://via.placeholder.com/35?text=Bob',
    },
];