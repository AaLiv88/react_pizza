import React, { FC } from 'react';
import CartItem from "../components/Cart/CartItem";
import { clearCartList } from "../redux/slices/cartSlice";
import getCount from "../utils/getCount";
import EmptyCart from "../components/Cart/EmptyCart";
import { useTypeDispatch } from "../hooks/useTypeDispatch";
import { useTypeSelector } from "../hooks/useTypeSelector";

const CartPage: FC = () => {
    const dispatch = useTypeDispatch();
    const { cartList, totalPrice } = useTypeSelector(state => state.cart);
    const cartCount = getCount(cartList);

    if (!cartCount) {
        return <EmptyCart/>
    }

    return (
        <div className="cart">
            <div className="cart__top">
                <h2 className="content__title"><img src="./../assets/img/cart.svg" alt=""/> Корзина</h2>
                <div onClick={() => dispatch(clearCartList())} className="cart__clear">
                    <img src="./../assets/img/grey-arrow-left.svg" alt=""/>
                    <span>Очистить корзину</span>
                </div>
            </div>
            <div className="content__items">
                {cartList && cartList.map(pizza =>
                    <CartItem key={pizza.id + pizza.size} pizza={pizza}/>
                )}
            </div>
            <div className="cart__bottom">
                <div className="cart__bottom-details">
                    <span> Всего пицц: <b>{cartCount} шт.</b> </span>
                    <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
                </div>
                <div className="cart__bottom-buttons">
                    <a href="/" className="button button--outline button--add go-back-btn">
                        <img src="./../assets/img/grey-arrow-left.svg" alt=""/>
                        <span>Вернуться назад</span>
                    </a>
                    <div className="button pay-btn">
                        <span>Оплатить сейчас</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;