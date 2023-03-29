import React, { useState, useEffect } from 'react'
import * as ioicons from 'react-icons/io5'
import MyForm from './Form';


const WeatherInfo = ({ currentUser, setCurrentUser }) => {
    // console.log(currentUser[0].firstname)
    const [{ firstname, lastname }] = currentUser;

    return (
        <div className="mybody">
        <div className="list-students">
            <h2>Hello {firstname} {lastname} </h2>
    
        </div>
        <button onClick={() => setCurrentUser(null)} >Logout</button>
        </div>
    );
}


export default WeatherInfo