import React, { useEffect, useState } from 'react';
import { mainMenuItems } from '../utility/data';
import MainMenuItems from './menuitems/MainMenuItems';
import SubMenu from './menuitems/SubMenu';
import SaleTemplate from './templates/SaleTemplate';

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
    };

    const handleMouseLeave = () => {
        setHoveredMainMenuItem(false);
    };
    const [selectedId, setSelectedId] = useState();

    const handleMouseOver = (event) => {
        setSelectedId(JSON.parse(event.target.dataset.info));
        // console.log(JSON.parse(event.target.dataset.info));
    };

    // console.log('selectedId', selectedId);

    return (
        <>
            <nav className='bg-white'>
                <MainMenuItems
                    menuItemStyle={'capitalize'}
                    parentMenuItems={mainMenuItems}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onMouseOver={handleMouseOver}
                    selectedId={selectedId}
                    hoveredMainMenuItem={
                        mainMenuItems.length > 0 ? mainMenuItems[0].id : null
                    }
                />

                {hoveredMainMenuItem && (
                    <>
                        {selectedId == 4 ? (
                            <SubMenu
                                classes={'transition-all duration-300'}
                                subMenuItems={mainMenuItems}
                                isHovered={isSubMenuVisible}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                selectedId={selectedId}
                            />
                        ) : (
                            <SaleTemplate isHovered={isSubMenuVisible} />
                        )}
                    </>
                )}
            </nav>
        </>
    );
}
