'use client';

import Image from 'next/image';
import { CirclePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import ContentHeader from '../../_components/ContentHeader';

const CreatePostPage = () => {
    return (
        <div className="flex flex-col">
            <ContentHeader leftsideTitle="Tạo" rightsideTitle="bài viết mới" />

            {/* Form */}
            <div className="mt-5 rounded-lg p-8">
                <form className="space-y-8">
                    {/* Title */}
                    <div className="space-y-2">
                        <label className="text-lg font-medium">Tiêu đề</label>
                        <Input placeholder="Nhập tiêu đề bài viết ngắn gọn" className="text-lg p-5" />
                    </div>

                    {/* Slug */}
                    <div className="space-y-2">
                        <label className="text-lg font-medium">Slug</label>
                        <Input placeholder="Nhập slug bài viết ngắn gọn" className="text-lg p-5" />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <label className="text-lg font-medium">Mô tả</label>
                        <Textarea
                            placeholder="Nhập mô tả bài viết ngắn gọn"
                            className="text-lg p-5 min-h-40"
                        />
                    </div>

                    {/* Category */}
                    <div className="space-y-2">
                        <label className="text-lg font-medium">Danh mục</label>
                        <Select>
                            <SelectTrigger className="text-lg p-5">
                                <SelectValue placeholder="Chọn danh mục bài viết" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="category1">Danh mục 1</SelectItem>
                                    <SelectItem value="category2">Danh mục 2</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Tags */}
                    <div className="space-y-2">
                        <label className="text-lg font-medium">Chủ đề</label>
                        <Select>
                            <SelectTrigger className="text-lg p-5">
                                <SelectValue placeholder="Chọn chủ đề bài viết" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>IT</SelectLabel>
                                    <SelectItem value="tag1">Tag 1</SelectItem>
                                    <SelectItem value="tag2">Tag 2</SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                    <SelectLabel>Kế toán</SelectLabel>
                                    <SelectItem value="tag3">Tag 3</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Thumbnail */}
                    <div className="space-y-2">
                        <label className="text-lg font-medium">Ảnh đại diện</label>
                        <div className="flex flex-col">
                            <label htmlFor="upload-image" className="flex flex-col hover:cursor-pointer">
                                <div className="w-[300px] items-center justify-center">
                                    <Image
                                        src="/placeholder.jpeg"
                                        alt="thumbnail"
                                        height={300}
                                        width={300}
                                        className="w-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="flex mt-5">
                                    <CirclePlus className="mr-2 font-bold" />
                                    <h2 className="font-bold text-lg">Tải lên ảnh đại diện</h2>
                                </div>
                            </label>
                            <input type="file" id="upload-image" className="opacity-0" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                        <label className="text-lg font-medium">Nội dung bài viết</label>
                        <Textarea placeholder="Nhập nội dung bài viết" className="text-lg p-5 min-h-40" />
                    </div>

                    {/* Status */}
                    <div className="space-y-2">
                        <label className="text-lg font-medium">Trạng thái bài viết</label>
                        <Select>
                            <SelectTrigger className="text-lg p-5">
                                <SelectValue placeholder="Chọn trạng thái bài viết" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="draft">Bản nháp</SelectItem>
                                    <SelectItem value="published">Đã xuất bản</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <Button className="text-lg p-6 text-white  hover:bg-myPrimaryBlue/80">
                        Lưu bài viết
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default CreatePostPage;
