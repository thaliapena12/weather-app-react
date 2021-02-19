import React from 'react';

const Weather = ({tempK, tempFeelsLikeK, tempMinK, tempMaxK, dt, main, icon, humidity,wind}) => {
 

    function convertDate(date){
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let temp_date = date.split("/");

        return  months[temp_date[0]-1] + ", " + temp_date[1] + ", " + temp_date[2];
    }
    
    const convertKelvinToFahrenheit = (kelvin) => {
       return ((kelvin - 273.15) * 9/5 + 32).toFixed()
    }
  

    let tempF = convertKelvinToFahrenheit(tempK)
    let tempFeelsLikeF = convertKelvinToFahrenheit(tempFeelsLikeK)
    let tempMaxF = convertKelvinToFahrenheit(tempMaxK)
    let tempMinF = convertKelvinToFahrenheit(tempMinK)

    const date = new Date(dt)
    const datee = date.toLocaleDateString()
    const d = convertDate(datee)

    return (

        <div className="card-container">
            <p id="date">{d}</p> 
                <div className="red">
                    <p><span id="time">{date.toLocaleTimeString()}</span></p>
                        <div>
                            <p className="temp">{tempF}°F </p>
                            <p className="img-icon"> <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather-icon" /> </p>
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