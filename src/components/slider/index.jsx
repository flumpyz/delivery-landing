import React, { useState } from 'react';
import cx from 'classnames';
import s from './style.module.css';

import car_img from '../../images/car.png';
import contract_img from '../../images/contract.png';
// import './slides.css';
import '../../reset.css';

export default function Slider() {
    const titles = ["Срочная доставка день в день",
        "Подписание договора за 1 час"];
    const texts = ["Для тех, кто не может ждать у нас есть услуга срочной курьерской доставки корреспондеции и других видов отправлений.",
        "В течение часа наш курьер заберет вашу посылку и подпишет с Вами договор о предоставлении услуг."];

    const [value, setValue] = useState("1");

    function handleChange(event) {
        setValue(event.target.value);
    }

    return (
        <div className={cx(s.sliderContainer)}>
            <div className={cx(s.infoContainer)}>
                <h1 className={cx(s.infoContainer__title)}>{titles[value - 1]}</h1>
                <p className={cx(s.infoContainer__text)}>{texts[value - 1]}</p>
                <button className={cx(s.infoContainer__orderButton)}>Заказать доставку</button>
            </div>
            <div className={cx(s.inputContainer)}>
                <input className={cx(s.inputContainer__input, s.inputContainer__inputFirst)}
                       type="radio"
                       name="radio"
                       value="1"
                       checked={value === "1"}
                       onChange={handleChange}
                />
                <input className={cx(s.inputContainer__input, s.inputContainer__inputSecond)}
                       type="radio"
                       name="radio"
                       value="2"
                       checked={value === "2"}
                       onChange={handleChange}
                />
            </div>
            <div className={cx(s.imageContainer)}>
                <img className={value === "2" ? cx(s.imageContainer__image, s.contractSlide) : cx(s.imageContainer__image, s.carSlide)}
                     src={value === "2" ? contract_img : car_img}
                     alt=""/>
            </div>
        </div>
    );
}