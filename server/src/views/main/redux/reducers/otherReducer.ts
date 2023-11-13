import { AnyAction } from "redux";
import * as ActionType from "../types";
import { Icon } from "../actions/otherAction";

export interface OtherState {
    iconsWeather: Icon[],
    loading: boolean;
    error: any;
}

const initialState: OtherState = {
    iconsWeather: [],
    loading: false,
    error: null
};

const otherReducer = (state: OtherState = initialState, action: AnyAction) => {
    switch (action.type) {
        case ActionType.FETCH_ICONS_REQUEST:
            return { ...state, loading: true };
        case ActionType.FETCH_ICONS_SUCCESS:
            return { ...state, loading: false, iconsWeather: action.payload };
        case ActionType.FETCH_ICONS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default otherReducer;