import React from 'react';

export default function MenuItems({ mainMenuItems, selectedId }) {
    // const [selectedId, setSelectedId] = useState([]);

    // const handleonChange = (event) => {
    //     event.preventDefault();
    //     let id = event.target.id;
    //     setSelectedId(id);
    // };
    // console.log(selectedId);
    return (
        <div className='col-span-3'>
            <div className='grid grid-cols-3 gap-8 flex-wrap'>
                {mainMenuItems.map((item) => (
                    <div key={item.id}>
                        {item.id === selectedId ? (
                            <div className='border-r'>
                                <h1 className='text-red-500'>{item.id}</h1>
                                <div className='mb-5'>
                                    <ul>
                                        {item.submenu.map((subItem) => (
                                            <li
                                                key={subItem.id}
                                                className='my-2'
                                            >
                                                <a
                                                    href={subItem.href}
                                                    className='transition-all font-bold duration-300 hover:underline hover:text-black hover:font-bold block dark:hover:text-black'
                                                >
                                                    {subItem.category}
                                                </a>
                                                <ul>
                                                    {subItem.subcategories ? (
                                                        <>
                                                            {subItem.subcategories.map(
                                                                (subcat) => (
                                                                    <li
                                                                        key={
                                                                            subcat.id
                                                                        }
                                                                        className='my-2'
                                                                    >
                                                                        <a
                                                                            href={
                                                                                subcat.href
                                                                            }
                                                                            className='transition-all duration-300 hover:underline hover:text-black hover:font-semibold block dark:hover:text-black'
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
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
}
