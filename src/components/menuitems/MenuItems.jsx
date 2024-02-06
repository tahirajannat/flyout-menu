import React, { useEffect, useState } from 'react';

export default function MenuItems({ mainMenuItems }) {
    const [cartItems, setCartItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [subCategories, setSubCategories] = useState([]);

    useEffect(() => {
        const filteredItems = mainMenuItems.filter((item) => item.submenu);

        setCartItems(filteredItems);

        const filteredCategories = filteredItems.map((item) =>
            item.submenu
                .filter(
                    (subItem) =>
                        subItem.subcategories &&
                        subItem.subcategories.length > 0
                )
                .map((subItem) => subItem.category)
        );
        setFilteredItems(filteredCategories);

        const filteredSubcategories = filteredItems
            .map((item) =>
                item.submenu
                    .filter(
                        (subItem) =>
                            subItem.subcategories &&
                            subItem.subcategories.length > 0
                    )
                    .map((subItem) => subItem.subcategories)
            )
            .flat(1);

        setSubCategories(filteredSubcategories);
    }, [mainMenuItems]);
    // console.log(cartItems);
    // console.log(subCategories);

    return (
        <div className='col-span-3'>
            <div className='grid grid-cols-3 gap-8 flex-wrap'>
                <div>
                    {cartItems.map((item) => (
                        <>
                            {item.submenu.slice(0, 3).map((subItem) => (
                                <div key={subItem.id} className='border-r'>
                                    <a
                                        href='#'
                                        className='flex items-center gap-2 font-semibold leading-tight tracking-wider text-base capitalize text-black mb-4 transition-all duration-300 hover:underline hover:text-black hover:font-bold   dark:hover:text-black'
                                    >
                                        {subItem.category}
                                    </a>
                                    <div className='mb-5'>
                                        <ul>
                                            {subItem.subcategories.map(
                                                (subcategory) => (
                                                    <li
                                                        key={subcategory.id}
                                                        className='my-2'
                                                    >
                                                        <a
                                                            href={
                                                                subcategory.href
                                                            }
                                                            className='transition-all duration-300 hover:underline hover:text-black hover:font-semibold block dark:hover:text-black'
                                                        >
                                                            {subcategory.title}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </>
                    ))}
                </div>
                <div>
                    {cartItems.map((item) => (
                        <>
                            {item.submenu.slice(3, 6).map((subItem) => (
                                <div key={subItem.id} className='border-r'>
                                    <a
                                        href='#'
                                        className='flex items-center gap-2 font-semibold leading-tight tracking-wider text-base capitalize text-black mb-4 transition-all duration-300 hover:underline hover:text-black hover:font-bold   dark:hover:text-black'
                                    >
                                        {subItem.category}
                                    </a>
                                    <div className='mb-5'>
                                        <ul>
                                            {subItem.subcategories.map(
                                                (subcategory) => (
                                                    <li
                                                        key={subcategory.id}
                                                        className='my-2'
                                                    >
                                                        <a
                                                            href={
                                                                subcategory.href
                                                            }
                                                            className='transition-all duration-300 hover:underline hover:text-black hover:font-semibold block dark:hover:text-black'
                                                        >
                                                            {subcategory.title}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </>
                    ))}
                </div>
                <div>
                    {cartItems.map((item) => (
                        <>
                            {item.submenu.slice(6, 10).map((subItem) => (
                                <div key={subItem.id} className='border-r'>
                                    <a
                                        href='#'
                                        className='flex items-center gap-2 font-semibold leading-tight tracking-wider text-base capitalize text-black mb-4 transition-all duration-300 hover:underline hover:text-black hover:font-bold   dark:hover:text-black'
                                    >
                                        {subItem.category}
                                    </a>
                                    <div className='mb-5'>
                                        <ul>
                                            {subItem.subcategories.map(
                                                (subcategory) => (
                                                    <li
                                                        key={subcategory.id}
                                                        className='my-2'
                                                    >
                                                        <a
                                                            href={
                                                                subcategory.href
                                                            }
                                                            className='transition-all duration-300 hover:underline hover:text-black hover:font-semibold block dark:hover:text-black'
                                                        >
                                                            {subcategory.title}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}
