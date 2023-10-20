import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";
import otherReducer from "./otherReducer";

const rootReducer = combineReducers({
  taskState: taskReducer,
  userState: userReducer,
  otherState: otherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;