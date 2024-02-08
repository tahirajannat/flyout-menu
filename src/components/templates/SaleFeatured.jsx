import React from 'react';
import { recentPosts } from '../../utility/data';

const SaleFeatured = () => {
    return (
        <div className='col-span-1 grid gap-4 grid-cols-2'>
            {/* <div className='grid grid-cols-2'></div> */}
            {recentPosts.map((post) => (
                <a
                    key={post.id}
                    href='#'
                    className='p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-difference duration-300 transition-all bg-url()]'
                    style={{
                        backgroundImage: `url(${post.imageUrl})`,
                    }}
                >
                    <p className='max-w-xl mb-5 font-extrabold leading-tight tracking-tight capitalize text-white'>
                        {post.title}
                    </p>
                    <p className='max-w-xl mb-5 font-normal  leading-tight tracking-tight capitalize text-white'>
                        <span className='border mr-2 px-1.5 py-0.5 rounded-sm'>
                            {post.category.title}
                        </span>
                    </p>
                    <button
                        type='button'
                        className='inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700'
                    >
                        Buy Now
                        <svg
                            className='w-3 h-3 ms-2 rtl:rotate-180'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 14 10'
                        >
                            <path
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M1 5h12m0 0L9 1m4 4L9 9'
                            />
                        </svg>
                    </button>
                </a>
            ))}
        </div>
    );
};

export default SaleFeatured;
