import React, { FC } from 'react';
import plusImg from "../../asset/img/plus.svg";
import minusImg from "../../asset/img/minus.svg";
import trashImg from "../../asset/img/trash.svg";
import { useDispatch } from "react-redux";
import { addCartList, decrementPizzas, removeFromCartList } from "../../redux/slices/cartSlice";
import { ICartItem } from "../../types/ICartItem";
import { useTypeSelector } from "../../hooks/useTypeSelector";

interface CartItemProps {
    pizza: ICartItem;
}

const CartItem: FC<CartItemProps> = ({ pizza }) => {
    const dispatch = useDispatch();

    function onIncrementPizzas() {
        dispatch(addCartList(pizza));
    }

    function onDecrementPizzas() {
        pizza.count <= 1 ? removePizza() : dispatch(decrementPizzas(pizza));
    }

    function removePizza() {
        dispatch(removeFromCartList(pizza));
    }

    return (
        <div className="cart__item">
            <div className="cart__item-img">
                <img
                    className="pizza-block__image"
                    src={pizza.imageUrl}
                    alt="Pizza"
                />
            </div>
            <div className="cart__item-info">
                <h3>{pizza.title}</h3>
                <p>{pizza.type}, {pizza.size} см.</p>
            </div>
            <div className="cart__item-count">
                <div onClick={onDecrementPizzas} className="button button--outline button--circle cart__item-count-minus">
                    <img src={minusImg} alt="минус"/>
                </div>
                <b>{pizza.count}</b>
                <div onClick={onIncrementPizzas} className="button button--outline button--circle cart__item-count-plus">
                    <img src={plusImg} alt="плюс"/>
                </div>
            </div>
            <div className="cart__item-price">
                <b>{pizza.price * pizza.count} ₽</b>
            </div>
            <div onClick={removePizza} className="cart__item-remove">
                <div className="button button--outline button--circle">
                    <img src={trashImg} alt="удалить"/>
                </div>
            </div>
        </div>
    );
};

export default CartItem;