import React from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort/Sort";
import Pagination from "../components/Pagination/Pagination";
import PizzesList from "../components/PizzesList";

const PizzesPage = () => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <PizzesList/>
            <Pagination/>
        </div>
    );
};

export default PizzesPage;