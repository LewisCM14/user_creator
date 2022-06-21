import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

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

    const Backdrop = (props) => {
        return (
            <div className={styles.backdrop} onClick={props.onConfirm}></div>
        );
    };

    const ModalOverlay = (props) => {
        return (
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        )
    };

    // Creates a portal to the Backdrop and attaches to the specified div via ID found on index.html
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ModalOverlay 
                    title={props.title} 
                    message={props.message} 
                    onConfirm={props.onConfirm} 
                />,
                document.getElementById('overlay-root')
            )}
        </Fragment>
    );
};

export default ErrorModal;