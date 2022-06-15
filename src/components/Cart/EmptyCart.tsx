import React, {FC} from 'react';
import emptyPng from "../../asset/img/empty-cart.png";

const EmptyCart: FC = () => {
    return (
        <div className="cart cart--empty">
            <h2>Корзина пустая <span>😕</span></h2>
            <p>
                Вероятней всего, вы не заказывали ещё пиццу.<br/>
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={emptyPng} alt="Empty cart"/>
            <div className="button button--black">
                <span>Вернуться назад</span>
            </div>
        </div>
    );
};

export default EmptyCart;