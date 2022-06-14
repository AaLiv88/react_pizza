import React, { FC, useState } from 'react';
import SelectorList from "../SelectorList/SelectorList";
import { pizzaTypeNames } from "../../../../consts/pizzaTypeNames";
import AddBtn from "../AddBtn/AddBtn";
import { IPizza } from "../../../../types/IPizza";
import cl from "./PizzaOptions.module.scss";

interface PizzaOptionsProps {
    pizza: IPizza;
    setActiveType: (index: number) => void;
    setActiveSize: (index: number) => void;
    activeType: number;
    activeSize: number;
}

const PizzaOptions: FC<PizzaOptionsProps> = ({ pizza, setActiveType, setActiveSize, activeType, activeSize }) => {
    return (
        <div>
            <div className={cl.selector}>
                <SelectorList
                    arr={pizzaTypeNames}
                    activeIndex={activeType}
                    setActiveIndex={setActiveType}
                />
                <SelectorList
                    arr={(pizza.sizes).map(size => size += " см.")}
                    activeIndex={activeSize}
                    setActiveIndex={setActiveSize}
                />
            </div>
            <div className={cl.bottom}>
                <div className={cl.price}>от {pizza.price} ₽</div>
                <AddBtn pizza={pizza} activeType={activeType} activeSize={activeSize}/>
            </div>
        </div>
    );
};

export default PizzaOptions;