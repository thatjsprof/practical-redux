import { createReducer } from "../../common/utils/reducerUtils";
import { TAB_SELECTED } from "./tabConstants";

const initial_state = {
  currentTab: "unitInfo",
};

function tabReducer(state, payload) {
  return {
    currentTab: payload.tabName,
  };
}

export default createReducer(initial_state, {
  [TAB_SELECTED]: tabReducer,
});