import React, { useEffect, useRef } from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort/Sort";
import Pagination from "../components/Pagination/Pagination";
import PizzesList from "../components/PizzesList";
import qs from "qs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { setFilters } from "../redux/slices/filterSlice";

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