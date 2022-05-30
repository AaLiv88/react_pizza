import React from 'react';
import cartEmptyImg from "./../asset/img/empty-cart.png";
import CartItem from "../components/CartItem";

const CartPage = () => {
    return (
        <div className="container">
            <div className="cart">
                <div className="cart__top">
                    <h2 className="content__title"><img src="./../asset/img/cart.svg" alt=""/> Корзина</h2>
                    <div className="cart__clear">
                        <img src="./../asset/img/grey-arrow-left.svg" alt=""/>
                        <span>Очистить корзину</span>
                    </div>
                </div>
                <div className="content__items">
                    <CartItem/>
                </div>
                <div className="cart__bottom">
                    <div className="cart__bottom-details">
                        <span> Всего пицц: <b>3 шт.</b> </span>
                        <span> Сумма заказа: <b>900 ₽</b> </span>
                    </div>
                    <div className="cart__bottom-buttons">
                        <a href="/" className="button button--outline button--add go-back-btn">
                            <img src="./../asset/img/grey-arrow-left.svg" alt=""/>
                            <span>Вернуться назад</span>
                        </a>
                        <div className="button pay-btn">
                            <span>Оплатить сейчас</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;