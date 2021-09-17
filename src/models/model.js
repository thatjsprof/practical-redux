import { oneToOne, fk, attr, Model, many } from "redux-orm";

export class Pilot extends Model {
  static get modelName() {
    return "Pilot";
  }

  static get fields() {
    return {
      id: attr(),
      name: attr(),
      mech: fk("BattleMech"),
      lance: oneToOne("Lance"),
    };
  }
}

export class Lance extends Model {
  static get modelName() {
    return "Lance";
  }

  static get fields() {
    return {
      id: attr(),
      name: attr(),
      mechs: many("Battlemech"),
      pilots: many("Pilot"),
    };
  }
}

export class BattleMech extends Model {
  static get modelName() {
    return "BattleMech";
  }

  static get fields() {
    return {
      id: attr(),
      name: attr(),
      pilot: fk("Pilot"),
      lance: oneToOne("Lance"),
    };
  }
}
