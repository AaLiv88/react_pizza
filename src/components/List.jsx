import React, { useState } from 'react';

const List = ({ array,  }) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <>
            {array.map((item, index) =>
                <li
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={selectedIndex === index ? "active" : "none"}
                >
                    {item}
                </li>
            )}
        </>
    );
};

export default List;