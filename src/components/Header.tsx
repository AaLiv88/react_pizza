import React from 'react';
import logo from "../asset/img/pizza-logo.svg";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search/Search";
import GoCartBtn from "./GoCartBtn";

const Header = () => {
    const { pathname } = useLocation();

    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <img width="38" src={logo} alt="Pizza logo"/>
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </Link>
                {pathname !== "/cart" &&
                    <>
                        <Search/>
                        <GoCartBtn/>
                    </>
                }
            </div>
        </div>
    );
};

export default Header;