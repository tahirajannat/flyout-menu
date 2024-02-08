import React, { useEffect, useState } from 'react';
import { mainMenuItems } from '../../utility/data';
import MenuFeaturedProduct from '../menuitems/MenuFeaturedProduct';
import SubmenuTemplateTwo from './SubmenuTemplateTwo';

export default function TemplateTwo() {
    const [hoveredMainMenuItem, setHoveredMainMenuItem] = useState(false);
    const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

    useEffect(() => {
        if (hoveredMainMenuItem) {
            setIsSubMenuVisible(true);
        } else {
            const timeout = setTimeout(() => {
                setIsSubMenuVisible(false);
            }, 3000); // Adjust the delay time for the animation
            return () => clearTimeout(timeout);
        }
    }, [hoveredMainMenuItem]);

    const handleMouseEnter = () => {
        setHoveredMainMenuItem(true);
    };

    const handleMouseLeave = () => {
        setHoveredMainMenuItem(false);
    };
    const [selectedId, setSelectedId] = useState();

    const handleMouseOver = (event) => {
        setSelectedId(JSON.parse(event.target.dataset.info));
        // console.log(JSON.parse(event.target.dataset.info));
    };
    return (
        <div className='mx-auto max-w-screen-xl'>
            <div className='w-full grid grid-cols-12'>
                <div className='col-span-6'>
                    <MenuFeaturedProduct
                        classes={' grid grid-cols-2'}
                        startIndex={0}
                        endIndex={2}
                    />
                </div>
                <div className='col-span-6'>
                    <div className='grid grid-cols-2 pr-4'>
                        <SubmenuTemplateTwo
                            mainMenuItems={mainMenuItems}
                            selectedId={5}
                            startIndex={0}
                            endIntex={3}
                        />
                        <SubmenuTemplateTwo
                            borderStyle={'border-l pl-8'}
                            mainMenuItems={mainMenuItems}
                            selectedId={5}
                            startIndex={0}
                            endIntex={3}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
