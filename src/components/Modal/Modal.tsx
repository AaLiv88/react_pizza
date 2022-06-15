import React, { FC } from 'react';
import cl from "./Modal.module.scss";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useTypeDispatch } from "../../hooks/useTypeDispatch";
import { setActiveModal } from "../../redux/slices/modalSlice";

interface Modal {
    children: React.ReactNode;
}

const Modal: FC<Modal> = ({ children }) => {
    const { modal } = useTypeSelector(state => state.modal);
    const dispatch = useTypeDispatch();

    return (
        <div className={`${cl.background} ${modal ? cl.active : ""}`}>
            <div className={cl.content}>
                <button
                    className={cl.close}
                    onClick={() => dispatch(setActiveModal(null))}
                >
                    Закрыть
                </button>

                {children}
            </div>
        </div>
    );
};

export default Modal;