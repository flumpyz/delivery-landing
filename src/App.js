// import logo from './logo.svg';
import logo_sign from './images/logo-sign.svg';
import logo_text from './images/logo-text.svg';
import phone_icon from './images/phone.svg';
import './App.css';
import './reset.css';

function App() {
    return (
        <div className="app">
            <main className="home-page">
                <header className="header">
                    <div className="logo">
                        <img className="logo__logo-sign" src={logo_sign} alt="" />
                        <img className="logo__logo-text" src={logo_text} alt="" />
                    </div>
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
                </header>
                <div className="slider">slider</div>
            </main>
        </div>
    );
}

export default App;
