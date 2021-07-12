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
import React from "react";

const paragraph = <Image src="/images/wireframe/short-paragraph.png" />;

class ProductList extends React.Component {
  state = {
    loading: false,
    error: null,
    data: [],
  };
  componentDidMount() {
    this.setState({ loading: true });
    Axios.get("/some-url")
      .then((res) => {
        this.setState({ data: res.data, loading: false });
      })
      .catch((err) => {
        this.setState({ error: err, loading: false });
      });
  }
  render() {
    const { data, error, loading } = this.state;
    return (
      <Container>
        {error && (
          <Message
            negative
            header="there is error in your submission"
            content={JSON.stringfy(error)}
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
}

export default ProductList;
