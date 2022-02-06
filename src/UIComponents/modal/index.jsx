import React from 'react';
import {useState} from "react";
import cx from 'classnames';
import s from './style.module.css';
import CloseButton from "../closeButton";

const Index = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const setLoginHandler = (event) => {
        setLogin(event.target.value);
    }

    const setPasswordHandler = (event) => {
        setPassword(event.target.value);
    }

    return (
        <div>
            <div className={cx(s.modalWrapper, props.isOpened ? s.modalWrapper_opened : s.modalWrapper_closed)} onClick={props.onModalClose}>
            </div>
            <div className={cx(s.modalContainer, props.isOpened ? s.modalWrapper_opened : s.modalWrapper_closed)}>
                <div className={cx(s.closeButtonContainer)}>
                    <div className={cx(s.closeButtonContainer__closeButton)} onClick={props.onModalClose}>
                        <CloseButton />
                    </div>
                </div>
                <div className={cx(s.loginContainer)}>
                    <h1 className={cx(s.loginContainer__title)}>
                        Авторизация
                    </h1>
                    <p className={cx(s.loginContainer__description)}>
                        Введите логин и пароль, чтобы войти в личный кабинет
                    </p>
                    <form className={cx(s.loginFormContainer)}>
                        <input className={cx(s.loginFormContainer__input, s.loginFormContainer__input_first)} value={login} onChange={setLoginHandler} placeholder={"Логин"}/>
                        <input className={cx(s.loginFormContainer__input, s.loginFormContainer__input_second)} value={password} onChange={setPasswordHandler} placeholder={"Пароль"}/>
                        <input className={cx(s.loginFormContainer__submit)} type={"submit"} value={"Войти"}/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Index;