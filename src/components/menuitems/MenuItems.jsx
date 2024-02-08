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
            <div className='grid grid-cols-3 gap-8 flex-wrap'>
                <div>
                    <SubMenuColumn
                        classes={'border-r'}
                        mainMenuItems={mainMenuItems}
                        selectedId={selectedId}
                        startIndex={0}
                        endIntex={3}
                    />
                </div>
                <div>
                    <SubMenuColumn
                        classes={'border-r'}
                        mainMenuItems={mainMenuItems}
                        selectedId={selectedId}
                        startIndex={3}
                        endIntex={6}
                    />
                </div>
                <div>
                    <SubMenuColumn
                        mainMenuItems={mainMenuItems}
                        selectedId={selectedId}
                        startIndex={6}
                        endIntex={10}
                    />
                </div>
            </div>
        </div>
    );
}
