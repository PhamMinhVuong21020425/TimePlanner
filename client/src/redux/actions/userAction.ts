import * as ActionType from "../types";
import request from "../../utils/request";
import { Dispatch } from 'redux';
import User from "../../types/Users";

const fetchUsersRequest = () => ({
    type: ActionType.FETCH_USERS_REQUEST,
});

const fetchUsersSuccess = (data: User[]) => ({
    type: ActionType.FETCH_USERS_SUCCESS,
    payload: data,
});

const fetchUsersFailure = (error: any) => ({
    type: ActionType.FETCH_USERS_FAILURE,
    payload: error,
});

const getCurrentUserSuccess = (data: User) => ({
    type: ActionType.GET_CURRENT_USER_ACTION,
    payload: data,
});

export const fetchUsersAction = (): any => {
    return (dispatch: Dispatch) => {
        dispatch(fetchUsersRequest());
        request.get<User[]>("user/getAllUser")
            .then((response) => {
                dispatch(fetchUsersSuccess(response.data))
            })
            .catch((error) => {
                dispatch(fetchUsersFailure(error));
            });
    };
};

export const getCurrentUserAction = (): any => {
    return (dispatch: Dispatch) => {
        dispatch(fetchUsersRequest());
        request.get<User>("user")
            .then((response) => {
                dispatch(getCurrentUserSuccess(response.data))
            })
            .catch((error) => {
                dispatch(fetchUsersFailure(error));
            });
    };
};