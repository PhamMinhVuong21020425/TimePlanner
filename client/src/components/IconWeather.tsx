import React, { useState, useEffect } from "react";
import request from "../utils/request";

interface Icon {
    id: number;
    iconName: string;
    iconImage: string;
}

type Props = {
    iconName: string;
}

const IconWeather: React.FC<Props> = ({ iconName }: Props) => {
    const [iconUrls, setIconUrls] = useState<Icon[]>([]);

    useEffect(() => {
        const fetchIcon = async () => {
            try {
                const response = await request.get(`getIcon/${iconName}`);
                setIconUrls([...response.data]);
            } catch (error) {
                console.log(error);
            }
        };
        fetchIcon();
    }, [iconName]);

    return (
        <div>
            {iconUrls.map((item) => (
                <div key={item.id}>
                    <img src={item.iconImage} alt={item.iconName} />
                </div>
            ))}
        </div>
    );
}

export default IconWeather;