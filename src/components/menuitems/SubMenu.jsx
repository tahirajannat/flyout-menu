import React from 'react';
import MenuFeaturedProduct from './MenuFeaturedProduct';
import MenuItems from './MenuItems';

export default function SubMenu({
    isHovered,
    subMenuItems,
    onMouseEnter,
    onMouseLeave,
    classes,
    selectedId,
}) {
    return (
        <>
            <div
                className={`-mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10 ${
                    isHovered
                        ? 'visible transition-all duration-300'
                        : 'hidden transition-all duration-300'
                } ${classes}`}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div className='grid grid-cols-4  gap-4 max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-600 md:px-6'>
                    <MenuItems
                        mainMenuItems={subMenuItems}
                        selectedId={selectedId}
                    />
                    <MenuFeaturedProduct />
                </div>
            </div>
        </>
    );
}
