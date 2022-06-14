import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import qs from "qs"

export interface FilterState {
    categoryIndex: number;
    sortIndex: number;
    currentPage: number;
    searchValue: string;
}

const getInitialState = (): FilterState => {
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
        categoryIndex: Number(params.categoryIndex),
        sortIndex: Number(params.sortIndex),
        currentPage: Number(params.currentPage),
        searchValue: String(params.searchValue),
    };
}

const initialState = getInitialState();

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryIndex(state: FilterState, action: PayloadAction<number>) {
            state.categoryIndex = action.payload;
        },
        setSortMethIndex(state: FilterState, action: PayloadAction<number>) {
            state.sortIndex = action.payload;
        },
        setSearchValue(state: FilterState, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setCurrentPage(state: FilterState, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
    },
});

export const { setCategoryIndex, setSortMethIndex, setSearchValue, setCurrentPage } = filterSlice.actions;
export default filterSlice.reducer