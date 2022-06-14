import { ICartItem } from "../types/ICartItem";

const getCountCartItem = (list: ICartItem[]): number => {
    return list.reduce((sum, pizza) => pizza.count + sum, 0);
}

export default getCountCartItem;