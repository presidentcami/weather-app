import React, {useState, useEffect, useMemo} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'

const FaveCity = ({ currentUser, faveCity, favoritecity }) => {
  // const [data, setData] = useState(null)
  console.log(favoritecity, faveCity)


// need a fetch request to API for whatever the faveCity is



  // useEffect(() => {
  //   loadFaveCity();  const loadFaveCity = () => {
    
  //   fetch(`http://localhost:8081/weather?zip=${faveCity}`)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result)
  //       setData(result);
  //     });
      
  // }
  //   console.log("please tell me this is data", data)
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

    return  faveCity &&( 
        <div className="weather-card">
            <div className="result">
                <p>City: <span className="faveCity">
                    {faveCity.name}, {faveCity.sys.country}
                </span>
                </p>
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