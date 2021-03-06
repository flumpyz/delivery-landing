import React from 'react';
import cx from 'classnames';
import s from './style.module.css';

const Index = () => {
    return (
        <div className={cx(s.closeButton)}>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 4.25C9.9875 4.25 4.25 9.9875 4.25 17C4.25 24.0125 9.9875 29.75 17 29.75C24.0125 29.75 29.75 24.0125 29.75 17C29.75 9.9875 24.0125 4.25 17 4.25ZM22.5781 20.3469L20.3469 22.5781L17 19.2313L13.6531 22.5781L11.4219 20.3469L14.7687 17L11.4219 13.6531L13.6531 11.4219L17 14.7687L20.3469 11.4219L22.5781 13.6531L19.2313 17L22.5781 20.3469Z" fill="#D0C9D6"/>
            </svg>
        </div>
    );
};

export default Index;