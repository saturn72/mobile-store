export interface Product {
    id: String
    name: string;
    shortDescription: String;
    fullDescription: String;
    price: number;

    media: {
        cartImage: string;
        images: Array<MediaItem>;
        videos: Array<MediaItem>;
    };
};

export interface MediaItem {
    id: String;
    src: String;
    description: String;
    isPrimary: boolean,
    displayOrder: number
};

export interface CartItem {
    quantity: number,
    product: Product,
    updatedOnUtc: Date | number
};