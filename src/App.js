import React from 'react';
import './App.css';
import './reset.css';
import Slider from "./components/slider";
import CardWrapper from "./components/cardWrapper";
import Footer from "./components/footer";
import Logo from "./UIComponents/logo";
import Header from "./components/header";
import Modal from "./UIComponents/modal";
import ContentAddition from "./components/contentAddition";
import {Route, Routes} from "react-router-dom";
import Landing from "./components/landing";

function App() {
    return (
        <div className="app">
            <ContentAddition />
        </div>
    );
}

export default App;
