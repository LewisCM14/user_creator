import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
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

    // Used on the form element, Prevents the request being sent on form submission.
    const addUserHandler = (event) => {
        event.preventDefault();
        // If once either field is trimmed and the length is 0, function execution is broken with return.
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        // If age value is less than 1 function execution is broken with return. 
        // String to integer conversion forced with '+'
        if (+enteredAge < 1) {
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

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler}/>
                <label htmlFor='age'>Age (Years)</label>
                <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler}/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;