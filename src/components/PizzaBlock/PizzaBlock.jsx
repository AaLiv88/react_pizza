import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addCartList } from "../../redux/slices/cartSlice";
import { pizzaTypeNames } from "../../consts/pizzaTypeNames";
import { Link } from "react-router-dom";

const PizzaBlock = ({ title, price, imageUrl, sizes, types, id }) => {
    const dispatch = useDispatch();
    const cartList = useSelector(state => state.cart.cartList);
    const cartItem = cartList.find(pizza => pizza.id === id);
    const totalCount = cartItem ? cartList.reduce((count, pizza) => pizza.id === id ? count + pizza.count : count + 0, 0) : 0;
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const onClickAdd = () => {
        const item = {
            id,
            title,
            price,
            imageUrl,
            type: pizzaTypeNames[activeType],
            size: sizes[activeSize],
        };
        dispatch(addCartList(item));
    }

    return (
        <div>
            <div className="pizza-block">
                <Link to={`/pizza/${id}`}>
                    <img
                        className="pizza-block__image"
                        src={imageUrl}
                        alt="Pizza"
                    />
                </Link>
                <h4 className="pizza-block__title">{ title }</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {types.map((typeIndex, index) =>
                            <li
                                key={typeIndex}
                                onClick={() => setActiveType(index)}
                                className={index === activeType ? "active" : ""}
                            >
                                {pizzaTypeNames[typeIndex]}
                            </li>
                        )}
                    </ul>
                    <ul>
                        {sizes.map((size, index) =>
                            <li
                                key={size}
                                onClick={() => setActiveSize(index)}
                                className={index === activeSize ? "active" : ""}
                            >
                                {size} см.
                            </li>
                        )}
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от {price} ₽</div>
                    <div onClick={onClickAdd} className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        {cartItem && <i>{totalCount}</i>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PizzaBlock;