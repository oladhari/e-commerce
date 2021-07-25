import {
  Button,
  Container,
  Dimmer,
  Grid,
  Icon,
  Image,
  Item,
  Label,
  Loader,
  Message,
  Segment,
} from "semantic-ui-react";
import Category from "../components/CategoryItem";

import Axios from "axios";
import React, { useEffect, useState } from "react";

const paragraph = <Image src="/images/wireframe/short-paragraph.png" />;

const CategoriesList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    Axios.get("http://127.0.0.1:8000/api/categories/")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      {error && (
        <Message
          negative
          header="there is error in your submission"
          content={JSON.stringify(error)}
        />
      )}
      {loading && (
        <Segment>
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>

          <Image src="/images/wireframe/short-paragraph.png" />
        </Segment>
      )}
      <Grid reversed="tablet vertically">
        {data.map((el, key) => (
          <Category cat={el.title} key={key} />
        ))}
      </Grid>
    </Container>
  );
};

export default CategoriesList;
