import React from 'react';
import { recentPosts } from '../../utility/data';

export default function SaleFeatured({ classes, startIndex, endIntex }) {
    return (
        <div className={classes}>
            {/* <div className='grid grid-cols-2'></div> */}
            {recentPosts.slice(startIndex, endIntex).map((post) => (
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
                            Upto 60% Off
                        </p>

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
}
