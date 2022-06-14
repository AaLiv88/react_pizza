import React, { FC } from 'react';
import cl from "./SelectorList.module.scss"

interface SelectorListProps {
    arr: string[];
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

const SelectorList: FC<SelectorListProps> = ({ arr, activeIndex, setActiveIndex }) => {
    return (
        <ul>
            {arr.map((item, index) =>
                <li
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={index === activeIndex ? cl.active : ""}
                >
                    {item}
                </li>
            )}
        </ul>
    );
};

export default SelectorList;