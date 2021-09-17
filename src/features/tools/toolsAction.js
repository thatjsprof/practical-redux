import { DATA_LOADED } from "./toolsConstant";
import { getData } from "../../data//mockApi";

export function returnData() {
  return (dispatch, getState) => {
    getData.then((data) => {
      dispatch({
        type: DATA_LOADED,
        payload: data,
      });
    });
  };
}
