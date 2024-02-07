import React, { useState } from 'react';
import Logo from '../../assets/img/logo.png';

export default function MainMenuItems({
    parentMenuItems,
    onMouseEnter,
    onMouseLeave,
    onclick,
    hoveredMainMenuItem,
    menuItemStyle,
}) {
    const [selectedId, setSelectedId] = useState();

    const handleonChange = (event) => {
        event.preventDefault();
        let id = event.target.id;
        setSelectedId(id);
    };

    return (
        <div className='border-gray-200 border-b'>
            <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl  '>
                <a
                    href='https://flowbite.com'
                    className='flex items-center space-x-3 rtl:space-x-reverse'
                >
                    <img src={Logo} className='h-12' alt='Flowbite Logo' />
                </a>
                <button
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
                        {parentMenuItems.map((item) => (
                            <li key={item.id} onMouseEnter={handleonChange}>
                                {item.submenu ? (
                                    <button
                                        // key={item.title}
                                        className={`flex items-center justify-between w-full py-2 px-3  text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:px-0  md:py-6 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700 font-medium transition-all duration-300 hover:font-semibold ${
                                            hoveredMainMenuItem === item.id
                                                ? 'hidden'
                                                : ''
                                        } ${menuItemStyle}`}
                                        onClick={() => onclick(item.id)}
                                        onMouseEnter={() =>
                                            onMouseEnter(item.id)
                                        }
                                        onMouseLeave={() =>
                                            onMouseLeave(item.id)
                                        }
                                    >
                                        {item.title}
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
                                ) : (
                                    // Render regular button

                                    <button
                                        // key={item.title}
                                        className={`flex items-center justify-between w-full py-2 px-3  text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:px-0  md:py-6 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700 font-medium transition-all duration-300 hover:font-semibold ${menuItemStyle}`}
                                        onClick={onclick}
                                    >
                                        {item.title}
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
