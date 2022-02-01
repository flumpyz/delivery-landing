import React from 'react';
import cx from 'classnames';
import s from './style.module.css';
import logo_sign from "../../images/logo-sign.svg";
import logo_text from "../../images/logo-text.svg";

const Index = () => {
    return (
        <div className={cx(s.logo)}>
            <img className={cx(s.logo__logoSign)} src={logo_sign} alt=""/>
            <img className={cx(s.logo__logoText)} src={logo_text} alt=""/>
        </div>
    );
};

export default Index;