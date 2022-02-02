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

function App() {
    return (
        <div className="app">
            <main className="app__home-page">
                <Header />
                <Slider/>
                <CardWrapper/>
                <Footer />
            </main>
        </div>
    );
}

export default App;
