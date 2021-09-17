import { Component } from "react";
import { Grid, Segment, Header } from "semantic-ui-react";
import MechDetails from "./mechDetails";
import MechList from "./mechList";

const mechs = [
  {
    id: 1,
    name: "Colonel",
    model: 34,
    weight: 20,
    classname: "WHM-R4",
  },
];

class Mechs extends Component {
  state = {
    mechs: mechs,
  };
  render() {
    const { mechs } = this.state;
    const currentMech = mechs[0] || {};
    return (
      <Segment>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h2">Mechs List</Header>
              <MechList mechs={mechs}></MechList>
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as="h2">Mechs Details</Header>
              <MechDetails mech={currentMech}></MechDetails>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default Mechs;
