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
import { Fragment } from "react-is";
import React from "react";
import { productListURL } from "../constants";

class ProductList extends React.Component {
  state = {
    loading: false,
    error: null,
    data: [],
  };
  componentDidMount() {
    this.setState({ loading: true });
    Axios.get(productListURL)
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
            content={JSON.stringify(error)}
          />
        )}
        {loading && (
          <Segment>
            <Dimmer active>
              <Loader>Loading</Loader>
            </Dimmer>

            <Image src="" />
          </Segment>
        )}
        <Item.Group divided>
          {data?.map((product) => {
            return (
              <Item key={product.id}>
                <Item.Image src={product.image} />

                <Item.Content>
                  <Item.Header as="a">{product.title}</Item.Header>
                  <Item.Meta>
                    <span className="cinema">{product.category}</span>
                  </Item.Meta>
                  <Item.Description>{product.description}</Item.Description>
                  <Item.Extra>
                    <Button primary floated="right" icon labelPosition="right">
                      Add to cart
                      <Icon name="cart plus" />
                    </Button>
                    <Label>{product.price}</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>
            );
          })}
        </Item.Group>
      </Container>
    );
  }
}

export default ProductList;
