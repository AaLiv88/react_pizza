import React, { FC } from 'react';
import cl from "./Modal.module.scss";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useTypeDispatch } from "../../hooks/useTypeDispatch";
import { setOpen } from "../../redux/slices/modalSlice";

interface Modal {
    children: React.ReactNode;
}

const Modal: FC<Modal> = ({ children }) => {
    const { isOpen } = useTypeSelector(state => state.modal);
    const dispatch = useTypeDispatch();

    return (
        <div className={`${cl.background} ${isOpen ? cl.active : ""}`}>
            <div className={cl.content}>
                <button
                    className={cl.close}
                    onClick={() => dispatch(setOpen())}
                >
                    Закрыть
                </button>

                {children}
            </div>
        </div>
    );
};

export default Modal;