import { useEffect, useState } from 'react';
import Megamenu from './components/Megamenu';

function App() {
    const [filteredItems, setFilteredItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [subCategories, setSubCategories] = useState([]);

    const mainMenuItems = [
        {
            id: 1,
            title: 'Summer',
        },
        {
            id: 2,
            title: 'Falgun & Valentine',
            submenu: [
                {
                    id: 1,
                    category: 'Ethnic wear',
                    subcategories: [
                        {
                            title: 'Ethnic 1 Piece',
                            href: '#',
                        },
                        {
                            title: 'Ethnic Sets',
                            href: '#',
                        },
                        {
                            title: 'Semi-Formals',
                            href: '#',
                        },
                        {
                            title: 'Formals',
                            href: '#',
                        },
                    ],
                },
                // ... other submenu items
            ],
        },
        {
            id: 3,
            title: 'winter',
            submenu: [
                {
                    id: 1,
                    category: 'mukghol wear',
                    subcategories: [
                        {
                            title: 'mughol subedr',
                            href: '#',
                        },
                    ],
                },
                // ... other submenu items
            ],
        },
        // ... other main menu items
    ];

    useEffect(() => {
        const filteredItems = mainMenuItems.filter((item) => item.submenu);

        setCartItems(filteredItems);

        const filteredCategories = filteredItems.map((item) =>
            item.submenu
                .filter(
                    (subItem) =>
                        subItem.subcategories &&
                        subItem.subcategories.length > 0
                )
                .map((subItem) => subItem.category)
        );
        setFilteredItems(filteredCategories);

        const filteredSubcategories = filteredItems
            .map((item) =>
                item.submenu
                    .filter(
                        (subItem) =>
                            subItem.subcategories &&
                            subItem.subcategories.length > 0
                    )
                    .map((subItem) =>
                        subItem.subcategories.map(
                            (subcategory) => subcategory.title
                        )
                    )
            )
            .flat(2); // Use flat with depth 2 to flatten the array of arrays of arrays
        setSubCategories(filteredSubcategories);
    }, []);

    // Log filtered categories
    console.log('cartItems: ', cartItems);
    console.log('filteredItems', filteredItems);
    console.log('subCategories', subCategories);

    return (
        <>
            <Megamenu />
        </>
    );
}

export default App;
