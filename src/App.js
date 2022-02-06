// import logo from './logo.svg';
import logo_sign from './images/logo-sign.svg';
import logo_text from './images/logo-text.svg';
import phone_icon from './images/phone.svg';
import car_img from './images/car.png';
import contract_img from './images/contract.png';
import {useState} from "react";
import './App.css';
import './reset.css';
import Slider from "./components/slider";
import CardWrapper from "./components/cardWrapper";
import Footer from "./components/footer";
import Logo from "./UIComponents/logo";
import Header from "./components/header";
import Modal from "./UIComponents/modal";

function App() {
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
        <div className="app">
            <main className="app__home-page">
                <Header onModalOpen={openModal}/>
                <Slider />
            </main>
            <CardWrapper />
            <Footer />

            <Modal isOpened={opened} onModalClose={closeModal}/>
        </div>
    );
}

export default App;
