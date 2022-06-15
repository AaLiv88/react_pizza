import React from 'react';
import { Route, Routes } from "react-router-dom";
import PizzasPage from "../pages/PizzasPage";
import PizzaByIdPage from "../pages/PizzaByIdPage";
import CartPage from "../pages/CartPage";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../layouts/MainLayout";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="/" element={<PizzasPage/>}/>
                <Route path="/pizza/:id/:type/:size" element={<PizzaByIdPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;