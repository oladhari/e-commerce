import React, { useContext } from "react";
import { Icon, Grid, Image, Container, Button } from "semantic-ui-react";
import { CartContext } from "../../contexts/CartContext";

import { formatNumber } from "../../helpers/utils";

const product = {
  description: "White T-shirt",
  discount_price: null,
  id: 1,
  image: "http://127.0.0.1:8000/media/t-shirt-white.jpg",
  price: 25,
  slug: "t-shirt-white",
  title: "T-shirt white",
  quantity: 10,
};

const CartItem = () => {
  const { increase, decrease, removeProduct } = useContext(CartContext);

  return (
    <Container text>
      <Grid>
        <Grid.Column width={4}>
          <img
            alt={product.slug}
            style={{ margin: "0 auto", maxHeight: "50px" }}
            src={product.image}
            className="img-fluid d-block"
          />
        </Grid.Column>
        <Grid.Column width={9}>
          <h5 style={{ marginBottom: "10px" }}>{product.title}</h5>
          <p style={{ marginBottom: "10px" }}>
            Price: {formatNumber(product.price)}{" "}
          </p>
        </Grid.Column>
        <Grid.Column width={3}>
          <>
            <Button onClick={() => increase(product)}>
              <Icon name="plus" width={"20px"} />
            </Button>

            {product.quantity > 1 && (
              <Button onClick={() => decrease(product)}>
                <Icon name="minus" width={"20px"} />
              </Button>
            )}

            {product.quantity === 1 && (
              <Button onClick={() => removeProduct(product)}>
                <Icon name="trash" width={"20px"} />
              </Button>
            )}
          </>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default CartItem;