import React, { useState, useEffect } from 'react'
import * as ioicons from 'react-icons/io5'
import MyForm from './FindCityForm';
import WeatherCard from './WeatherCard';
import FaveCity from './FaveCityWeatherCard';


const WeatherInfo = ({ currentUser, setCurrentUser }) => {
    // console.log(currentUser[0].firstname)
    const [{ firstname, lastname, favoritecity }] = currentUser;
    const [searchBarString, setSearchBarString] = useState('');
    const [result, setResult] = useState(null);
    const [faveCity, setFaveCity] = useState(null);

    console.log("current user", currentUser, "favorite city ", faveCity)
    const loadCity = () => {
        console.log(searchBarString)
        fetch(`http://localhost:8081/weather?zip=${searchBarString}`)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                setResult(result);
            });
    }

    const handleSubmit = (e) => {
        loadCity()
    }
    useEffect(() => {
    if (!favoritecity) return;
    fetch(`http://localhost:8081/weather?zip=${favoritecity}`)
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            setFaveCity(result);
            console.log("tell me this is faveCity data", faveCity)
        });
    }, [favoritecity]);


    return (
        <div className="mybody">
        <div className="list-students">
            <h2>Hello {firstname} {lastname}! </h2><button onClick={() => setCurrentUser(null)}>Logout</button>
            {faveCity && <FaveCity currentUser={currentUser} faveCity={faveCity} setFaveCity={setFaveCity} />}
                <MyForm setSearchBarString={setSearchBarString} onSubmit={handleSubmit} />
                {result && <WeatherCard data={result} currentUser={currentUser} searchBarString={searchBarString} favoritecity={favoritecity} setResult={setResult} faveCity={faveCity} setFaveCity={setFaveCity} />}
        
        </div>
        
        </div>
    );
}


export default WeatherInfo