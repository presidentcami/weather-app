import React, {useState, useEffect, useMemo} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'

const FaveCity = ({ currentUser, faveCity, setFaveCity }) => {
  const [{ id }] = currentUser
  // const [currentFaveCity, setCurrentFaveCity] = useState('')
  console.log(faveCity, id)

// tried to add a setter to unfavorite the city
  const handleUnFavorite = async () => {
    setFaveCity(null);
    // setResult(null)
    // console.log("faveCity the object", faveCity, "favoritecity the database", favoritecity)

    // putRequest(faveCity);
    const response = await fetch(`http://localhost:8081/api/users/favoritecity/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ favoritecity: null }),
    })
    const responseObj = await response.json();
    console.log("put request content", responseObj)
    return responseObj;
  }

// need a fetch request to API for whatever the faveCity is upon login
  // useEffect(() => {
    

      
    
  // }, []);

const sunrise = useMemo(() => {
  if (!faveCity?.sys?.sunrise) return null;
  let riseDate = new Date(faveCity.sys.sunrise * 1000);
  return riseDate.toLocaleTimeString();
}, [faveCity])

  const sunset = useMemo(() => {
    if (!faveCity?.sys?.sunset) return null;
    let sunsetDate = new Date(faveCity.sys.sunset * 1000);
    return sunsetDate.toLocaleTimeString();
  }, [faveCity])

    return faveCity && (
        <div className="weather-card">
            <div className="result">
                <p>Your Favorite City! <span className="faveCity">
                    {faveCity.name}, {faveCity.sys.country}
                </span>
                </p>
                {/*  */}
          <button onClick={handleUnFavorite}>remove from favorites</button>
                <p>Description: <span className="faveCity">
                {faveCity.weather[0].description}
              </span>
            </p>
            <img src={`http://openweathermap.org/img/wn/${faveCity.weather[0].icon}@4x.png`} alt={"Icon from Open Weather Api"}/>
            <p>
              Temperature: <span className="faveCity">
                {faveCity.main.temp} <sup>o</sup>F
              </span>
            </p>
            <p>
              Feels Like: <span className="faveCity">
                {faveCity.main.feels_like} <sup>o</sup>F
              </span>
            </p>
          <p>
            Humidity: <span className="faveCity">
              {faveCity.main.humidity}%
            </span>
          </p>
          <p>
            Wind Speed: <span className="faveCity">
              {faveCity.wind.speed} mph
            </span>
          </p>
          <p>
            Sunrise: <span className="data">
              {sunrise}</span> 
          </p>
          <p>
            Sunset <span className="data">
            {sunset} </span>
          </p>
            </div>     
   </div>
    )

}

export default FaveCity;