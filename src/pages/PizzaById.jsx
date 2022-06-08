import React from 'react';
import { useParams } from "react-router-dom";
import useRequest from "../hooks/useRequest";
import { MOCK_API_PIZZAS_URL } from "../consts/mockAPI";

const PizzaById = () => {
    const { id } = useParams()
    const [pizza, isLoading, error] = useRequest(MOCK_API_PIZZAS_URL + `/${String(id)}`);

    if (isLoading) {
        return <h1>загрузка</h1>
    }

    return (
        <div>
            {pizza && pizza.id}
        </div>
    );
};

export default PizzaById;