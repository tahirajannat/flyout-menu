import React from 'react';
// import { womenCategories } from '../../utility/data';
import MenuFeaturedProduct from './MenuFeaturedProduct';
import MenuItems from './MenuItems';

export default function SubMenu({ isHovered = true, subMenuItems }) {
    return (
        <>
            <div
                className={`${
                    isHovered ? 'block' : 'hidden'
                } absolute top-20 left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10`}
            >
                <div className='grid grid-cols-4  gap-4 max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-600 md:px-6'>
                    <MenuItems mainMenuItems={subMenuItems} />

                    <MenuFeaturedProduct />
                </div>
            </div>
        </>
    );
}
