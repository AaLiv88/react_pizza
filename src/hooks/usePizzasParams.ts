import sortMethods from "../consts/sortMethods";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import qs from "qs";
import { FilterState } from "../redux/slices/filterSlice";

export interface PizzaQueryParams {
    sortBy: string;
    order: string;
    category: number | string;
    title: string;
    page: number;
    limit: number;
}

const usePizzas = (filter: FilterState): PizzaQueryParams => {
    const sortBy = sortMethods[filter.sortIndex].type.replace('-', '');
    const order = sortMethods[filter.sortIndex].type.includes('-') ? 'asc' : 'desc';
    const category = filter.categoryIndex !== 0 ? filter.categoryIndex : "";
    const title = filter.searchValue;
    const page = filter.currentPage;
    const limit = 4;

    const navigate = useNavigate();
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        if (!isFirstRender) {
            const queryString = qs.stringify({
                ...filter
            });
            navigate(`?${queryString}`);
        }
        setIsFirstRender(false);
    }, [filter]);

    return { sortBy, order, category, title, page, limit }
}

export default usePizzas;