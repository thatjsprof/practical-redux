import { combineReducers } from "redux";
import tabReducer from "../features/tab/tabReducer";

const rootReducer = combineReducers({
  tabs: tabReducer,
});

export default rootReducer;
