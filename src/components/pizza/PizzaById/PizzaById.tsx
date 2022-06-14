import React, { FC, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { pizzasApi } from "../../../redux/APIs/pizzaApi";
import cl from "./PizzaById.module.scss";
import SelectorList from "../shared/SelectorList/SelectorList";
import { pizzaTypeNames } from "../../../consts/pizzaTypeNames";
import AddBtn from "../shared/AddBtn/AddBtn";
import PizzaOptions from "../shared/PizzaOptions/PizzaOptions";

const PizzaById: FC = () => {
    const { id, type, size } = useParams();
    const x = useParams()
    console.log(x);
    const { data: pizza, error, isLoading } = pizzasApi.useGetPizzaByIdQuery(id ? id : "-");

    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    useEffect(() => {
        setActiveSize(Number(size));
        setActiveType(Number(type));
    }, []);

    return pizza ? (
        <div className={cl.root}>
            <img
                src={pizza.imageUrl}
                alt="пицца"
                className={cl.image}
            />
            <span className={cl.options}>

                <h1 className={cl.title}>{pizza.title}</h1>

                <p className={cl.info}>
                    Информация о пицце
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Aspernatur delectus ea harum ipsa libero quibusdam
                    repellat unde voluptates. Aliquid distinctio dolorum
                    ipsa perferendis. Ea ipsum natus sunt, ut veritatis
                    voluptatibus.
                </p>

                <PizzaOptions
                    pizza={pizza}
                    activeType={activeType}
                    activeSize={activeSize}
                    setActiveType={setActiveType}
                    setActiveSize={setActiveSize}
                />
            </span>
        </div>
    )
    :
    (
        <h1>Ничего не найдено</h1>
    )
};

export default PizzaById;