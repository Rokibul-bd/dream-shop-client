import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Blog from './Blog/Blog';

const Blogs = () => {
    const { data: blogs = [] } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('https://dream-shop-server.vercel.app/blogs')
            const data = res.json()
            return data
        }
    })
    return (
        <div className='my-36'>
            {
                blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;