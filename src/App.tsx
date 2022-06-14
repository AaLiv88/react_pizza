import React from 'react';
import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import PizzasPage from "./pages/PizzasPage";
import PizzaByIdPage from "./pages/PizzaByIdPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";


const App = () => {

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

export default App;
