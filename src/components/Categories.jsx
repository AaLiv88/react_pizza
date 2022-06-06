import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setCategoryIndex, setCurrentPage } from "./../redux/slices/filterSlice"

const Categories = () => {
    const categories = ["все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
    const selectedIndex = useSelector(state => state.filter.categoryIndex);
    const dispatch = useDispatch();

    const handlerClick = (index) => {
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