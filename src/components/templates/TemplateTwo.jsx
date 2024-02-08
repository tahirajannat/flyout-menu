import React from 'react';
import { mainMenuItems } from '../../utility/data';
import TemplateTwoFeatured from '../featuredProduct/TemplateTwoFeatured';
import SubMenuColumn from '../menuitems/SubMenuColumn';

export default function TemplateTwo({
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
                    : 'visible transition-all duration-300'
            } ${classes}`}
        >
            <div
                className='w-full grid grid-cols-12 gap-8 max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-600 md:px-6'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div className='col-span-3 '>
                    {/* {mainMenuItems.map((item) => (
                        <h2 key={item.id}>
                            {item.id == selectedId && item.title}
                        </h2>
                    ))} */}

                    <TemplateTwoFeatured
                        classes={'grid grid-cols-2 gap-4 grid-flow-row'}
                        selectedId={selectedId}
                        startIndex={0}
                        endIndex={2}
                    />
                </div>
                <div className='col-span-9'>
                    <div className='grid grid-cols-3 gap-8 pr-4'>
                        <div>
                            <SubMenuColumn
                                classes={'border-x pl-8'}
                                mainMenuItems={mainMenuItems}
                                selectedId={selectedId}
                                startIndex={0}
                                endIndex={3}
                            />
                        </div>
                        <div>
                            <SubMenuColumn
                                classes={'border-r'}
                                mainMenuItems={mainMenuItems}
                                selectedId={selectedId}
                                startIndex={3}
                                endIndex={6}
                            />
                        </div>
                        <div>
                            <SubMenuColumn
                                mainMenuItems={mainMenuItems}
                                selectedId={selectedId}
                                startIndex={6}
                                endIndex={10}
                            />
                        </div>
                        {/* <SubmenuTemplateTwo
                            borderStyle={'border-l pl-8'}
                            mainMenuItems={mainMenuItems}
                            selectedId={9}
                            startIndex={0}
                            endIndex={3}
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
