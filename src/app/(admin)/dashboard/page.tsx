import React from 'react';
import ContentHeader from '../_components/ContentHeader';
import StatisticsCard from '../_components/StatisticsCard';


const DashboardPage = () => {

    const mockPosts = [
        { id: 1, category: 'Technology', tags: ['React', 'JavaScript'], status: 'publish' },
        { id: 2, category: 'Finance', tags: ['Investment', 'Crypto'], status: 'draft' },
        { id: 3, category: 'Health', tags: ['Wellness', 'Fitness'], status: 'publish' },
        { id: 4, category: 'Technology', tags: ['AI', 'ML'], status: 'publish' },
        { id: 5, category: 'Lifestyle', tags: ['Travel', 'Food'], status: 'draft' },
    ];

    const postCats = mockPosts.map((post) => post.category);
    const postTags = mockPosts.map((post) => post.tags);

    const uniCats = postCats.filter((value, index, self) => self.indexOf(value) === index);
    const uniTags = postTags.flat().filter((value, index, self) => self.indexOf(value) === index);

    return (
        <div>
            <div className="flex flex-col">
                <ContentHeader leftsideTitle="Quản trị" rightsideTitle="bài viết" />
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {/* Statistics card */}
                <StatisticsCard
                    title="Bài viết xuất bản"
                    value={mockPosts.filter((post) => post.status === 'publish').length}
                    color="bg-red-400"
                    secondaryColor="text-red-400"
                />
                <StatisticsCard
                    title="Danh mục"
                    value={uniCats.length}
                    color="bg-yellow-400"
                    secondaryColor="text-yellow-400"
                />
                <StatisticsCard
                    title="Chủ đề"
                    value={uniTags.length}
                    color="bg-blue-400"
                    secondaryColor="text-blue-400"
                />
                <StatisticsCard
                    title="Bài viết nháp"
                    value={mockPosts.filter((post) => post.status === 'draft').length}
                    color="bg-green-400"
                    secondaryColor="text-green-400"
                />
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Chart */}
                <div className="border-2 shadow-lg lg:col-span-2 p-10 rounded-xl">
                    <div className="flex flex-row justify-between">
                        <h1 className="text-2xl font-bold">Tổng quan</h1>
                        <h1 className="text-2xl font-bold">
                            Bài viết xuất bản: {''}
                            <strong className="text-4xl text-red">
                                {mockPosts.filter((post) => post.status === 'publish').length}
                            </strong>
                        </h1>
                    </div>
                    {/* <StatisticsChart posts={mockPosts} /> */}
                </div>
                {/* Table */}
                <div className="border-2 shadow-sm lg:col-span-1 rounded-xl p-10">
                    <h1 className="text-2xl font-bold">Thống kê bài viết theo danh mục</h1>
                    <div className="mt-10">
                        {/* <StatisticsTable posts={mockPosts} cats={uniCats} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
