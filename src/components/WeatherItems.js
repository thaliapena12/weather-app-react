import React from 'react'
import Weather from './Weather';



const WeatherItems= ({weathers, city}) => {
    return (
        <div>
            <p>{city.name}</p>
            
           {weathers.map(({dt, main, weather, wind}) => (
                <div key={dt}>
                    <Weather
                    tempK={main.temp}
                    tempFeelsLikeK={main.feels_like}
                    tempMaxK={main.temp_max} 
                    tempMinK={main.temp_min} 
                    humidity={main.humidity}
                    dt={dt * 1000} 
                    main={weather[0].main} 
                    icon={weather[0].icon} 
                    wind={wind.speed}
                  />
                </div>
            ))} 
        </div>
    )
}

export default WeatherItems;