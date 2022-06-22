import React, { useState, useRef, Fragment } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from  '../UI/ErrorModal'
import styles from './AddUser.module.css'

const AddUser = (props) => {
    /**
        This component is the add user form, passed to Apps.js.
        Uses the Card component found in the UI folder, Card.js.
        Component specific CSS set via the AddUser.module.css file.
    */

    // References the current input values on the addUser form.
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // Used to alter the error modals state
    const [error, setError] = useState();

    // Used on the form element, Prevents the request being sent on form submission.
    const addUserHandler = (event) => {
        event.preventDefault();

        // Helper variables storing the current name and age values.
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        // If once either field is trimmed and the length is 0, 
        // setError is called and the error object set, error is then deemed true and displayed in the JSX code.
        // Return is then called to prevent further function execution.
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (no empty values).'
            });
            return;
        }
        // If age value is less than 1, setError is called and the error object set
        // error is then deemed true and displayed in the JSX code. 
        // function execution is then broken with return.  String to integer conversion forced with '+'
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (older than 0).'
            });
            return;
        }
        // Calls the addUserHandler function found in Apps.js
        // Forwards the data used for the username and age fields.
        props.onAddUser(enteredName, enteredUserAge);
        // Resets the current ref value for the input fields
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    // A function to clear the 'error' state, deem it false.
    // Passed as a prop through onConfirm to the ErrorModal.js file.
    const errorHandler = () => {
        setError(null);
    };

    return (
        <Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input 
                        id='username'
                        type='text'
                        ref={nameInputRef}
                    />
                    <label htmlFor='age'>Age (Years)</label>
                    <input
                        id='age'
                        type='number'
                        ref={ageInputRef}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Fragment>
    );
};

export default AddUser;