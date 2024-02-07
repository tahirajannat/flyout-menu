import React, { useEffect, useRef, useState } from 'react';
// ... other imports
import { mainMenuItems } from '../utility/data';
import MainMenuItems from './menuitems/MainMenuItems';
import SubMenu from './menuitems/SubMenu';

export default function Megamenu() {
    const [hoveredMainMenuItem, setHoveredMainMenuItem] = useState(false);
    const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
    const [active, setActive] = useState(false);
    const resetTimeoutRef = useRef(null);

    // useEffect(() => {
    //     return () => {
    //         if (resetTimeoutRef.current) {
    //             clearTimeout(resetTimeoutRef.current);
    //         }
    //     };
    // }, []);

    // const handleMouseEnter = () => {
    //     clearTimeout(resetTimeoutRef.current);
    //     setHoveredMainMenuItem(true);
    // };

    // const handleMouseLeave = () => {
    //     clearTimeout(resetTimeoutRef.current);
    //     resetTimeoutRef.current = setTimeout(() => {
    //         setHoveredMainMenuItem(false);
    //         if (isSubMenuVisible) {
    //             setHoveredMainMenuItem(true);
    //         }
    //     }, 500); // Adjust the delay time as needed
    // };
    // const handleSubMenuMouseEnter = () => {
    //     clearTimeout(resetTimeoutRef.current);
    //     if (hoveredMainMenuItem) {
    //         setIsSubMenuVisible(true);
    //     }
    //     clearTimeout(resetTimeoutRef.current);
    // };

    // const handleSubMenuMouseLeave = () => {
    //     clearTimeout(resetTimeoutRef.current);
    //     resetTimeoutRef.current = setTimeout(() => {
    //         setHoveredMainMenuItem(false);
    //         setIsSubMenuVisible(false);
    //         if (hoveredMainMenuItem) {
    //             setHoveredMainMenuItem(false);
    //             setHoveredMainMenuItem(false);
    //         }
    //     });
    // };
    useEffect(() => {
        setActive(hoveredMainMenuItem);
        handleSubMenuMouseEnter();
        handleSubMenuMouseLeave();
    }, [active]);

    const handleMouseEnter = () => {
        setHoveredMainMenuItem(true);
    };
    const handleMouseLeave = () => {
        setHoveredMainMenuItem(false);
    };
    const handleSubMenuMouseEnter = () => {
        if (!active) {
            setHoveredMainMenuItem(true);
            setIsSubMenuVisible(true);
        }
    };
    const handleSubMenuMouseLeave = () => {
        if (!active) {
            setHoveredMainMenuItem(false);
            setIsSubMenuVisible(false);
        }
    };
    console.log(active);
    return (
        <>
            <nav className='bg-white'>
                {/* <MainMenuItems
                    parentMenuItems={mainMenuItems}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    hoveredMainMenuItem={hoveredMainMenuItem}
                />
                {hoveredMainMenuItem ? (
                    <SubMenu
                        classes={'transition-all duration-300'}
                        subMenuItems={mainMenuItems}
                        isHovered={hoveredMainMenuItem}
                        onMouseEnter={handleSubMenuMouseEnter}
                        onMouseLeave={handleSubMenuMouseLeave}
                    />
                ) : isSubMenuVisible ? (
                    <SubMenu
                        subMenuItems={mainMenuItems}
                        isHovered={isSubMenuVisible}
                        // isHovered={hoveredMainMenuItem}
                        onMouseEnter={handleSubMenuMouseEnter}
                        onMouseLeave={handleSubMenuMouseLeave}
                    />
                ) : (
                    !hoveredMainMenuItem && null
                )} */}
                <MainMenuItems
                    parentMenuItems={mainMenuItems}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    hoveredMainMenuItem={hoveredMainMenuItem}
                />
                {hoveredMainMenuItem && (
                    <SubMenu
                        classes={'transition-all duration-300'}
                        subMenuItems={mainMenuItems}
                        isHovered={active}
                        onMouseEnter={handleSubMenuMouseEnter}
                        onMouseLeave={handleSubMenuMouseLeave}
                    />
                )}
            </nav>
        </>
    );
}
