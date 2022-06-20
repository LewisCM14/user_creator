import React from 'react';

import styles from './Button.module.css';

const Button = (props) => {
    /**
    A re-usable button UI component, styles set in the Button.module.css file.
    Uses the 'or' operator to allow for dynamic setting of type, with default of button.
    The onClick prop ensures any function received is passed onto the default onClick method.
    Allows for content display within the element via the children prop.
    */
    return (
      <button
        className={styles.button}
        type={props.type || "button"}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
};

export default Button;