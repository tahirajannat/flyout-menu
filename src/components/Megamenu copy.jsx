import React from 'react';
// import Logo from '../assets/img/logo.png';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import Logo from '../assets/img/logo7.png';
import { recentPosts, womenCategories } from '../utility/data';

export default function Megamenu() {
    return (
        <>
            <nav className='bg-white border-gray-200 '>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4'>
                    <a
                        href='https://flowbite.com'
                        className='flex items-center space-x-3 rtl:space-x-reverse'
                    >
                        <img src={Logo} className='h-12' alt='Flowbite Logo' />
                        {/* <span className='self-center text-2xl font-semibold whitespace-nowrap '>
                            Flowbite
                        </span> */}
                    </a>
                    <button
                        // data-collapse-toggle='mega-menu-full-image'
                        type='button'
                        className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                        aria-controls='mega-menu-full-image'
                        aria-expanded='false'
                    >
                        <span className='sr-only'>Open main menu</span>
                        <svg
                            className='w-5 h-5'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 17 14'
                        >
                            <path
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M1 1h15M1 7h15M1 13h15'
                            />
                        </svg>
                    </button>
                    <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'>
                        <ul className='flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse'>
                            <li>
                                <a
                                    href='#'
                                    className='block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
                                    aria-current='page'
                                >
                                    Men
                                </a>
                            </li>
                            <li>
                                <button
                                    id='mega-menu-full-cta-image-button'
                                    data-collapse-toggle='mega-menu-full-image-dropdown'
                                    className='flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
                                >
                                    Women{' '}
                                    <svg
                                        className='w-2.5 h-2.5 ms-3'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 10 6'
                                    >
                                        <path
                                            stroke='currentColor'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='m1 1 4 4 4-4'
                                        />
                                    </svg>
                                </button>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
                                >
                                    Marketplace
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
                                >
                                    Resources
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    id='mega-menu-full-image-dropdown'
                    className='mt-1 bg-white border-gray-200 shadow-sm border-y '
                >
                    <div className='grid gap-4 max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-600 md:grid-cols-4 md:px-6'>
                        <div className='col-span-3 flex gap-4 justify-between flex-wrap'>
                            {womenCategories.map((item) => (
                                <div key={item.id} className='min-content'>
                                    <a
                                        href='#'
                                        className='max-w-xl flex items-center gap-2 mb-5 font-semibold leading-tight tracking-tight capitalize text-black'
                                    >
                                        {item.category}
                                        <span className=''>
                                            <HiOutlineArrowLongRight className='mt-0.5 text-xl' />
                                        </span>
                                    </a>
                                    {item.subcategories.length > 0 && (
                                        <ul
                                            className='hidden mb-4 space-y-4 md:mb-0 md:block h-auto'
                                            aria-labelledby='mega-menu-full-image-button'
                                        >
                                            {item.subcategories.map(
                                                (category) => (
                                                    <li className='flex'>
                                                        <a
                                                            href='#'
                                                            className='hover:underline hover:text-blue-600 block dark:hover:text-blue-500'
                                                        >
                                                            {category.title}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* <ul className='mb-4 space-y-4 md:mb-0'>
                            <li>
                                <a
                                    href='#'
                                    className='hover:underline hover:text-blue-600 dark:hover:text-blue-500'
                                >
                                    Our Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='hover:underline hover:text-blue-600 dark:hover:text-blue-500'
                                >
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='hover:underline hover:text-blue-600 dark:hover:text-blue-500'
                                >
                                    License
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='hover:underline hover:text-blue-600 dark:hover:text-blue-500'
                                >
                                    Resources
                                </a>
                            </li>
                        </ul> */}
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

                        {/* <a
                            href='#'
                            className='p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken bg-url()]'
                            style={{ backgroundImage: `url(${MenuImg})` }}
                        >
                            <p className='max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white'>
                                Preview the new Flowbite dashboard navigation.
                            </p>
                            <button
                                type='button'
                                className='inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700'
                            >
                                Get started
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
                        </a> */}
                        {/* // */}
                    </div>
                </div>
            </nav>
        </>
    );
}
