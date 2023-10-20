import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  Store,
  AnyAction,
} from "redux";
import thunk, { ThunkDispatch, ThunkMiddleware } from "redux-thunk";
import rootReducer, { RootState } from "./reducers/rootReducer";
import { initUser } from "../types/Users";

// export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;

const initialState: RootState = {
  taskState: {
    tasks: [],
    tasksToday: [],
    loading: false,
    error: null,
  },
  userState: {
    users: [],
    currentUser: initUser,
    loading: false,
    error: null,
  },
  otherState: {
    iconsWeather: [],
    loading: false,
    error: null,
  }
};

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<RootState, AnyAction> = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk as ThunkMiddleware<RootState, AnyAction>)
  )
);

export type AppDispatch = typeof store.dispatch
export default store;
