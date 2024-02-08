import React from 'react';
import SubMenuColumn from './SubMenuColumn';

export default function MenuItems({ mainMenuItems, selectedId }) {
    // const [selectedId, setSelectedId] = useState([]);

    // const handleonChange = (event) => {
    //     event.preventDefault();
    //     let id = event.target.id;
    //     setSelectedId(id);
    // };
    // console.log(selectedId);
    return (
        <div className='col-span-3'>
            <div className='grid grid-cols-2 gap-8 flex-wrap'>
                <div>
                    <SubMenuColumn
                        classes={'border-r'}
                        mainMenuItems={mainMenuItems}
                        selectedId={selectedId}
                        startIndex={0}
                        endIndex={5}
                    />
                </div>
                <div>
                    <SubMenuColumn
                        classes={'border-r'}
                        mainMenuItems={mainMenuItems}
                        selectedId={selectedId}
                        startIndex={5}
                        endIndex={10}
                    />
                </div>
                {/* <div>
                    <SubMenuColumn
                        mainMenuItems={mainMenuItems}
                        selectedId={selectedId}
                        startIndex={6}
                        endIntex={10}
                    />
                </div> */}
            </div>
        </div>
    );
}
