import React, { FC } from 'react';
import PizzaBlockLoader from "./pizza/PizzaBlock/PizzaBlockLoader";
import PizzaBlock from "./pizza/PizzaBlock/PizzaBlock";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { pizzasApi } from "../redux/APIs/pizzaApi";
import usePizzasParams from "../hooks/usePizzasParams";
import { pizzasCategories } from "../consts/pizzasCategories";


const PizzasList: FC = () => {
    const filter = useTypeSelector(state => state.filter);
    const queryParams = usePizzasParams(filter);
    const { data: pizzas, error, isLoading } = pizzasApi.useGetFilteredPizzasQuery(queryParams);

    if (error) {
        alert("Произошла ошибка перезагрузите страницу");
        window.location.reload();
    }

    return (
        <>
            <h2 className="content__title">{pizzasCategories[filter.categoryIndex]} пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(4)].map((_, index) => <PizzaBlockLoader key={index}/>)
                    : pizzas && pizzas.map(pizza =>
                    <PizzaBlock key={pizza.id} pizza={pizza}/>
                )
                }
            </div>
        </>
    );
};

export default PizzasList;