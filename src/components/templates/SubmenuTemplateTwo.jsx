import React from 'react';

export default function SubmenuTemplateTwo({
    mainMenuItems,
    selectedId,
    startIndex,
    endIntex,
    classes,
    borderStyle,
}) {
    return (
        <div className={classes}>
            {mainMenuItems.map((item) => (
                <div key={item.id}>
                    {item.id === selectedId ? (
                        <div className=''>
                            <div className='mb-5'>
                                <ul className='capitalize text-black '>
                                    {item.submenu
                                        .slice(startIndex, endIntex)
                                        .map((subItem) => (
                                            <>
                                                <li
                                                    key={subItem.id}
                                                    className={`my-2 ${borderStyle}`}
                                                >
                                                    <a
                                                        href={subItem.href}
                                                        className='transition-all text-[0.938rem]  cursor-pointer font-semibold duration-300 hover:underline hover:text-black hover:font-bold block dark:hover:text-black'
                                                    >
                                                        {subItem.category}
                                                    </a>
                                                    {/* <ul>
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
                                                    </ul> */}
                                                </li>
                                            </>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    );
}
