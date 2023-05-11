import { TiWeatherCloudy } from "react-icons/ti"
// import React from 'react';
// import { FiSun, FiCloud, FiCloudRain, FiCloudSnow, FiCloudLightning } from 'react-icons/fi';

// type WeatherProps = {
//     temperature: number;
//     description: string;
//     icon: string;
// };

// const Weather: React.FC<WeatherProps> = ({ temperature, description, icon }) => {
//     const getIcon = () => {
//         switch (icon) {
//             case '01d':
//                 return <FiSun className="w-6 h-6" />;
//             case '02d':
//             case '03d':
//             case '04d':
//                 return <FiCloud className="w-6 h-6" />;
//             case '09d':
//             case '10d':
//                 return <FiCloudRain className="w-6 h-6" />;
//             case '11d':
//                 return <FiCloudLightning className="w-6 h-6" />;
//             case '13d':
//                 return <FiCloudSnow className="w-6 h-6" />;
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="bg-white rounded-md shadow-md p-4">
//             <div className="flex justify-center items-center mb-2">{getIcon()}</div>
//             <div className="text-center">
//                 <div className="text-4xl font-bold">{temperature}&deg;C</div>
//                 <div className="text-gray-500">{description}</div>
//             </div>
//         </div>
//     );
// };

// export default Weather;

import React, { useState, useEffect } from "react";
import axios from "axios";

interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
  name: string;
}

const API_KEY: string = "bf0fca40ef5c3565bb0d7b06f9952fae";
const API_URL: string = "http://api.openweathermap.org/data/2.5/weather";

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get<WeatherData>(
          API_URL,
          {
            params: {
              q: 'hanoi',
              appid: API_KEY,
              units: 'metric',
            }
          }
        );
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeatherData();
  }, []);

  return (
    <div className="flex m-auto items-center justify-center font-poppins">
      {/* {weatherData ? (
        <>
          <h2>Current weather in {weatherData.name}:</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Outside: {weatherData.main.feels_like}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Wind speed: {weatherData.wind.speed} m/s</p>
          <p>Icon: {weatherData.weather[0].icon}</p>
        </>
      ) : (
        <p>Loading...</p>
      )} */}
      {weatherData ? <div className="w-1/2 to-90% p-8 rounded-md">
        <div className="text-center font-medium text-xl mb-4 text-gray-600">{weatherData.name} - Viet Nam</div>
        <div className="text-8xl flex justify-center text-gray-600"><TiWeatherCloudy /></div>
        <div className="flex justify-center">
          {
            weatherData.weather.map((weather) => (
              <div className="">
                <div className="text-4xl font-bold text-center text-gray-600">{weatherData.main.temp}°C</div>
                <div className="text-gray-500 ml-4 my-4 text-center">{weather.description}</div>
              </div>
            ))
          }
        </div>
        <div className="flex justify-between items-center text-gray-600">
          <div>
            <div className="text-center my-4">Humidity</div>
            <div className="text-center text-sm">{weatherData.main.humidity}%</div>
          </div>
          <div>
            <div className="text-center my-4">Wind</div>
            <div className="text-center text-sm">{weatherData.wind.speed}m/s</div>
          </div>
          <div>
            <div className="text-center my-4">Feels Like</div>
            <div className="text-center text-sm">{weatherData.main.feels_like}°C</div>
          </div>
        </div>
      </div>
        : null}
    </div>
  );
}

export default Weather;
