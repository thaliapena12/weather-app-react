import React from 'react';

const Weather = ({tempK, tempFeelsLikeK, tempMinK, tempMaxK, dt, main, icon, humidity,wind}) => {

    const convertDate = (date) => {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let temp_date = date.split("/");

        return  months[temp_date[0]-1] + ", " + temp_date[1] + ", " + temp_date[2];
    }

    const convertTime = (time) => {
        return time.replace(/:\d+ /, ' ');
    }
    
    const convertKelvinToFahrenheit = (kelvin) => {
       return ((kelvin - 273.15) * 9/5 + 32).toFixed()
    }

  

    let tempF = convertKelvinToFahrenheit(tempK)
    let tempFeelsLikeF = convertKelvinToFahrenheit(tempFeelsLikeK)
    let tempMaxF = convertKelvinToFahrenheit(tempMaxK)
    let tempMinF = convertKelvinToFahrenheit(tempMinK)

    const dateNew = new Date(dt)
    const dateStr = dateNew.toLocaleDateString()
    const date = convertDate(dateStr)

    const timeOri = dateNew.toLocaleTimeString()
    const timeHrMin = convertTime(timeOri)

    return (

        <div className="item flex item">
                <div className="red">
                      <p id="date">{date}</p> 
                    <p><span id="time">{timeHrMin}</span></p>
                        <div>
                            <p className="temp">{tempF}°F </p>
                            <p className="img-icon"> <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather-icon" /> </p>
                            <p className="main">{main}</p>           
                        </div>
                            <p className="blue">Feels Like: <span>{tempFeelsLikeF}° F</span></p>
                            <p className="blue">High: <span>{tempMaxF}°F</span></p>
                            <p className="blue">Low: <span>{tempMinF}°F</span></p>    
                            <p className="blue">Wind: <span>{wind} mph</span>  </p>
                            <p className="blue">Humidity: <span>{humidity}%</span></p>
                            
                </div>
        </div>
    )


};

export default Weather;