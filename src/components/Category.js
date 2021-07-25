import React from "react";
import { Grid } from "semantic-ui-react";

const Category = ({ cat, key }) => (
  <Grid.Row key={key}>
    <Grid.Column>{cat}</Grid.Column>
  </Grid.Row>
);

export default Category;
