import React from 'react';
import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import PizzesPage from "./pages/PizzesPage";
import PizzaById from "./pages/PizzaById";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";


const App = () => {
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

export default App;
