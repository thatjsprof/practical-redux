import { ORM } from "redux-orm";
import { Pilot, Lance, BattleMech } from "./model";

const orm = new ORM();
orm.register(Pilot, Lance, BattleMech);
export default orm;
