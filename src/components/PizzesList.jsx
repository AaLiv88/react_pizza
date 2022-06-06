import React from 'react';
import PizzaBlockLoader from "./PizzaBlock/PizzaBlockLoader";
import PizzaBlock from "./PizzaBlock/PizzaBlock";
import { useDispatch, useSelector } from "react-redux";
import usePizzes from "../hooks/usePizzes";

const PizzesList = () => {
    const filter = useSelector(state => state.filter);
    const [pizzes, isLoading, error] = usePizzes(filter);

    if (error) {
        alert("Произошла ошибка перезагрузите страницу");
        window.location.reload();
    }

    return (
        <>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(4)].map((_, index) => <PizzaBlockLoader key={index}/>)
                    : pizzes && pizzes.map(pizza => <PizzaBlock key={pizza.id} {...pizza}/>)
                }
            </div>
        </>
    );
};

export default PizzesList;