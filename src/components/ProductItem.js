import React from "react";

import { Icon, Card, Button } from "semantic-ui-react";

const Product = ({ data, key }) => {
  return (
    <Card key={key} style={{ padding: "1rem" }}>
      <div
        style={{
          height: "200px",
          backgroundImage: `url(${data.image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <Card.Content>
        <Card.Meta>{data.title}</Card.Meta>
        <Card.Header style={{ padding: "10px 0", fontSize: "200%" }}>
          {data.price} ${" "}
        </Card.Header>
        <Card.Description>{data.description}</Card.Description>
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
        <Button animated="vertical" style={{ width: "100px" }}>
          <Button.Content hidden>Add to cart</Button.Content>
          <Button.Content visible>
            <Icon name="shop" />
          </Button.Content>
        </Button>
      </Card.Content>
    </Card>
  );
};

export default Product;
