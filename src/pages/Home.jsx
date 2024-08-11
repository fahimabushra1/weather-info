import axios from "axios";
import { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import WeatherInfo from "../assets/components/WeatherInfo";


const Home = () => {
    const [cities, setCities] = useState();
    const [weather, setWeather] = useState();

    const handleCityChange =(event)=>{        
        setCities(event.target.value)
    }

const fetchWeather= async () =>{
try{
const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${'3d7d0a167dc135bd86f055b093495df6'}`)
setWeather(response)
console.log(response)
}
catch(error){
    console.log('error fetching weather data', error)
}
}

const handleClick = (e) => {
    e.preventDefault();

        fetchWeather();
    }

    return (
        <div>
            <div className="flex justify-center items-center mt-24">
                 <input className="bg-blue-300 px-12 py-4 rounded-2xl caret-blue-500 focus:caret-indigo-500" type="text" placeholder="enter city name" value={cities} onChange={handleCityChange} /> <br />
                 <button className="bg-blue-500 text-white text-2xl p-4 rounded-2xl ml-4" onClick={handleClick}><FaSearchLocation /></button>
            </div>
             <div>
                {
                  weather && <WeatherInfo key={weather?.data?.id} weather={weather}/>
                }
             </div>
        </div>
    );
};

export default Home;