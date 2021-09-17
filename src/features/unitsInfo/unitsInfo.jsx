import { connect } from "react-redux";
import { Form, Dropdown, Segment } from "semantic-ui-react";
import { returnUnitInfo } from "./unitInfoSelector";

const FACTIONS = [
  { value: "cc", text: "Capellan Confederation" },
  { value: "dc", text: "Draconis Combine" },
  { value: "fs", text: "Federated Suns" },
  { value: "fwl", text: "Free Worlds League" },
  { value: "lc", text: "Lyran Commonwealth" },
  { value: "wd", text: "Wolf's Dragoons" },
];

const UnitsInfo = ({ returnUnitInfo }) => {
  const { name, affiliation } = returnUnitInfo;
  return (
    <Segment attached="bottom">
      <Form size="large">
        <Form.Field name="name" width={6}>
          <label>Units Name</label>
          <input placeholder="Name" value={name} />
        </Form.Field>
        <Form.Field name="affiliation" width={6}>
          <label>Affiliation</label>
          <Dropdown selection options={FACTIONS} value={affiliation}></Dropdown>
        </Form.Field>
      </Form>
    </Segment>
  );
};

const getStateFromProps = (state) => ({
  returnUnitInfo: returnUnitInfo(state),
});

export default connect(getStateFromProps)(UnitsInfo);
