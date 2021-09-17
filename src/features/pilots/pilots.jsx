import { Component } from "react";
import { Grid, Segment, Header } from "semantic-ui-react";
import PilotsList from "./pilotsList.jsx";
import PilotsDetails from "./pilotsDetails.jsx";

const pilots = [
  {
    name: "Natasha Kerensky",
    rank: "Captain",
    age: 52,
    gunnery: 2,
    piloting: 3,
    mechType: "WHM-6R",
  },
];

class Pilots extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pilots: pilots,
    };
  }
  render() {
    const { pilots } = this.state;

    const currentPilot = pilots[0] || {};

    return (
      <Segment>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h2">Pilot List</Header>
              <PilotsList pilots={pilots}></PilotsList>
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as="h2">Pilot Details</Header>
              <PilotsDetails pilot={currentPilot}></PilotsDetails>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default Pilots;
