export interface ICartItem {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    // type: CartItemType;
    type: string;
    size: number;
    count: number;
}

// enum CartItemTypes {
//     traditional = "традиционное",
//     slim = "тонкое",
// }
//
// type CartItemType = CartItemTypes.traditional | CartItemTypes.slim