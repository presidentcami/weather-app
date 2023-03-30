import React, {useState, useEffect, useMemo} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'

const FaveCity = ({ currentUser, faveCity }) => {
  const [data, setData] = useState(null)

// need a fetch request to API for whatever the faveCity is

  const loadFaveCity = () => {
    
    fetch(`http://localhost:8081/weather?zip=${faveCity}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setData(result);
      });
      
  }

  useEffect(() => {
    loadFaveCity();
    console.log("please tell me this is data", data)
  }, []);

const sunrise = useMemo(() => {
  if (!data?.sys?.sunrise) return null;
  let riseDate = new Date(data.sys.sunrise * 1000);
  return riseDate.toLocaleTimeString();
}, [data])

  const sunset = useMemo(() => {
    if (!data?.sys?.sunset) return null;
    let sunsetDate = new Date(data.sys.sunset * 1000);
    return sunsetDate.toLocaleTimeString();
  }, [data])

    return  data && (
        <div className="weather-card">
            <div className="result">
                <p>City: <span className="data">
                    {data.name}, {data.sys.country}
                </span>
                </p>
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