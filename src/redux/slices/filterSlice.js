import { createSlice } from '@reduxjs/toolkit'
import qs from "qs"

const getInitialState = () => {
    if (!window.location.search) {
        return {
            categoryIndex: 0,
            sortIndex: 0,
            currentPage: 1,
            searchValue: "",
        };
    }

    const params = qs.parse(window.location.search.substring(1));
    return {
        categoryIndex: +params.categoryIndex,
        sortIndex: +params.sortIndex,
        currentPage: +params.currentPage,
        searchValue: params.searchValue,
    };
}

const initialState = getInitialState();

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryIndex(state, action) {
            state.categoryIndex = action.payload;
        },
        setSortMethIndex(state, action) {
            state.sortIndex = action.payload;
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
    },
});

export const { setCategoryIndex, setSortMethIndex, setSearchValue, setCurrentPage } = filterSlice.actions;
export default filterSlice.reducer