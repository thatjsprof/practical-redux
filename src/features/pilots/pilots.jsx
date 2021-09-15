import {
  Grid,
  Table,
  Segment,
  Form,
  Dropdown,
  Header,
} from "semantic-ui-react";

const FACTIONS = [
  { value: "cc", text: "Capellan Confederation" },
  { value: "dc", text: "Draconis Combine" },
  { value: "fs", text: "Federated Suns" },
  { value: "fwl", text: "Free Worlds League" },
  { value: "lc", text: "Lyran Commonwealth" },
];

const Pilots = () => {
  return (
    <Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h2">Pilot List</Header>
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
                <Table.Row>
                  <Table.Cell>Natallie Sanders</Table.Cell>
                  <Table.Cell>Colonel</Table.Cell>
                  <Table.Cell>34</Table.Cell>
                  <Table.Cell>2/3</Table.Cell>
                  <Table.Cell>WHM-R4</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h2">Pilot Details</Header>
            <Segment attached="bottom">
              <Form size="large">
                <Form.Field name="name" width={16}>
                  <label>Name</label>
                  <input placeholder="Name" />
                </Form.Field>
                <Form.Field name="rank" width={16}>
                  <label>Rank</label>
                  <Dropdown selection options={FACTIONS}></Dropdown>
                </Form.Field>
                <Form.Field name="age" width={16}>
                  <label>Age</label>
                  <input placeholder="Age" />
                </Form.Field>
                <Form.Field name="gunnery" width={16}>
                  <label>Gunnery</label>
                  <input placeholder="Gunnery" />
                </Form.Field>
                <Form.Field name="piloting" width={16}>
                  <label>Piloting</label>
                  <input placeholder="Piloting" />
                </Form.Field>
                <Form.Field name="mech" width={16}>
                  <label>Mech</label>
                  <Dropdown selection options={FACTIONS}></Dropdown>
                </Form.Field>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Pilots;
