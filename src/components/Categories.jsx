import React, { useState } from 'react';
import List from "./List";

const Categories = () => {
    const categories = ["все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
    // const [selectedCategory, setSelectedCategory] = useState(0);

    return (
        <div className="categories">
            <ul>
                {/*{categories.map((category, index) =>*/}
                {/*    <li*/}
                {/*        key={index}*/}
                {/*        onClick={() => setSelectedCategory(index)}*/}
                {/*        className={selectedCategory === index ? "active" : "none"}*/}
                {/*    >*/}
                {/*        {category}*/}
                {/*    </li>*/}
                {/*)}*/}
                <List array={categories}/>
            </ul>
        </div>
    );
};

export default Categories;