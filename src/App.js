import React, { useState, Fragment } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {

    // Handles the state of the users array passed to the UsersList component
    // setUsersList function allows for this array to be updated
    const [usersList, setUsersList] = useState([]);
    
    /**
    Collects the two 'user' arguments from the AddUser component,
    passes this data to the users array via setUsersList
    As the new array relies on the previous state,
    prevUserList is used as a pointer to setUsersList
    The spread operator is used to copy the previous users array.
    The passed data is then set in the relevant Key field and the usersList array updated.
    A random ID field is generator for the user with Math.random
    */

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
        });
    };

    return (
        <Fragment>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={usersList}/>
        </Fragment>
    );
}

export default App;
