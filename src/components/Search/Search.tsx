import React, { useCallback, useEffect, useRef, useState } from 'react';
import classes from "./Search.module.scss";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";

const Search = () => {
    const dispatch = useDispatch();
    const reduxSearchValue = useSelector(state => state.filter.searchValue);
    const [value, setValue] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    const updateSearch = useCallback(
        debounce((srt) => {
            dispatch(setSearchValue(srt));
        }, 1000), []
    );

    const onChangeSearch = (value: string) => {
        setValue(value);
        updateSearch(value);
    };

    const onClear = () => {
        onChangeSearch("");
        inputRef?.current?.focus();
    }

    useEffect(() => {
        setValue(reduxSearchValue);
    }, []);

    return (
        <div className="wrapper">
            <input
                ref={inputRef}
                value={value}
                onChange={e => onChangeSearch(e.target.value)}
                className={classes.root}
                type="text"
                placeholder="поиск пицц.."
            />
            {value &&
                <button
                    className={classes.btnClean}
                    onClick={onClear}
                >
                </button>
            }
        </div>
    );
};

export default Search;