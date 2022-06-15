import React, { FC } from 'react';
import { useTypeDispatch } from "../../hooks/useTypeDispatch";
import { setActiveModal } from "../../redux/slices/modalSlice";

interface BtnOpenModalProps {
    modal: JSX.Element;
    children: React.ReactNode;
}

const BtnOpenModal: FC<BtnOpenModalProps> = ({ modal, children }) => {
    const dispatch = useTypeDispatch();

    return (
        <div
            onClick={() => dispatch(setActiveModal(modal))}
        >
            {children}
        </div>
    );
};

export default BtnOpenModal;