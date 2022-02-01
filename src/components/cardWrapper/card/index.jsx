import React from 'react';
import cx from 'classnames';
import s from './style.module.css';

const Card = (props) => {
    return (
        <div className={cx(s.cardContainer)}>
            <div className={cx(s.cardContainer__iconContainer)}>
                <img className={cx(s.cardContainer__icon)} src={props.stepIcon} alt=""/>
            </div>
            <div className={cx(s.cardContainer__titleContainer)}>
                <p className={cx(s.cardContainer__title)}>
                    {props.stepTitle}
                </p>
            </div>
            <div className={cx(s.cardContainer__descriptionContainer)}>
                <p className={cx(s.cardContainer__description)}>
                    {props.stepDescription}
                </p>
            </div>
        </div>
    );
};

export default Card;