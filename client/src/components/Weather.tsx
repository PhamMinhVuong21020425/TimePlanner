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
import IconWeather from "./IconWeather";

interface WeatherData {
  list: {
    dt: number;
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

    dt_txt: string;
  }[];



  city: {
    name: string;
    country: string;
  }
}

const API_KEY: string = "bf0fca40ef5c3565bb0d7b06f9952fae";
const API_URL: string = "http://api.openweathermap.org/data/2.5/forecast";

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
    
      {weatherData ?
        <div className="w-1/2 to-90% p-8 rounded-md">
          <div className="text-center font-medium text-xl mb-4 text-gray-600">{weatherData.city.name} - {weatherData.city.country}</div>
          <ul>
            {weatherData.list.map((weatherDay) => (
              <li key={weatherDay.dt}>
                <div className="text-8xl flex justify-center text-gray-600"><IconWeather iconName={weatherDay.weather[0].icon} /></div>
                <div className="flex justify-center">
                  <div className="">
                    <div className="text-4xl font-bold text-center text-gray-600">{weatherDay.main.temp}°C</div>
                    <div className="text-gray-500 my-4 text-center">{weatherDay.weather[0].description}</div>
                    <div className="text-green-500 text-center">{weatherDay.dt_txt}</div>
                  </div>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <div>
                    <div className="text-center my-4">Humidity</div>
                    <div className="text-center text-sm">{weatherDay.main.humidity}%</div>
                  </div>
                  <div>
                    <div className="text-center my-4">Wind</div>
                    <div className="text-center text-sm">{weatherDay.wind.speed}m/s</div>
                  </div>
                  <div>
                    <div className="text-center my-4">Feels Like</div>
                    <div className="text-center text-sm">{weatherDay.main.feels_like}°C</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        : (
          <p>Loading...</p>
        )}
    </div>
  );
}

export default Weather;
