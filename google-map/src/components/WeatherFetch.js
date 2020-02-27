import React, {useState} from 'react';
import axios from 'axios';

const WeatherFetch = () => {

    // const [status, setStatus] = useState([]);     //get into arr
    const [current, setCurrent] = useState("");


    const handleClick = (event) => {
        event.preventDefault();
        // console.log(process.env.REACT_APP_X_RAPIDAPI_KEY)
        // axios.het('url), config)
        axios.get('https://dark-sky.p.rapidapi.com/34.147785,-118.144516', {

            headers: {
                'x-rapidapi-host': 'dark-sky.p.rapidapi.com',
                'x-rapidapi-key' : `${process.env.REACT_APP_X_RAPIDAPI_KEY}`
                // 'x-rapidapi-key': 'Dark Sky key here'
            }
        })
            // .then(console.log)     // we good here 
            // .then(response => 
            //     setStatus(response.data.hourly.data)
            //     // check inspect-> network -> the request u make -> preview 
            // )
            .then(res => setCurrent(res.data.currently.temperature))
            .catch(console.log)
        }
        console.log(current)

    return (
        <div>
        <button onClick={handleClick}>Current Temp: {current}</button>

        {/* <label>Current Temp: {current}</label> */}

        
        {/* display hourly temp */}
        {/*{status.map((sta, i) => (
            
            <div>
                <p key={i}>Hourly Temp: {sta.temperature}</p>
            </div>
        ))}*/}

        </div>
    );
}
export default WeatherFetch;
