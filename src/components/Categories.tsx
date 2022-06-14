import React from 'react';
import { setCategoryIndex, setCurrentPage } from "../redux/slices/filterSlice"
import { FC } from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useTypeDispatch } from "../hooks/useTypeDispatch";
import { pizzasCategories } from "../consts/pizzasCategories";

const Categories: FC = () => {
    const selectedIndex = useTypeSelector(state => state.filter.categoryIndex);
    const dispatch = useTypeDispatch();

    const handlerClick = (index: number): void => {
        dispatch(setCategoryIndex(index));
        dispatch(setCurrentPage(1));
    };

    return (
        <div className="categories">
            <ul>
                {pizzasCategories.map((category, index) =>
                    <li
                        key={index}
                        onClick={() => handlerClick(index)}
                        className={selectedIndex === index ? "active" : ""}
                    >
                        {category}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Categories;