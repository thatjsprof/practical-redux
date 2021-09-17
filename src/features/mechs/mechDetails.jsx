import { useState, useEffect } from "react";
import { Form, Segment } from "semantic-ui-react";
import { getWeight } from "./mechSelectors";

const MechDetails = ({ mech }) => {
  const [mechInfo, setMechInfo] = useState({
    id: "",
    name: "",
    model: "",
    weight: "",
    classname: "",
  });

  useEffect(() => {
    const { id, name, model, weight, classname } = mech;
    // setMechInfo({ ...mechInfo, id, name, model, weight, classname });
  }, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setMechInfo({ ...mechInfo, [name]: value });
  };

  const { id, name, model, weight, classname } = mechInfo;

  return (
    <Segment attached="bottom">
      <Form size="large">
        <Form.Field name="id" width={16}>
          <label>ID</label>
          <input
            placeholder="id"
            name="id"
            value={id}
            onChange={onChangeHandler}
          />
        </Form.Field>
        <Form.Field name="name" width={16}>
          <label>Name</label>
          <input
            placeholder="name"
            name="name"
            value={name}
            onChange={onChangeHandler}
          />
        </Form.Field>
        <Form.Field name="model" width={16}>
          <label>Model</label>
          <input
            placeholder="model"
            name="model"
            value={model}
            onChange={onChangeHandler}
          />
        </Form.Field>
        <Form.Field name="weight" width={16}>
          <label>Weight</label>
          <input
            placeholder="weight"
            value={getWeight(weight)}
            onChange={onChangeHandler}
            name="weight"
          />
        </Form.Field>
        <Form.Field name="class" width={16}>
          <label>Class</label>
          <input
            placeholder="classname"
            value={classname}
            onChange={onChangeHandler}
            name="classname"
          />
        </Form.Field>
      </Form>
    </Segment>
  );
};

export default MechDetails;
