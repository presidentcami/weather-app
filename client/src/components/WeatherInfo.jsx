import React, { useState, useEffect } from 'react'
import * as ioicons from 'react-icons/io5'
import MyForm from './FindCityForm';


const WeatherInfo = ({ currentUser, setCurrentUser }) => {
    // console.log(currentUser[0].firstname)
    const [{ firstname, lastname, favoritecity }] = currentUser;
    const [city, setCity] = useState('');
    const [result, setResult] = useState(null)

    // http://localhost:8081/weather?cityName=`{cityName}`&stateCode=`{stateCode}`&countryCode=`{countryCode}`

    const loadCity = () => {
        console.log(city)
        fetch(`http://localhost:8081/weather?zip=${city}`)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                setResult(result);
            });
    }

    const handleSubmit = (e) => {
        loadCity()
    }

    return (
        <div className="mybody">
        <div className="list-students">
            <h2>Hello {firstname} {lastname}! </h2>
            <MyForm setCity={setCity} onSubmit={handleSubmit} />
        {favoritecity ? 'Weather Card' : null}
        <p>Weather</p>
        </div>
        <button onClick={() => setCurrentUser(null)}>Logout</button>
        </div>
    );
}


export default WeatherInfo