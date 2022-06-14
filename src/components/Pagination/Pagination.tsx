import React from 'react';
import { setCurrentPage } from "../../redux/slices/filterSlice";
import cl from "./Pagionation.module.scss";
import {useTypeDispatch} from "../../hooks/useTypeDispatch";
import {useTypeSelector} from "../../hooks/useTypeSelector";

const Pagination = () => {
    const currentPage = useTypeSelector(state => state.filter.currentPage);
    const dispatch = useTypeDispatch();
    const totalPages = 3;

    return (
        <div className={cl.root}>
            <button
                disabled={currentPage === 1}
                aria-label="вперед"
                className={cl.btn}
                onClick={() => dispatch(setCurrentPage(currentPage - 1))}
            >
                <svg className={cl.btn__backIcon} width="18" height="9" viewBox="0 0 10 6" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"/>
                </svg>
            </button>

            {[...new Array(totalPages)].map((_, index) =>
                <button
                    key={index}
                    className={`${cl.btn} ${currentPage === index + 1 ? cl.active : ""}`}
                    onClick={() => dispatch(setCurrentPage(index + 1))}
                >
                    {index + 1}
                </button>
            )}

            <button
                disabled={currentPage === totalPages}
                aria-label="назад"
                className={cl.btn}
                onClick={() => dispatch(setCurrentPage(currentPage + 1))}
            >
                <svg className={cl.btn__nextIcon} width="18" height="9" viewBox="0 0 10 6" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"/>
                </svg>
            </button>
        </div>
    );
};

export default Pagination;