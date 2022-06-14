import React, { FC, useState } from 'react';
import { pizzaTypeNames } from "../../../consts/pizzaTypeNames";
import { Link } from "react-router-dom";
import { IPizza } from "../../../types/IPizza";
import SelectorList from "../shared/SelectorList/SelectorList";
import AddBtn from "../shared/AddBtn/AddBtn";
import PizzaOptions from "../shared/PizzaOptions/PizzaOptions";

interface PizzaBlockProps {
    pizza: IPizza;
}

const PizzaBlock: FC<PizzaBlockProps> = ({ pizza }) => {
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    return (
        <div>
            <div className="pizza-block">
                <Link to={`/pizza/${pizza.id}/${activeType}/${activeSize}`}>
                    <img
                        className="pizza-block__image"
                        src={pizza.imageUrl}
                        alt="Pizza"
                    />
                </Link>
                <h4 className="pizza-block__title">{pizza.title}</h4>
                <PizzaOptions
                    pizza={pizza}
                    activeType={activeType}
                    activeSize={activeSize}
                    setActiveType={setActiveType}
                    setActiveSize={setActiveSize}
                />
            </div>
        </div>
    );
};

export default PizzaBlock;