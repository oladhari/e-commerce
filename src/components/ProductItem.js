import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { formatNumber } from "../helpers/utils";

import { Icon, Card, Button } from "semantic-ui-react";

const Product = ({ product }) => {
  const cartItems = useContext(CartContext);

  const isInCart = ({ product }) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  const addProduct = (product) => {
    cartItems.push([...product]);
    console.table(cartItems);
  };

  const increase = (product) => cartItems.push([...product]);

  return (
    <Card style={{ padding: "1rem" }}>
      <div
        style={{
          height: "200px",
          backgroundImage: `url(${product.image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <Card.Content>
        <Card.Meta>{product.title}</Card.Meta>
        <Card.Header style={{ padding: "10px 0", fontSize: "200%" }}>
          {formatNumber(product.price)}
        </Card.Header>
        <Card.Description>{product.description}</Card.Description>
      </Card.Content>
      <Card.Content
        extra
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Button animated style={{ width: "100px" }}>
          <Button.Content visible>Details</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>

        {!isInCart(product) ? (
          <Button
            animated="vertical"
            style={{ width: "100px" }}
            onClick={() => addProduct(product)}
          >
            <Button.Content hidden>Add to cart</Button.Content>
            <Button.Content visible>
              <Icon name="shop" />
            </Button.Content>
          </Button>
        ) : (
          <Button
            animated="vertical"
            style={{ width: "100px" }}
            onClick={() => increase(product)}
          >
            <Button.Content hidden>Add more</Button.Content>
            <Button.Content visible>
              <Icon name="plus" />
            </Button.Content>
          </Button>
        )}
      </Card.Content>
    </Card>
  );
};

export default Product;
