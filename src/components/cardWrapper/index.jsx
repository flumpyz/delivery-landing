import React from 'react';
import cx from 'classnames';
import s from './style.module.css';
import cards from './cards';

import Card from './card';

const CardWrapper = () => {
    return (
        <div className={cx(s.cardWrapper)}>
            <div className={cx(s.cardWrapperContainer)}>
                <div className={cx(s.titleContainer)}>
                    <h2 className={cx(s.titleContainer__title)}>
                        5 шагов к заявке
                    </h2>
                </div>
                <div className={cx(s.cardsContainer)}>
                    {cards.map((card) => (
                        <Card stepIcon={card.icon} stepTitle={card.title} stepDescription={card.description}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardWrapper;