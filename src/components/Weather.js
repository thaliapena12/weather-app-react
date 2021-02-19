import React from 'react';

const Weather = ({tempK, tempFeelsLikeK, tempMinK, tempMaxK, dt, main, icon, humidity,wind}) => {
 


    return (

        <div className="card-container">
            <p id="date">{d}</p> 
                <div className="red">
                    <p><span id="time">{date.toLocaleTimeString()}</span></p>
                        <div>
                            <p className="temp">{tempF}°F </p>
                            <p className="img-icon"> <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} /> </p>
                            <p className="main">{main}</p>           
                        </div>
                            <p className="blue">Feels Like:<span>{tempFeelsLikeF}° F</span></p>
                            <p className="blue">Wind:<span>{wind} mph</span>  </p>
                            <p className="blue">Humidity:<span>{humidity}%</span></p>
                            <p className="blue">High:<span>{tempMaxF}°F</span></p>
                            <p className="blue">Low:<span>{tempMinF}°F</span></p>    
                </div>
        </div>
    )


};

export default Weather;