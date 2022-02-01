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

function App() {
    return (
        <div className="app">
            <main className="app__home-page">
                <header className="header">
                    <div className="container">
                        <div className="header__container">
                            <Logo />
                            <div className="vertical-line">
                            </div>
                            <div className="company-name">
                                <p className="company-name__title">Курьерская служба доставки</p>
                            </div>
                            <div className="contact-number">
                                <img className="contact-number__icon" src={phone_icon} alt=""/>
                                <p className="contact-number__number">8 (909) 023-12-51</p>
                            </div>
                            <div className="login">
                                <button className="login__button">
                                    Вход
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                <Slider/>
                <CardWrapper/>
                <Footer />
            </main>
        </div>
    );
}

export default App;
