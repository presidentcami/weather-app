import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'

const WeatherCard = ({ data }) => {

    let sunrise = data.sys.sunrise;
    let sunset = data.sys.sunset;

    let rise = new Date(sunrise * 1000);
    let sunrise1 = rise.toLocaleTimeString();

    let set = new Date(sunset * 1000)
    let sunset2 = set.toLocaleTimeString();

    return (
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
              {sunrise1}</span> 
          </p>
          <p>
            Sunset <span className="data">
            {sunset2} </span>
          </p>
            </div>

        
        {/* <Card>
            <Card.Body>
            <Card.Title>{student.firstname} {student.lastname}</Card.Title>
            <Button variant="outline-danger" onClick={()=>{onDelete(student)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(student)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button>
            </Card.Body>
        </Card>     */}
    </div>
    )

}

export default WeatherCard;