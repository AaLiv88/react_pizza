import React from 'react';
import "./scss/app.scss";
import Header from "./components/Header";
import PizzesPage from "./pages/PizzesPage";
import { Routes, Route } from "react-router-dom"
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<PizzesPage/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;
