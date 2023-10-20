import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/reducers/rootReducer";
import { Icon } from "../redux/actions/otherAction";

type Props = {
    iconName: string;
}

const IconWeather: React.FC<Props> = ({ iconName }: Props) => {
    // const [iconUrls, setIconUrls] = useState<Icon[]>([]);
    const icons: Icon[] = useSelector((state:RootState) => state.otherState.iconsWeather);
    const item = icons.find(icon => icon.iconName === iconName);
    // const dispatch = useDispatch();

    // useEffect(() => {
        // const fetchIcon = async () => {
        //     try {
        //         const response = await request.get(`getIcon/${iconName}`);
        //         setIconUrls([...response.data]);
        //     } catch (error) {
        //         console.log(error);
        //     }
        // };
        // fetchIcon();
    // }, []);

    return (
        <div key={item?.id}>
            <img loading="lazy" src={item?.iconImage} alt={item?.iconName} />
        </div>
    );
}

export default IconWeather;