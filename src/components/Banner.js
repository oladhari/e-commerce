import React from "react";
import { Segment, Grid } from "semantic-ui-react";

const Banner = ({ title, bgImageLink, txtColor }) => (
  <Segment
    style={{ padding: "8em 0em" }}
    vertical
    style={{
      backgroundImage: `url(${bgImageLink})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "300px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Grid container>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <h1 style={{ fontSize: "400%", color: `${txtColor}` }}>{title}</h1>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default Banner;
