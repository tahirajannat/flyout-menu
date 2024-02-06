import React, { useEffect, useState } from 'react';
// import Logo from '../assets/img/logo.png';
// import { subMenuItems } from '../../utility/data';

export default function MenuItems({ subMenuItems }) {
    return (
        <div className='col-span-3'>
            <div className='grid grid-cols-3 gap-8 flex-wrap'>
                <div className=''>
                    {subMenuItems.slice(0, 3).map((item) => (
                        <>
                            <div key={item.id} className=' border-r'>
                                <a
                                    href='#'
                                    className='flex items-center gap-2 font-semibold leading-tight tracking-wider text-base capitalize text-black mb-4 transition-all duration-300 hover:underline hover:text-black hover:font-bold   dark:hover:text-black'
                                >
                                    {item.category}
                                </a>
                                {/* Always render an empty ul for subcategories */}
                                <div className='mb-5'>
                                    <ul>
                                        {item.subcategories.map(
                                            (subcategory) => (
                                                <li
                                                    key={subcategory.title}
                                                    className='my-2'
                                                >
                                                    <a
                                                        href={subcategory.href}
                                                        className=' transition-all duration-300 hover:underline hover:text-black hover:font-semibold block  dark:hover:text-black'
                                                    >
                                                        {subcategory.title}
                                                    </a>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </>
                    ))}
                </div>

                <div className=''>
                    {subMenuItems.slice(3, 6).map((item) => (
                        <>
                            <div key={item.id} className=' border-r'>
                                <a
                                    href='#'
                                    className='flex items-center gap-2 font-semibold leading-tight tracking-wider text-base capitalize text-black mb-4 transition-all duration-300 hover:underline hover:text-black hover:font-bold   dark:hover:text-black'
                                >
                                    {item.category}
                                    {/* <span className='flex'>
                                        <HiOutlineArrowLongRight className='mt-0.5 text-xl' />
                                    </span> */}
                                </a>
                                {/* Always render an empty ul for subcategories */}
                                <div className='mb-5'>
                                    <ul>
                                        {item.subcategories.map(
                                            (subcategory) => (
                                                <li
                                                    key={subcategory.title}
                                                    className='my-2'
                                                >
                                                    <a
                                                        href={subcategory.href}
                                                        className=' transition-all duration-300 hover:underline hover:text-black hover:font-semibold block  dark:hover:text-black'
                                                    >
                                                        {subcategory.title}
                                                    </a>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <div className=''>
                    {subMenuItems.slice(6, 10).map((item) => (
                        <>
                            <div key={item.id} className=' border-r'>
                                <a
                                    href='#'
                                    className='flex items-center gap-2 font-semibold leading-tight tracking-wider text-base capitalize text-black mb-4 transition-all duration-300 hover:underline hover:text-black hover:font-bold   dark:hover:text-black'
                                >
                                    {item.category}
                                    {/* <span className='flex'>
                                        <HiOutlineArrowLongRight className='mt-0.5 text-xl' />
                                    </span> */}
                                </a>
                                {/* Always render an empty ul for subcategories */}
                                <div className='mb-5'>
                                    <ul>
                                        {item.subcategories.map(
                                            (subcategory) => (
                                                <li
                                                    key={subcategory.title}
                                                    className='my-2'
                                                >
                                                    <a
                                                        href={subcategory.href}
                                                        className=' transition-all duration-300 hover:underline hover:text-black hover:font-semibold block  dark:hover:text-black'
                                                    >
                                                        {subcategory.title}
                                                    </a>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                {/* <div className='basis-1/3'>
                    {cartItems.map((cat) => (
                        <div key={cat.id}>
                            <a
                                href='#'
                                className='flex items-center gap-2 font-semibold leading-tight tracking-tight capitalize text-black'
                            >
                                {cat.category}
                                <span className='flex'>
                                    <HiOutlineArrowLongRight className='mt-0.5 text-xl' />
                                </span>
                            </a>
                        </div>
                    ))}
                </div> */}
                {/* {filteredItems && <></>} */}
            </div>
        </div>
    );
}
