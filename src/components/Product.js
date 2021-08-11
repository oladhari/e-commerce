import { Button, Icon, Item, Message } from "semantic-ui-react";
import React, { useState } from "react";

import Axios from "axios";
import { addToCartURL } from "../constants";

const Product = ({ product }) => {
  const [error, setError] = useState(null);
  const handleAddToCart = (slug) => {
    Axios.post(addToCartURL, { slug })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <Item.Group divided>
      {error && (
        <Message
          negative
          header="there is error in your submission"
          content={JSON.stringify(error)}
        />
      )}
      <Item>
        <Item.Image src={product.image} />

        <Item.Content>
          <Item.Header as="a">{product.title}</Item.Header>
          <Item.Meta>
            <span className="cinema">{product.price}</span>
          </Item.Meta>
          <Item.Description>{product.description}</Item.Description>
          <Item.Extra>
            <Button
              primary
              floated="right"
              icon
              labelPosition="right"
              onClick={handleAddToCart(product.slug)}
            >
              Add to cart
              <Icon name="cart plus" />
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

export default Product;
