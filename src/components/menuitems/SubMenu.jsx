import React, { useEffect, useState } from 'react';
// import { womenCategories } from '../../utility/data';
import MenuFeaturedProduct from './MenuFeaturedProduct';
import MenuItems from './MenuItems';

export default function SubMenu({ isHovered = false, subMenuItems }) {
    // const [filteredItems, setFilteredItems] = useState([]);
    // const [cartItems, setCartItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    // const subMenuItems = [
    //     {
    //         id: 1,
    //         title: 'Summer',
    //     },
    //     {
    //         id: 2,
    //         title: 'Falgun & Valentine',
    //         submenu: [
    //             {
    //                 id: 1,
    //                 category: 'Ethnic wear',
    //                 subcategories: [
    //                     {
    //                         title: 'Ethnic 1 Piece',
    //                         href: '#',
    //                     },
    //                     {
    //                         title: 'Ethnic Sets',
    //                         href: '#',
    //                     },
    //                     {
    //                         title: 'Semi-Formals',
    //                         href: '#',
    //                     },
    //                     {
    //                         title: 'Formals',
    //                         href: '#',
    //                     },
    //                 ],
    //             },
    //             // ... other submenu items
    //         ],
    //     },
    //     // ... other main menu items
    // ];

    // useEffect(() => {
    //     const filteredItems = subMenuItems.filter(
    //         (item) =>
    //             !(
    //                 item.submenu &&
    //                 item.submenu.length > 0 &&
    //                 item.submenu.some(
    //                     (subItem) =>
    //                         subItem.subcategories &&
    //                         subItem.subcategories.length > 0
    //                 )
    //             )
    //     );

    //     setCartItems(filteredItems);

    //     const filteredCategories = filteredItems.map((item) => item.title);
    //     setFilteredItems('filteredCategories: ' + filteredCategories);
    // }, []);

    // Log filtered categories
    // console.log(filteredItems);

    useEffect(() => {
        const filteredItems = subMenuItems.filter((item) => item.submenu);

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
                    .map((subItem) =>
                        subItem.subcategories.map(
                            (subcategory) => subcategory.title
                        )
                    )
            )
            .flat(2); // Use flat with depth 2 to flatten the array of arrays of arrays
        setSubCategories(filteredSubcategories);
    }, []);

    // Log filtered categories
    console.log('cartItems: ', cartItems);
    console.log('filteredItems', filteredItems);
    console.log('subCategories', subCategories);

    return (
        <>
            {isHovered && (
                <div className='mt-1 bg-white  border-gray-200 shadow-sm border-b '>
                    <div className='grid grid-cols-4  gap-4 max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-600 md:px-6'>
                        <MenuItems subMenuItems={subMenuItems} />

                        <MenuFeaturedProduct />
                    </div>
                </div>
            )}
        </>
    );
}
