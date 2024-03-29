import React from 'react';

export default function SubMenuColumn({
    mainMenuItems,
    selectedId,
    startIndex,
    endIndex,
    classes,
}) {
    // const firstThree = mainMenuItems.slice(0, 3);
    // const lastThree = mainMenuItems.slice(-3, mainMenuItems.length);
    // const fromThirdToFifth = mainMenuItems.slice(2, 5);
    // console.log('firstThree', firstThree);
    // console.log('lastThree', lastThree);
    // console.log('fromThirdToFifth', fromThirdToFifth);
    return (
        <>
            {mainMenuItems.map((item) => (
                <div key={item.id}>
                    {item.id === selectedId && item.submenu ? (
                        <div className=''>
                            <div className='mb-5'>
                                <ul className='capitalize text-black '>
                                    {item.submenu
                                        .slice(startIndex, endIndex)
                                        .map((subItem) => (
                                            <div key={subItem.id}>
                                                <li
                                                    className={`my-2 ${classes}`}
                                                >
                                                    <a
                                                        href={subItem.href}
                                                        className='transition-all text-[0.938rem]  cursor-pointer font-semibold duration-300 hover:underline hover:text-black hover:font-bold block dark:hover:text-black'
                                                    >
                                                        {subItem.category}
                                                    </a>
                                                    <ul>
                                                        {subItem.subcategories ? (
                                                            <>
                                                                {subItem.subcategories.map(
                                                                    (
                                                                        subcat
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                subcat.id
                                                                            }
                                                                            className='my-2 '
                                                                        >
                                                                            <a
                                                                                href={
                                                                                    subcat.href
                                                                                }
                                                                                className='transition-all duration-300 text-sm text-gray-600 font-normal hover:underline  hover:text-gray-700  hover:font-semibold block dark:hover:text-black'
                                                                            >
                                                                                {
                                                                                    subcat.title
                                                                                }
                                                                            </a>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </>
                                                        ) : null}
                                                    </ul>
                                                </li>
                                            </div>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    ) : null}
                </div>
            ))}
        </>
    );
}
