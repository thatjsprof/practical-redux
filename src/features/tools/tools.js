import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Segment } from "semantic-ui-react";
import { returnData } from "./toolsAction";

const action = () => ({
  returnData,
});

const Tools = ({ returnData }) => {
  return (
    <Segment attached="bottom">
      <Button onClick={returnData}>Reload Unit Data</Button>
    </Segment>
  );
};

export default connect(null, action)(Tools);
