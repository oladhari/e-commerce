import React, { useEffect, useState } from "react";
import {
  Container,
  Dimmer,
  Image,
  Loader,
  Message,
  Segment,
} from "semantic-ui-react";

import Axios from "axios";
import Product from "./ProductItem";

const paragraph = <Image src="/images/wireframe/short-paragraph.png" />;

const ProductsGrid = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    Axios.get("http://127.0.0.1:8000/api/products/")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {data.map((el, idx) => (
          <Product product={el} key={idx} />
        ))}
      </div>
    </Container>
  );
};

export default ProductsGrid;
