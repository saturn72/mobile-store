export interface Category {
    id: string
    name: string;
    selected: boolean,
    shortDescription: string;
    fullDescription: string;
    priceRange: {
        minPrice: number;
        maxPrice: number;
    };
    categories: string[];
    media: {
        images: Array<MediaItem>;
        videos: Array<MediaItem>;
    };
};

export interface Product {
    id: string
    name: string;
    shortDescription: string;
    fullDescription: string;
    price: number;
    categories: string[];
    media: {
        cartImage: string;
        images: Array<MediaItem>;
        videos: Array<MediaItem>;
    };
};

export interface MediaItem {
    id: string;
    src: string;
    description: string;
    isPrimary: boolean,
    displayOrder: number
};

export interface CartItem {
    quantity: number,
    product: Product,
    updatedOnUtc: string | Date | number
};

export interface Cart {
    cartItems: CartItem[],
    phonePrefix: string,
    phoneNumber: string,
    comment: string
};

export interface Order {
    id: string | undefined | null,
    productRecords: Array<OrderProductRecord>,
    userId: string,
    createdOnUtc: string | Date | number
    phonePrefix: string,
    phoneNumber: string,
    comment: string,
    link: string | undefined | null
};

export interface OrderProductRecord {
    quantity: number,
    product: Product,
};

