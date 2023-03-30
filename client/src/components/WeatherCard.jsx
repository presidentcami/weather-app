import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'

const WeatherCard = ({ data, searchBarString, setResult, currentUser, faveCity, setFaveCity, favoritecity }) => {

    const [{ id }] = currentUser
    console.log(searchBarString, "inside the weather card")
    let sunrise = data.sys.sunrise;
    let sunset = data.sys.sunset;

    let rise = new Date(sunrise * 1000);
    let sunrise1 = rise.toLocaleTimeString();

    let set = new Date(sunset * 1000)
    let sunset2 = set.toLocaleTimeString();

    // need an event handler for when they click on the favorite button that makes a put request to update the 
    // favoritecity column to be the city we are in - do i even need a setFaveCity state? think about that for a bit
    const handleSetFavorite = async (theFaveCity) => {
        setFaveCity(data);
        setResult(null)        
        console.log("faveCity the object", faveCity, "favoritecity the database", favoritecity)

        // putRequest(faveCity);
        const response = await fetch(`http://localhost:8081/api/users/favoritecity/${id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ favoritecity: theFaveCity }),
        })
        const responseObj = await response.json();
        console.log("put request content", responseObj)
        return responseObj;
    }


// load fave city after it's set?



    return (
        <div className="weather-card">
            <div className="result">
                <p>City: <span className="data">
                    {data.name}, {data.sys.country}
                </span>
                </p>
                <button onClick={() => handleSetFavorite(searchBarString)}>save as fave</button>
                <p>Description: <span className="data">
                {data.weather[0].description}
              </span>
            </p>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt={"Icon from Open Weather Api"}/>
            <p>
              Temperature: <span className="data">
                {data.main.temp} <sup>o</sup>F
              </span>
            </p>
            <p>
              Feels Like: <span className="data">
                {data.main.feels_like} <sup>o</sup>F
              </span>
            </p>
          <p>
            Humidity: <span className="data">
              {data.main.humidity}%
            </span>
          </p>
          <p>
            Wind Speed: <span className="data">
              {data.wind.speed} mph
            </span>
          </p>
          <p>
            Sunrise: <span className="data">
              {sunrise1}</span> 
          </p>
          <p>
            Sunset <span className="data">
            {sunset2} </span>
          </p>
            </div>
    </div>
    )

}

export default WeatherCard;