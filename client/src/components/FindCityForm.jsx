import React, { useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap"


const MyForm = ({ setSearchBarString, onSubmit }) => {

    // This is the original State with not initial student 


    //create functions that handle the event of the user typing into the form
    const handleNameChange = (event) => {
        const zipCode = `${event.target.value},us`;
        setSearchBarString(zipCode);
        console.log(zipCode)
    };

    //A function to handle the submit in both cases - Post and Put request!
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <Form className='form-students' onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Zip Code</Form.Label>
                <input
                    type="text"
                    id="add-user-name"
                    placeholder="Enter US zip code"
                    required
                    // value={city}
                    onChange={handleNameChange}
                />
            </Form.Group>
            <Form.Group>
            <Button type="submit" variant="outline-success">Search</Button>
            </Form.Group>
        </Form>
    );
};


export default MyForm