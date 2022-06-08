import React from 'react';
import plusImg from "./../asset/img/plus.svg";
import minusImg from "./../asset/img/minus.svg";
import trashImg from "./../asset/img/trash.svg";
import { useDispatch, useSelector } from "react-redux";
import { addCartList, decrementPizzas, removeFromCartList } from "../redux/slices/cartSlice";

const CartItem = ({ title, type, size, price, count, imageUrl, id }) => {
    const dispatch = useDispatch();

    function onIncrementPizzas() {
        dispatch(addCartList({ id, type, size }));
    }

    function onDecrementPizzas() {
        count <= 1 ? removePizza() : dispatch(decrementPizzas({ id, type, size }));
    }

    function removePizza() {
        dispatch(removeFromCartList({ id }));
    }

    return (
        <div className="cart__item">
            <div className="cart__item-img">
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                />
            </div>
            <div className="cart__item-info">
                <h3>{title}</h3>
                <p>{type}, {size} см.</p>
            </div>
            <div className="cart__item-count">
                <div onClick={onDecrementPizzas} className="button button--outline button--circle cart__item-count-minus">
                    <img src={minusImg} alt="минус"/>
                </div>
                <b>{count}</b>
                <div onClick={onIncrementPizzas} className="button button--outline button--circle cart__item-count-plus">
                    <img src={plusImg} alt="плюс"/>
                </div>
            </div>
            <div className="cart__item-price">
                <b>{price * count} ₽</b>
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