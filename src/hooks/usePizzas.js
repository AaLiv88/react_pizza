import sortMethods from "../consts/sortMethods";
import useRequest from "./useRequest";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import qs from "qs";
import { useState } from "react";
import { MOCK_API_PIZZAS_URL } from "../consts/mockAPI";

const usePizzas = (filter) => {
    const sortBy = sortMethods[filter.sortIndex].type.replace('-', '');
    const order = sortMethods[filter.sortIndex].type.includes('-') ? 'asc' : 'desc';
    const category = filter.categoryIndex !== 0 ? filter.categoryIndex : "";
    const title = filter.searchValue;
    const page = filter.currentPage;

    const navigate = useNavigate();
    const [isFirstRender, setIsFirstRender] = useState(true);

    const [pizzes, isLoading, error] = useRequest(
        MOCK_API_PIZZAS_URL,
        { sortBy, order, category, title, page, limit: 4 },
        filter
    );

    useEffect(() => {
        if (!isFirstRender) {
            const queryString = qs.stringify({
                ...filter
            });
            navigate(`?${queryString}`);
        }
        setIsFirstRender(false);
    }, [filter]);

    return [pizzes, isLoading, error];
}

export default usePizzas;