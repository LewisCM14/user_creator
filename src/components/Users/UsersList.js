import React from 'react';

import Card from '../UI/Card';
import styles from './UsersList.module.css';

const UsersList = (props) => {
    
    /**
    The component to fetching and displaying the input users.
    Passed to App.js. Component specific CSS set via the UsersList.module.css file.
    Uses the map method to iterate over each user in the users array passed as a prop in Apps.js.
    Displays the name and age in JSX code.
    */

    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map((user) => (
                    <li>
                    {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UsersList