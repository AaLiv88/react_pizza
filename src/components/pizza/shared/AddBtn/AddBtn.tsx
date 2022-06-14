import React, { FC } from 'react';
import BtnAddIcon from "../../../svg/btnAddIcon";
import { ICartItem } from "../../../../types/ICartItem";
import { pizzaTypeNames } from "../../../../consts/pizzaTypeNames";
import { addCartList } from "../../../../redux/slices/cartSlice";
import { IPizza } from "../../../../types/IPizza";
import { useTypeDispatch } from "../../../../hooks/useTypeDispatch";
import { useTypeSelector } from "../../../../hooks/useTypeSelector";
import cl from "./AddBtn.module.scss";

interface AddBtnProps {
    pizza: IPizza;
    activeType: number;
    activeSize: number;
}

const AddBtn: FC<AddBtnProps> = ({ pizza, activeType, activeSize }) => {
    const dispatch = useTypeDispatch();
    const cartList = useTypeSelector(state => state.cart.cartList);
    const cartItem = cartList.find(cartItem => cartItem.id === pizza.id);
    const totalCount = cartItem ? cartList.reduce((count, cartItem) => cartItem.id === pizza.id ? count + cartItem.count : count + 0, 0) : 0;

    const onClickAdd = () => {
        const item: ICartItem = {
            id: pizza.id,
            title: pizza.title,
            price: pizza.price,
            imageUrl: pizza.imageUrl,
            type: pizzaTypeNames[activeType],
            size: pizza.sizes[activeSize] as number,
            count: 1,
        };
        dispatch(addCartList(item));
    }

    return (
        <div onClick={onClickAdd} className={`button button--outline ${cl.buttonAdd}`}>
            <BtnAddIcon/>
            <span>Добавить</span>
            {cartItem && <i>{totalCount}</i>}
        </div>
    );
};

export default AddBtn;