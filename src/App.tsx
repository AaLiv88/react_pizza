import React from 'react';
import "./scss/app.scss";
import AppRouter from "./components/AppRouter";
import { useTypeSelector } from "./hooks/useTypeSelector";
import LoginModal from "./components/Modal/LoginModal/LoginModal";
import BtnOpenModal from "./components/Modal/BtnOpenModal";


const App = () => {
    const { modal } = useTypeSelector(state => state.modal)

    return (
        <div>
            <BtnOpenModal modal={<LoginModal/>}>
                <button>Войти</button>
            </BtnOpenModal>

            {modal && modal}

            <AppRouter/>
        </div>
    );
};

export default App;
