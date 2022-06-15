import React from 'react';
import "./scss/app.scss";
import AppRouter from "./components/AppRouter";
import { useTypeDispatch } from "./hooks/useTypeDispatch";
import { setOpen } from "./redux/slices/modalSlice";
import { useTypeSelector } from "./hooks/useTypeSelector";
import LoginModal from "./components/Modal/LoginModal/LoginModal";


const App = () => {
    const dispatch = useTypeDispatch();
    const { isOpen: loginIsOpen } = useTypeSelector(state => state.modal);

    return (
        <div>
            <button
                onClick={() => dispatch(setOpen())}
            >
                Войти
            </button>
            <LoginModal/>

            <AppRouter/>
        </div>
    );
};

export default App;
