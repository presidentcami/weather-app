import React, { useState, useReducer, useEffect } from 'react'
import { Button, Form } from "react-bootstrap"

const initialValue = {
    firstname: '',
    lastname: '',
    username: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                [action.payload.key]: action.payload.value,
            };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};

const AddUserForm = ({ setUsers }) => {


    const [state, dispatch] = useReducer(reducer, initialValue);

    const inputAction = (event) => {
        event.preventDefault();

        dispatch({
            type: 'add',
            payload: { key: event.target.name, value: event.target.value },
        });
        console.log(state)
    };

    //A function to handle the post request
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            fetch("http://localhost:8081/api/newuser/", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(state),
            })
                .then((response) => response.json())
                .then(user => {
                    setUsers(user);
                    console.log('users fetched when new user is added', user);

                })
            // console.log(state)
            // window.location = "/"; 
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <form onSubmit={handleSubmit} id="addContactsForm">

            <h3>Register for an Account</h3>
            <label>First Name</label>
            <input
                type="text"
                id="add-user-name"
                name="firstname"
                required
                // value={contact.first_name}
                onChange={inputAction}
            />
            <label>Last Name</label>
            <input
                type="text"
                id="add-user-name"
                name="lastname"
                required
                // value={contact.last_name}
                onChange={inputAction}
            />
            <label>Username</label>
            <input
                type="text"
                id="add-user-name"
                name="username"
                required
                // value={contact.phone}
                onChange={inputAction}
            />
            <div>
                <Button type="submit" variant="outline-success" style={{ padding: '0.6em', marginTop: '0.9em' }}>Add User</Button> </div>
        </form>

    );
};


export default AddUserForm