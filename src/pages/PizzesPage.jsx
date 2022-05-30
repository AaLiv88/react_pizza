import React from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlockLoader from "../components/PizzaBlock/PizzaBlockLoader";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import { useEffect, useState } from "react";

const PizzesPage = () => {
    const [pizzes, setPizzes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://626d16545267c14d5677d9c2.mockapi.io/items")
            .then((response) => {
                return response.json();
            })
            .then((pizzes) => {
                setIsLoading(false)
                setPizzes(pizzes);
            })
            .catch(e => {
                console.log(e);
            })
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <PizzaBlockLoader key={index}/>)
                    : pizzes.map(pizza => <PizzaBlock key={pizza.id} {...pizza}/>)
                }
            </div>
        </div>
    );
};

export default PizzesPage;