import React, {useState} from 'react';


const LocationSelector = ({onSubmit}) => {
    const [location,setLocation] = useState('');

    return (
        <div className="location-selector">
            <h1>Search For 3 Hour Weather</h1>
            <input 
                type="search" 
                id="site-search" 
                name="search-input" 
                placeholder="Enter your city" 
                value={location} 
                onChange={(e) => setLocation(e.target.location)}>
            </input>
            <button onClick={() => onSubmit(location)}>Search</button>
        </div>
    )

};

export default LocationSelector;