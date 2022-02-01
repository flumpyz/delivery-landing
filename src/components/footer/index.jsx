import React from 'react';
import cx from 'classnames';
import s from './style.module.css';
import Logo from "../../UIComponents/logo";
import links from "./links";

const Index = () => {
    return (
        <div className={cx(s.footer)}>
            <div className={cx(s.footerContainer)}>
                <div className={cx(s.logoContainer)}>
                    <Logo/>
                </div>
                <div className={cx(s.linksContainer)}>
                    {links.map((link) => (
                        <div className={cx(s.linkContainer)}>
                            <a href="#" className={cx(s.linkContainer__link)}>
                                {link.text}
                            </a>
                        </div>
                    ))}
                </div>
                <div className={cx(s.contactInfoContainer)}>
                    <p className={cx(s.contactInfoContainer__info)}>
                        manager@uexpress.ru
                    </p>
                    <p className={cx(s.contactInfoContainer__info)}>
                        115221, г. Челябинск,
                        ул. Северная, д. 29-в
                    </p>
                    <p className={cx(s.contactInfoContainer__info)}>
                        Мы работаем по 24 часа
                        5 дней в неделю
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Index;