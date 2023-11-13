import { AnyAction } from "redux";
import * as ActionType from "../types";
import User, { initUser } from "../../types/Users";


export interface UserState {
  users: User[];
  currentUser: User;
  loading: boolean;
  error: any;
}

const initialState: UserState = {
  users: [],
  currentUser: initUser,
  loading: false,
  error: null
};

const userReducer = (state: UserState = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionType.FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case ActionType.FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case ActionType.FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ActionType.GET_CURRENT_USER_ACTION:
      return { ...state, loading: false, currentUser: action.payload };
    case ActionType.GET_ALL_USER_ACTION:
      return state;
    default:
      return state;
  }
};

export default userReducer;