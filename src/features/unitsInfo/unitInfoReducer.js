import { createReducer } from "../../common/utils/reducerUtils";
import { DATA_LOADED } from "./unitInfoConstants";

const INITIAL_STATE = {
  name: "Black Widow Company",
  affiliation: "wd",
};

function getData(state, payload) {
  const { unit } = payload;
  return unit;
}

export default createReducer(INITIAL_STATE, {
  [DATA_LOADED]: getData,
});
