import React from 'react';
import cx from 'classnames';
import s from './style.module.css';
import Logo from "../../UIComponents/logo";
import phone_icon from "../../images/phone.svg";

const Index = () => {
    return (
        <header className={cx(s.header)}>
            <div className={cx(s.container)}>
                <div className={cx(s.headerContainer)}>
                    <Logo />
                    <div className={cx(s.verticalLine)}>
                    </div>
                    <div className={cx(s.companyName)}>
                        <p className={cx(s.companyName__title)}>Курьерская служба доставки</p>
                    </div>
                    <div className={cx(s.contactNumber)}>
                        <img className={cx(s.contactNumber__icon)} src={phone_icon} alt=""/>
                        <p className={cx(s.contactNumber__number)}>8 (909) 023-12-51</p>
                    </div>
                    <div className={cx(s.login)}>
                        <button className={cx(s.login__button)}>
                            Вход
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Index;