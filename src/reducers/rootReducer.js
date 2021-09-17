import { combineReducers } from "redux";
import tabReducer from "../features/tab/tabReducer";
import unitInfoReducer from "../features/unitsInfo/unitInfoReducer";

const rootReducer = combineReducers({
  tabs: tabReducer,
  unitInfo: unitInfoReducer,
});

export default rootReducer;
