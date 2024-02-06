import WomenDenim from '../assets/img/women-1.jpeg';
export const mainMenuItems = [
    {
        id: 1,
        title: 'Summer',
    },
    {
        id: 2,
        title: 'Falgun & Valentine',
    },
    {
        id: 3,
        title: 'winter',
    },
    {
        id: 4,
        title: 'Women',
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

            {
                id: 2,
                category: 'Pants',
                subcategories: [
                    {
                        title: 'Jeans',
                        href: '#',
                    },
                    {
                        title: 'Twill Pants',
                        href: '#',
                    },
                    {
                        title: 'Palazzo',
                        href: '#',
                    },
                    {
                        title: 'Plain Bottoms',
                        href: '#',
                    },
                    {
                        title: 'Embroidered Bottoms',
                        href: '#',
                    },
                    {
                        title: 'Leggings',
                        href: '#',
                    },
                ],
            },
            {
                id: 8,
                category: 'personal care',
                subcategories: [],
            },

            {
                id: 3,
                category: ' western & fusion',
                subcategories: [
                    {
                        title: 'Women’s Shirt',
                        href: '#',
                    },
                    {
                        title: 'Tops & T-Shirts',
                        href: '#',
                    },
                    {
                        title: 'Gown',
                        href: '#',
                    },
                    {
                        title: 'Jump Suit',
                        href: '#',
                    },
                    {
                        title: 'Shrug',
                        href: '#',
                    },
                ],
            },
            {
                id: 7,
                category: 'abaya',
                subcategories: [],
            },
            {
                id: 4,
                category: 'footwear',
                subcategories: [
                    {
                        title: 'Jutties',
                        href: '#',
                    },
                    {
                        title: 'Mules',
                        href: '#',
                    },
                    {
                        title: 'Sandals',
                        href: '#',
                    },
                    {
                        title: 'Slippers',
                        href: '#',
                    },
                ],
            },
            {
                id: 5,
                category: 'accessories',
                subcategories: [
                    {
                        title: 'Scarfs/Dupatta',
                        href: '#',
                    },
                    {
                        title: 'Hand Bag',
                        href: '#',
                    },
                    {
                        title: 'Earring',
                        href: '#',
                    },

                    {
                        title: 'Necklace',
                        href: '#',
                    },
                    {
                        title: ' Finger Ring',
                        href: '#',
                    },
                    {
                        title: 'Hair Clip',
                        href: '#',
                    },
                    {
                        title: 'Bangles',
                        href: '#',
                    },
                    {
                        title: 'Socks',
                        href: '#',
                    },
                ],
            },
            {
                id: 6,
                category: 'saree',
                subcategories: [],
            },
        ],
    },
    {
        id: 5,
        title: 'men',
        submenu: [],
    },

    {
        id: 6,
        title: 'teen',
    },
    {
        id: 7,
        title: 'kids',
    },
    {
        id: 8,
        title: 'Home Decor',
    },
];
export const recentPosts = [
    {
        id: 1,
        title: "Women's Ethnic Denim Jacket",
        href: '#',
        date: 'Mar 16, 2023',
        price: 199,
        sellPrice: 149,
        datetime: '2023-03-16',
        category: { title: 'clothing', href: '#' },
        imageUrl: WomenDenim,
        description:
            'Et et dolore officia quis nostrud esse aute cillum irure do esse. Eiusmod ad deserunt cupidatat est magna Lorem.',
    },
    // {
    //     id: 2,
    //     title: "Women's classic Heels - Lemon",
    //     href: '#',
    //     date: 'Mar 10, 2023',
    //     datetime: '2023-03-10',
    //     category: { title: 'footwear', href: '#' },
    //     imageUrl: WomenHeels, // Corrected the path here
    //     description:
    //         'Optio cum necessitatibus dolor voluptatum provident commodi et.',
    // },
];
export const womenCategories = [
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

    {
        id: 2,
        category: 'Pants',
        subcategories: [
            {
                title: 'Jeans',
                href: '#',
            },
            {
                title: 'Twill Pants',
                href: '#',
            },
            {
                title: 'Palazzo',
                href: '#',
            },
            {
                title: 'Plain Bottoms',
                href: '#',
            },
            {
                title: 'Embroidered Bottoms',
                href: '#',
            },
            {
                title: 'Leggings',
                href: '#',
            },
        ],
    },
    {
        id: 8,
        category: 'personal care',
        subcategories: [],
    },

    {
        id: 3,
        category: ' western & fusion',
        subcategories: [
            {
                title: 'Women’s Shirt',
                href: '#',
            },
            {
                title: 'Tops & T-Shirts',
                href: '#',
            },
            {
                title: 'Gown',
                href: '#',
            },
            {
                title: 'Jump Suit',
                href: '#',
            },
            {
                title: 'Shrug',
                href: '#',
            },
        ],
    },
    {
        id: 7,
        category: 'abaya',
        subcategories: [],
    },
    {
        id: 4,
        category: 'footwear',
        subcategories: [
            {
                title: 'Jutties',
                href: '#',
            },
            {
                title: 'Mules',
                href: '#',
            },
            {
                title: 'Sandals',
                href: '#',
            },
            {
                title: 'Slippers',
                href: '#',
            },
        ],
    },
    {
        id: 5,
        category: 'accessories',
        subcategories: [
            {
                title: 'Scarfs/Dupatta',
                href: '#',
            },
            {
                title: 'Hand Bag',
                href: '#',
            },
            {
                title: 'Earring',
                href: '#',
            },

            {
                title: 'Necklace',
                href: '#',
            },
            {
                title: ' Finger Ring',
                href: '#',
            },
            {
                title: 'Hair Clip',
                href: '#',
            },
            {
                title: 'Bangles',
                href: '#',
            },
            {
                title: 'Socks',
                href: '#',
            },
        ],
    },
    {
        id: 6,
        category: 'saree',
        subcategories: [],
    },
];
