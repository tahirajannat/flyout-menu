import { useRef } from 'react';

const cats = [
    { name: 'Mr. Whiskers', color: 'black' },
    { name: 'Sassy', color: 'white' },
    { name: 'Smokey', color: 'gray' },
];

export default function GetMenuItems() {
    const handleMouseOver = (event) => {
        console.log(JSON.parse(event.target.dataset.info));
        console.log(JSON.parse(event.target.dataset.info));
    };
    const boxRef = useRef(null);

    const handleMouseEnter = () => {
        console.log(boxRef);
    };

    return (
        <>
            {cats.map((cat, i) => (
                <div
                    key={i}
                    data-info={JSON.stringify(cat.name)}
                    ref={boxRef}
                    style={{
                        width: 200,
                        height: 200,
                        backgroundColor: 'red',
                        margin: 8,
                        display: 'inline-block',
                    }}
                    onMouseOver={handleMouseOver}
                    onMouseEnter={handleMouseEnter}
                >
                    {cat.name}
                </div>
            ))}
        </>
    );
}
