import React, { useState } from 'react';
import { mainMenuItems } from '../utility/data';
import MainMenuItems from './menuitems/MainMenuItems';
import SubMenu from './menuitems/SubMenu';

export default function Megamenu() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <nav className='bg-white'>
                <MainMenuItems
                    parentMenuItems={mainMenuItems}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                {isHovered && <SubMenu subMenuItems={mainMenuItems} />}
            </nav>
        </>
    );
}
