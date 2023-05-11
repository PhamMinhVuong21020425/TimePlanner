import React from 'react';
import { FiSun, FiCloud, FiCloudRain, FiCloudSnow, FiCloudLightning } from 'react-icons/fi';

type WeatherProps = {
    temperature: number;
    description: string;
    icon: string;
};

const Weather: React.FC<WeatherProps> = ({ temperature, description, icon }) => {
    const getIcon = () => {
        switch (icon) {
            case '01d':
                return <FiSun className="w-6 h-6" />;
            case '02d':
            case '03d':
            case '04d':
                return <FiCloud className="w-6 h-6" />;
            case '09d':
            case '10d':
                return <FiCloudRain className="w-6 h-6" />;
            case '11d':
                return <FiCloudLightning className="w-6 h-6" />;
            case '13d':
                return <FiCloudSnow className="w-6 h-6" />;
            default:
                return null;
        }
    };

    return (
        <div className="bg-white rounded-md border-[1.5px] p-4">
            <div className="flex justify-center items-center mb-2">{getIcon()}</div>
            <div className="text-center">
                <div className="text-4xl font-bold">{temperature}&deg;C</div>
                <div className="text-gray-500">{description}</div>
            </div>
        </div>
    );
};

export default Weather;