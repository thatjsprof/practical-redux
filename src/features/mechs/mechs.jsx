import { Grid, Table, Segment, Form, Header } from "semantic-ui-react";

const Mechs = () => {
  return (
    <Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h2">Mechs List</Header>
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
                <Table.Row>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>Colonel</Table.Cell>
                  <Table.Cell>34</Table.Cell>
                  <Table.Cell>2/3</Table.Cell>
                  <Table.Cell>WHM-R4</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h2">Mechs Details</Header>
            <Segment attached="bottom">
              <Form size="large">
                <Form.Field name="id" width={16}>
                  <label>ID</label>
                  <input placeholder="id" />
                </Form.Field>
                <Form.Field name="name" width={16}>
                  <label>Name</label>
                  <input placeholder="name" />
                </Form.Field>
                <Form.Field name="model" width={16}>
                  <label>Model</label>
                  <input placeholder="model" />
                </Form.Field>
                <Form.Field name="weight" width={16}>
                  <label>Weight</label>
                  <input placeholder="weight" />
                </Form.Field>
                <Form.Field name="class" width={16}>
                  <label>Class</label>
                  <input placeholder="class" />
                </Form.Field>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Mechs;
