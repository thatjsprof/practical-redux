import { combineReducers } from "redux";
import tabReducer from "../../features/tab/tabReducer";
import unitInfoReducer from "../../features/unitsInfo/unitInfoReducer";
import entitiesReducer from "./entitiesReducer";

const rootReducer = combineReducers({
  tabs: tabReducer,
  unitInfo: unitInfoReducer,
  entities: entitiesReducer,
});

export default rootReducer;
