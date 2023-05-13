import { TiWeatherCloudy } from "react-icons/ti"
import { IoWaterSharp } from "react-icons/io5"
import { WiCloudyWindy } from "react-icons/wi"
import { HiMagnifyingGlass } from "react-icons/hi2"
import React, { useState, useEffect } from "react";
import axios from "axios";
import IconWeather from "./IconWeather";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

interface WeatherData {
  list: {
    dt: number;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      feels_like: number;
      humidity: number;
      pressure: number;
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

function getTime(text: string) {
  // format: 2023-05-12 06:00:00
  // expected: 06:00
  const time = text.slice(11, 16); // extract "HH:MM" from "YYYY-MM-DD HH:MM:SS"
  // return the extracted time
  return time;
}

const API_KEY: string = "bf0fca40ef5c3565bb0d7b06f9952fae";
const API_URL: string = "http://api.openweathermap.org/data/2.5/forecast";

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState('hanoi');
  const [data, setData] = useState("hanoi")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCity(data);
  }

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get<WeatherData>(
          API_URL,
          {
            params: {
              q: city,
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
  }, [city]);

  return (
    <div className="flex m-auto items-center justify-center font-poppins">
      <div className="w-[80%]">
        {
          weatherData ?
            <div>
              <form onSubmit={handleSubmit} className="flex items-center justify-between">
                <input type="text" onChange={handleChange} className="bg-white border-2 focus:border-green-400 hover:border-green-400 placeholder-gray-400 px-4 py-2 rounded-full text-sm w-[95%]" placeholder="" />
                <button type="submit">
                  <div className="text-xl"><HiMagnifyingGlass /></div>
                </button>
              </form>
              <div className=" my-2 p-4 rounded-md text-gray-600">
                <div className="text-sm my-2">Current Weather</div>
                <div className="flex justify-between">
                  <div className="w-1/2">
                    <div className="text-center text-xl font-bold">{weatherData.city.name}</div>
                    <div className="flex justify-between items-center">
                      <div className="w-1/2">
                        <div className="flex justify-center text-6xl">
                          <IconWeather iconName={weatherData.list[0].weather[0].icon} />
                        </div>
                        <div className="text-center text-sm">{weatherData.list[0].weather[0].description}</div>
                      </div>
                      <div className="text-4xl w-1/2">{weatherData.list[0].main.temp}°C</div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="text-sm">Feels Like {weatherData.list[0].main.feels_like}°C</div>
                    <div className="flex justify-between text-sm my-1">
                      <div className="w-1/3 items-center flex">
                        <FaLongArrowAltUp className="mr-2" />
                        {weatherData.list[0].main.temp_min}°C</div>
                      <div className="flex items-center w-2/3">
                        <FaLongArrowAltDown className="mr-2" />
                        {weatherData.list[0].main.temp_max}°C
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <div className="w-1/3 flex items-center">
                        <IoWaterSharp className="mr-2" />
                        Humidity</div>
                      <div className="w-2/3">{weatherData.list[0].main.humidity}%</div>
                    </div>

                    <div className="flex justify-between items-center text-sm my-1">
                      <div className="w-1/3 flex items-center">
                        <WiCloudyWindy className="mr-2" />
                        Wind</div>
                      <div className="w-2/3">{weatherData.list[0].wind.speed} kph</div>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <div className="w-1/3 flex items-center">
                        <WiCloudyWindy className="mr-2" />
                        Pressure</div>
                      <div className="w-2/3">{weatherData.list[0].main.pressure} hPa</div>
                    </div>
                  </div>
                </div>
              </div>
            </div> : null
        }
        <div className="p-4 rounded-md bg-gradient-to-l from-cyan-100 from-10% to-cyan-200 to-80% text-gray-600">
          <div className="text-sm my-2">Extend Forecast</div>
          <div>
            {
              weatherData ?
                <div className="flex justify-between">
                  {weatherData.list.slice(1, 9).map((weatherDay) => (
                    <div className="mx-2">
                      <div className="text-center text-sm font-bold">{getTime(weatherDay.dt_txt)}</div>
                      <div className="flex items-center justify-center"><div className=""><IconWeather iconName={weatherDay.weather[0].icon} /></div></div>
                      <div className="text-xs text-center text-gray-400 font-bold">{weatherDay.weather[0].description}</div>
                    </div>
                  ))}
                </div> : null
            }
            <div>
              {
                weatherData ?
                  <div className="flex justify-between items-center">
                    {
                      weatherData.list.slice(1, 9).map((weatherDay) => (
                        <div className="flex justify-center w-[12.5%]">
                          <div className="flex w-full justify-between items-center my-3 divide-x divide-emerald-400">
                            <div className="text-xs flex justify-center items-center w-1/2 text-center">
                              <FaLongArrowAltUp className="mr-[0.5px]" />{Math.round(weatherDay.main.temp_min) - 1}°</div>
                            <div className="text-xs flex justify-center items-center w-1/2 text-center">
                              <FaLongArrowAltDown className="mr-[0.5px]" />{Math.round(weatherDay.main.temp_max) + 1}°</div>
                          </div>
                        </div>
                      ))
                    }
                  </div> : null
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
