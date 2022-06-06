import sortMethods from "../components/Sort/sortMethods";
import useRequest from "./useRequest";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import qs from "qs";
import { useState } from "react";


const usePizzes = (filter) => {
    const sortBy = sortMethods[filter.sortIndex].type.replace('-', '');
    const order = sortMethods[filter.sortIndex].type.includes('-') ? 'asc' : 'desc';
    const category = filter.categoryIndex !== 0 ? filter.categoryIndex : "";
    const title = filter.searchValue;
    const page = filter.currentPage;

    const navigate = useNavigate();
    const [isFirstRender, setIsFirstRender] = useState(true);

    const getPizzesPromise = () => {
        return axios.get("https://6294eeb9a7203b3ed07431ae.mockapi.io/pizzes", {
            params: {
                category,
                title,
                page,
                limit: 4,
                sortBy,
                order,
            }
        });
    }
    const [pizzes, isLoading, error] = useRequest(getPizzesPromise, filter);

    useEffect(() => {
        if (!isFirstRender) {
            const queryString = qs.stringify({
                categoryIndex: filter.categoryIndex,
                sortIndex: filter.sortIndex,
                currentPage: filter.currentPage,
                searchValue: filter.searchValue,
            });
            navigate(`?${queryString}`);
        }
        setIsFirstRender(false);
    }, [filter]);

    return [pizzes, isLoading, error];
}

export default usePizzes;