import React from 'react';
import { mainMenuItems } from '../../utility/data';
import SubMenuColumn from '../menuitems/SubMenuColumn';
import SaleFeatured from './SaleFeatured';

export default function SaleTemplate({
    isHovered,
    onMouseEnter,
    onMouseLeave,
    classes,
    selectedId,
}) {
    return (
        <div
            // className='absolute mx-auto max-w-screen-xl'
            className={`-mt-1 absolute w-full bg-white border border-gray-200 rounded-md shadow-lg z-10 ${
                isHovered
                    ? 'visible transition-all duration-300'
                    : 'hidden transition-all duration-300'
            } ${classes}`}
        >
            <div
                className='w-full grid grid-cols-10 gap-8 max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-600 md:px-6'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div className='col-span-4'>
                    <div className='grid grid-cols-2 gap-8 pr-4'>
                        <div>
                            <SubMenuColumn
                                classes={'border-r'}
                                mainMenuItems={mainMenuItems}
                                selectedId={selectedId}
                                startIndex={0}
                                endIndex={1}
                            />
                        </div>
                        <div>
                            <SubMenuColumn
                                classes={' '}
                                mainMenuItems={mainMenuItems}
                                selectedId={selectedId}
                                startIndex={1}
                                endIndex={2}
                            />
                        </div>
                        {/* <SubmenuTemplateTwo
                            borderStyle={'border-l pl-8'}
                            mainMenuItems={mainMenuItems}
                            selectedId={9}
                            startIndex={0}
                            endIntex={3}
                        /> */}
                    </div>
                </div>
                <div className='col-span-6'>
                    <SaleFeatured
                        classes={'grid gap-6 grid-cols-3'}
                        // startIndex={0}
                        endIntex={3}
                    />
                </div>
            </div>
        </div>
    );
}
