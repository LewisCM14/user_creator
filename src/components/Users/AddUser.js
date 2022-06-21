import React, { useState } from 'react';

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

    // Initializes the enteredUsername state as a blank string
    const [enteredUsername, setEnteredUsername] = useState('');

    // Initializes the enteredAge state as a blank string
    const [enteredAge, setEnteredAge] = useState('');

    // Used to alter the error modals state
    const [error, setError] = useState();

    // Used on the form element, Prevents the request being sent on form submission.
    const addUserHandler = (event) => {
        event.preventDefault();
        // If once either field is trimmed and the length is 0, 
        // setError is called and the error object set, error is then deemed true and displayed in the JSX code.
        // Return is then called to prevent further function execution.
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (no empty values).'
            });
            return;
        }
        // If age value is less than 1, setError is called and the error object set
        // error is then deemed true and displayed in the JSX code. 
        // function execution is then broken with return.  String to integer conversion forced with '+'
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (older than 0).'
            });
            return;
        }
        // Calls the addUserHandler function found in Apps.js
        // Forwards the data used for the username and age fields.
        props.onAddUser(enteredUsername, enteredAge);
        // Resets the input fields
        setEnteredUsername('');
        setEnteredAge('');
    };

    // Listens for the DOM onChange event for every key stoke on the 'username' input
    // Calls the setEnteredUsername function, updating the enteredUsername state to the input value
    // The target of the event is the input element and the value property of that input is the 'username'
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    };

    // As above, for the age input.
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    // A function to clear the 'error' state, deem it false.
    // Passed as a prop through onConfirm to the ErrorModal.js file.
    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler}/>
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler}/>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;