import React, { useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap"


const MyForm = ({ setCity, onSubmit }) => {

    // This is the original State with not initial student 


    //create functions that handle the event of the user typing into the form
    const handleNameChange = (event) => {
        const zipCode = `${event.target.value},us`;
        setCity(() => (zipCode));
        console.log(zipCode)
    };

    // const handleLastnameChange = (event) => {
    //     const lastname = event.target.value;
    //     setStudent((student) => ({ ...student, lastname }));
    // };


    const clearForm = () => {
        setCity(null)
    }

    //A function to handle the post request
    // const postStudent = (newStudent) => {
    //     return fetch("http://localhost:8081/api/students", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(newStudent),
    //     })
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             //console.log("From the post ", data);
    //             //I'm sending data to the List of Students (the parent) for updating the list
    //             onSaveStudent(data);
    //             //this line just for cleaning the form
    //             clearForm();
    //         });
    // };

    // //A function to handle the post request
    // const putStudent = (toEditStudent) => {
    //     return fetch(`http://localhost:8081/api/students/${toEditStudent.id}`, {
    //         method: "PUT",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(toEditStudent),
    //     })
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             onUpdateStudent(data);
    //             //this line just for cleaning the form
    //             clearForm();
    //         });
    // };


    //A function to handle the submit in both cases - Post and Put request!
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
        clearForm()
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
            {/* <Form.Group>
                <Form.Label>Country</Form.Label>
                <input
                    type="text"
                    id="add-user-lastname"
                    placeholder="Last Name"
                    required
                    value={student.lastname}
                    onChange={handleLastnameChange}
                />
            </Form.Group> */}
            <Form.Group>
            <Button type="submit" variant="outline-success">Search</Button>
            </Form.Group>
        </Form>
    );
};


export default MyForm