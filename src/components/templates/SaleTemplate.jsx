import React from 'react';
import { mainMenuItems } from '../../utility/data';
import SubMenuColumn from '../menuitems/SubMenuColumn';
import SaleFeatured from './SaleFeatured';

export default function SaleTemplate() {
    return (
        <div className='mx-auto max-w-screen-xl'>
            <div className='w-full grid grid-cols-12'>
                <div className='col-span-7'>
                    <div className='grid grid-cols-2 pr-4'>
                        <div>
                            <SubMenuColumn
                                classes={'border-r'}
                                mainMenuItems={mainMenuItems}
                                selectedId={9}
                                startIndex={0}
                                endIntex={1}
                            />
                        </div>
                        <div>
                            <SubMenuColumn
                                classes={'border-r pl-8'}
                                mainMenuItems={mainMenuItems}
                                selectedId={9}
                                startIndex={1}
                                endIntex={2}
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
                <div className='col-span-5'>
                    <SaleFeatured
                    // classes={' grid grid-cols-2'}
                    // startIndex={0}
                    // endIndex={2}
                    />
                </div>
            </div>
        </div>
    );
}
