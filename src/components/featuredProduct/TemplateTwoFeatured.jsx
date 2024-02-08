import React from 'react';
import { mainMenuItems, recentPosts } from '../../utility/data';

export default function TemplateTwoFeatured({ classes, selectedId }) {
    const menuTitle = mainMenuItems.map(
        (item) => item.id == selectedId && item.title
    );
    return (
        <div className={`${classes}`}>
            {/* <div className='grid grid-cols-2'></div> */}
            <div className='col-span-2'>
                <h2 className=' font-semibold text-base capitalize text-black '>
                    {menuTitle}
                </h2>
            </div>
            {recentPosts.map((post) => (
                <div className='col-span-1 mx-auto'>
                    <img
                        className='rounded-sm h-36 object-cover'
                        src={post.imageUrl}
                        alt=''
                        srcset=''
                    />

                    <p className=' mt-3 font-normal text-xs capitalize text-black text-center'>
                        {post.title}
                    </p>
                </div>
            ))}
        </div>
    );
}
