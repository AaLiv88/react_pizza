import React, { useCallback, useEffect, useRef, useState } from 'react';
import classes from "./Search.module.scss";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";

const Search = () => {
    const reduxSearchValue = useSelector(state => state.filter.searchValue);
    const [value, setValue] = useState("");
    const inputRef = useRef();
    const dispatch = useDispatch();

    const updateSearch = useCallback(
        debounce((srt) => {
            dispatch(setSearchValue(srt));
        }, 1000), []
    );

    const onChangeSearch = value => {
        setValue(value);
        updateSearch(value);
    };

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
                    onClick={() => onChangeSearch("")}
                >
                </button>
            }
        </div>
    );
};

export default Search;