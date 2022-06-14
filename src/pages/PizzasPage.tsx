import React, { FC } from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort/Sort";
import Pagination from "../components/Pagination/Pagination";
import PizzasList from "../components/PizzasList";


const PizzasPage: FC = () => {
    return (
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <PizzasList/>
            <Pagination/>
        </>
    );
};

export default PizzasPage;