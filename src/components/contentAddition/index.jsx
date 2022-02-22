import React, {useState} from 'react';
import cx from 'classnames';
import s from './style.module.css';
import Header from "../header";
import Footer from "../footer";
import AddArea from "./addArea";
import Modal from "../../UIComponents/modal";

const Index = () => {
    const [opened, setOpened] = useState(false);

    const setOpenedHandler = (value) => {
        setOpened(value);
    };

    const openModal = () => {
        setOpenedHandler(true);
    };

    const closeModal = () => {
        setOpenedHandler(false);
    };

    return (
        <div>
            <div className={cx(s.contentAdditionContainer__header)}>
                <Header onModalOpen={openModal}/>
            </div>
            <AddArea />
            <Footer />

            <Modal isOpened={opened} onModalClose={closeModal}/>
        </div>
    );
};

export default Index;