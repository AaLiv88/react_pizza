import React from 'react';
import { Route, Routes } from "react-router-dom";
import PizzesPage from "../pages/PizzesPage";
import PizzaById from "../pages/PizzaById";
import CartPage from "../pages/CartPage";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../layouts/MainLayout";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="/" element={<PizzesPage/>}/>
                <Route path="/pizza/:id" element={<PizzaById/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;