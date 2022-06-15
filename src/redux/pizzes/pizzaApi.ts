import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MOCK_API_PIZZAS_URL } from "../../consts/mockAPI";
import { IPizza } from "../../types/IPizza";
import { PizzaQueryParams } from "../../hooks/usePizzasParams";

export const pizzasApi = createApi({
    reducerPath: 'pizzasApi',
    baseQuery: fetchBaseQuery({ baseUrl: MOCK_API_PIZZAS_URL }),
    endpoints: (builder) => ({
        getFilteredPizzas: builder.query<IPizza[], PizzaQueryParams>({
            query: (params: PizzaQueryParams) => ({
                url: "",
                params,
            }),
        }),
        getPizzaById: builder.query<IPizza, string>({
            query: (id: string) => ({
                url: `/${id}`,
            }),
        }),
    }),
})