import {
  Button,
  Container,
  Dimmer,
  Icon,
  Image,
  Item,
  Label,
  Loader,
  Message,
  Segment,
} from "semantic-ui-react";

import Axios from "axios";
import React, { useEffect, useState } from "react";

const paragraph = <Image src="/images/wireframe/short-paragraph.png" />;

const CategoriesList = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState([])

  useEffect(() => {
    setLoading(true);
    Axios.get("http://127.0.0.1:8000/api/categories/")
      .then((res) => {
        console.log(res)
        setData(res.data);
        setLoading(false)
      })
      .catch((err) => {
        setError(err);
        setLoading(false)
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
      <Item.Group divided>
        <Item>
          <Item.Image src="/images/wireframe/image.png" />

          <Item.Content>
            <Item.Header as="a">My Neighbor Totoro</Item.Header>
            <Item.Meta>
              <span className="cinema">IFC Cinema</span>
            </Item.Meta>
            <Item.Description>{paragraph}</Item.Description>
            <Item.Extra>
              <Button primary floated="right" icon labelPosition="right">
                Add to cart
                <Icon name="cart plus" />
              </Button>
              <Label>Limited</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>
  );
}


export default CategoriesList;
