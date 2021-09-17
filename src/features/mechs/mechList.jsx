import { Table } from "semantic-ui-react";
import { getWeight } from "./mechSelectors";

const MechList = ({ mechs }) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Model</Table.HeaderCell>
          <Table.HeaderCell>Weight(tons)</Table.HeaderCell>
          <Table.HeaderCell>Class</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {mechs.map((mech) => {
          const { id, name, model, weight, classname } = mech;
          return (
            <Table.Row key={id}>
              <Table.Cell>{id}</Table.Cell>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{model}</Table.Cell>
              <Table.Cell>{getWeight(weight)}</Table.Cell>
              <Table.Cell>{classname}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default MechList;
