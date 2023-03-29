import React, { useState, useEffect } from 'react'
import * as ioicons from 'react-icons/io5'
import MyForm from './Form';
import Student from './Student';

const WeatherInfo = () => {

    // this is my original state with an array of students 
    const [students, setStudents] = useState([]);

    //this is the state needed for the UpdateRequest
    const [editingStudent, setEditingStudent] = useState(null)

    const loadStudents = () => {
        // A function to fetch the list of students that will be load anytime that list change
        fetch("http://localhost:8081/api/students")
            .then((response) => response.json())
            .then((students) => {
                setStudents(students);
            });
    }

    useEffect(() => {
        loadStudents();
    }, [students]);


    return (
        <div className="mybody">
        <div className="list-students">
            <h2>Techtonica Participants </h2>
            <ul>
                {students.map((student) => {
                    return <li key={student.id}> <Student student={student} toDelete={onDelete} toUpdate={onUpdate} /></li>
                })}
            </ul>
        </div>
        <MyForm key={editingStudent ? editingStudent.id : null} onSaveStudent={onSaveStudent} editingStudent={editingStudent} onUpdateStudent={updateStudent} />
        </div>
    );
}


export default WeatherInfo