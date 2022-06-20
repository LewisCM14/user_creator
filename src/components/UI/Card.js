import React from 'react';

import styles from './Card.module.css';

const Card = (props) => {
    /**
    A re-usable UI card element, styles set in the Card.module.css file.
    Ensures intended content is displayed within it through the children prop.
    Allows for other component specific CSS via the props.className template literal.
    */

    return (
        <div className={`${styles.card} ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Card;