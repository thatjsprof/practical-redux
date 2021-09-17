import { Table } from "semantic-ui-react";

const PilotsList = ({ pilots }) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Rank</Table.HeaderCell>
          <Table.HeaderCell>Age</Table.HeaderCell>
          <Table.HeaderCell>Skills</Table.HeaderCell>
          <Table.HeaderCell>Mech</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {pilots.map((pilot) => {
          const { name, rank, age, gunnery, mechType } = pilot;

          return (
            <Table.Row key={name}>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{rank}</Table.Cell>
              <Table.Cell>{age}</Table.Cell>
              <Table.Cell>{gunnery}</Table.Cell>
              <Table.Cell>{mechType}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default PilotsList;
