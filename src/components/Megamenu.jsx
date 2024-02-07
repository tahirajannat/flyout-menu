import React, { useEffect, useState } from 'react';
import { mainMenuItems } from '../utility/data';
import MainMenuItems from './menuitems/MainMenuItems';
import SubMenu from './menuitems/SubMenu';

export default function Megamenu() {
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
        handleOnChange();
    };

    const handleMouseLeave = () => {
        setHoveredMainMenuItem(false);
    };
    const [selectedId, setSelectedId] = useState();

    const handleOnChange = (event) => {
        event.preventDefault();
        let id = event.target.id;
        setSelectedId(id);
    };

    console.log('selectedId', selectedId);

    return (
        <>
            <nav className='bg-white'>
                <MainMenuItems
                    menuItemStyle={'capitalize'}
                    parentMenuItems={mainMenuItems}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onChange={handleOnChange}
                    selectedId={selectedId}
                    hoveredMainMenuItem={
                        mainMenuItems.length > 0 ? mainMenuItems[0].id : null
                    }
                />

                {hoveredMainMenuItem && (
                    <SubMenu
                        classes={'transition-all duration-300'}
                        subMenuItems={mainMenuItems}
                        isHovered={isSubMenuVisible}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onChange={handleOnChange}
                    />
                )}
            </nav>
        </>
    );
}
