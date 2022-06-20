import React from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css'

const AddUser = (props) => {
    /**
        This component is the add user form, passed to Apps.js.
        Uses the Card component found in the UI folder, Card.js.
        Component specific CSS set via the AddUser.module.css file.
    */

    // Used on the form element, Prevents the request being sent on form submission
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type='text'/>
                <label htmlFor='age'>Age (Years)</label>
                <input id='age' type='number'/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;