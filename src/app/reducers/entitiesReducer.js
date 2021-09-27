import orm from "../orm";
import { createReducer } from "../../common/utils/reducerUtils";

const initialState = orm.getEmptyState();

export default createReducer(initialState, {});
