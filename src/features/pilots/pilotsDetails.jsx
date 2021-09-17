import { useState } from "react";
import { Form, Dropdown, Segment } from "semantic-ui-react";

const FACTIONS = [
  { value: "cc", text: "Capellan Confederation" },
  { value: "dc", text: "Draconis Combine" },
  { value: "fs", text: "Federated Suns" },
  { value: "fwl", text: "Free Worlds League" },
  { value: "lc", text: "Lyran Commonwealth" },
];

const PilotsDetails = ({ pilot }) => {
  //   const { name, rank, age, gunnery, piloting, mechType } = pilot;

  const [pilotInfo, setPilotInfo] = useState({
    name: "",
    rank: "",
    age: "",
    gunnery: "",
    piloting: "",
    mechType: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setPilotInfo({ ...pilotInfo, [name]: value });
  };

  const { name, rank, age, gunnery, piloting, mechType } = pilotInfo;

  return (
    <Segment attached="bottom">
      <Form size="large">
        <Form.Field name="name" width={16}>
          <label>Name</label>
          <input
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChangeHandler}
          />
        </Form.Field>
        <Form.Field name="rank" width={16}>
          <label>Rank</label>
          <Dropdown selection options={FACTIONS}></Dropdown>
        </Form.Field>
        <Form.Field name="age" width={16}>
          <label>Age</label>
          <input placeholder="Age" value={age} onChange={onChangeHandler} />
        </Form.Field>
        <Form.Field name="gunnery" width={16}>
          <label>Gunnery</label>
          <input
            placeholder="Gunnery"
            value={gunnery}
            onChange={onChangeHandler}
          />
        </Form.Field>
        <Form.Field name="piloting" width={16}>
          <label>Piloting</label>
          <input
            placeholder="Piloting"
            value={piloting}
            onChange={onChangeHandler}
          />
        </Form.Field>
        <Form.Field name="mech" width={16}>
          <label>Mech</label>
          <Dropdown selection options={FACTIONS}></Dropdown>
        </Form.Field>
      </Form>
    </Segment>
  );
};

export default PilotsDetails;
