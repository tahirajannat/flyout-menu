import React, { useEffect, useState } from 'react';
// import Logo from '../assets/img/logo.png';
import { mainMenuItems, womenCategories } from '../utility/data';
import MainMenuItems from './menuitems/MainMenuItems';
import SubMenu from './menuitems/SubMenu';

export default function Megamenu() {
    const [filteredItems, setFilteredItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const filteredItems = womenCategories.filter(
            (item) => item.subcategories.length == 0
        );
        setCartItems(filteredItems);
        const filteredCategories = womenCategories
            .filter((item) => item.subcategories.length == 0)
            .map((item) => item.category);

        setFilteredItems(filteredCategories);
    }, [womenCategories]);

    // Log filtered categories
    // console.log(filteredItems);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <>
            <nav className='bg-white '>
                <MainMenuItems
                    parentMenuItems={mainMenuItems}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                <SubMenu isHovered={isHovered} subMenuItems={mainMenuItems} />
            </nav>
        </>
    );
}
