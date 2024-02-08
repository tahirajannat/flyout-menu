import React from 'react';
import { recentPosts } from '../../utility/data';

const SaleFeatured = () => {
    return (
        <div className='col-span-1 grid gap-8 grid-cols-3'>
            {/* <div className='grid grid-cols-2'></div> */}
            {recentPosts.map((post) => (
                <a
                    key={post.id}
                    href='#'
                    className='px-8 py-16 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg  hover:bg-blend-soft-light dark:hover:bg-blend-difference duration-300 transition-all relative '
                    style={{
                        backgroundImage: `url(${post.imageUrl})`,
                    }}
                >
                    <div className='absolute h-[-webkit-fill-available] w-[-webkit-fill-available] top-0 left-0 z-10 bg-black  rounded-lg  opacity-30'></div>
                    <div className='relative h-[-webkit-fill-available] w-[-webkit-fill-available] top-0 left-0 z-50'>
                        <p className=' mb-5 font-medium text-base capitalize text-white'>
                            {post.title}
                        </p>
                        <p className=' mb-5 font-semibold  capitalize text-white'>
                            {/* {post.title}  */} Upto 60% Off
                        </p>
                        {/* <p className=' mb-5 font-normal leading-tight tracking-tight capitalize text-xs text-white'>
                        <span className='border mr-2 px-1.5 py-0.5 rounded-sm'>
                            {post.category.title}
                        </span>
                    </p> */}
                        <button
                            type='button'
                            className='inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-sm hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700'
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
                    </div>
                </a>
            ))}
        </div>
    );
};

export default SaleFeatured;
