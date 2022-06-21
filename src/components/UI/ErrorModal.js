import React from 'react';

import Card from './Card'
import Button from './Button'
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
    /**
    A re-usable UI error modal element, styles set in the ErrorModal.module.css file.
    Uses the Card.js & Button.js UI elements.

    Modal dismissal is handled via the errorHandler prop passed from AddUser.js
    Utilizes the onClick event to trigger the onConfirm prop.
    */

    return (
        <div>
            <div className={styles.backdrop} onClick={props.onConfirm}>
                <Card className={styles.modal}>
                    <header className={styles.header}>
                        <h2>
                            {props.title}
                        </h2>
                    </header>
                    <div className={styles.content}>
                        <p>
                            {props.message}
                        </p>
                    </div>
                    <footer className={styles.actions}>
                        <Button onClick={props.onConfirm}>Okay</Button>
                    </footer>
                </Card>
            </div>
        </div>
    );
};

export default ErrorModal;