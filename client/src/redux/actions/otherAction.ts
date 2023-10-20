import * as ActionType from "../types";
import request from "../../utils/request";
import { Dispatch } from 'redux';

export interface Icon {
    id: number;
    iconName: string;
    iconImage: string;
}

const fetchIconsRequest = () => ({
    type: ActionType.FETCH_ICONS_REQUEST,
});

const fetchIconsSuccess = (data: Icon[]) => ({
    type: ActionType.FETCH_ICONS_SUCCESS,
    payload: data,
});

const fetchIconsFailure = (error: any) => ({
    type: ActionType.FETCH_ICONS_FAILURE,
    payload: error,
});

export const fetchIconsWeatherAction = (): any => {
    return (dispatch: Dispatch) => {
        dispatch(fetchIconsRequest());
        request.get<Icon[]>("getIcon")
            .then((response) => {
                dispatch(fetchIconsSuccess(response.data))
            })
            .catch((error) => {
                dispatch(fetchIconsFailure(error));
            });
    };
};