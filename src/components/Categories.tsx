import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setCategoryIndex, setCurrentPage } from "./../redux/slices/filterSlice"
import { FC } from "react";

const Categories: FC = () => {
    const categories = ["все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
    const selectedIndex = useSelector(state => state.filter.categoryIndex);
    const dispatch = useDispatch();

    const handlerClick = (index: number) => {
        dispatch(setCategoryIndex(index));
        dispatch(setCurrentPage(1));
    }

    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) =>
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