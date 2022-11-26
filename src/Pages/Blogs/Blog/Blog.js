import React from 'react';

const Blog = ({ blog }) => {
    const { questions, ans } = blog
    return (
        <div className='bg-base-100 shadow-lg p-8 my-16 rounded-md'>
            <h4 className='text-xl mb-4'>{questions}</h4>
            <p className='text-base'>{ans}</p>
        </div>
    );
};

export default Blog;