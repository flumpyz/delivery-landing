import React, {useState} from 'react';
import cx from 'classnames';
import s from './style.module.css';
import Header from "../header";
import Slider from "../slider";
import CardWrapper from "../cardWrapper";
import Footer from "../footer";
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
            <main className={cx(s.app__homePage)}>
                <Header onModalOpen={openModal}/>
                <Slider />
            </main>
            <CardWrapper />
            <Footer />

            <Modal isOpened={opened} onModalClose={closeModal}/>
        </div>
    );
};

export default Index;