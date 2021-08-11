import {
  Container,
  Dimmer,
  Image,
  Loader,
  Message,
  Segment,
} from "semantic-ui-react";
import React, { useEffect, useState } from "react";

import Axios from "axios";
import Product from "../components/Product";

const paragraph = <Image src="/images/wireframe/short-paragraph.png" />;

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    Axios.get("http://127.0.0.1:8000/api/products/")
      .then((res) => {
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
      {data.map((product) => (
        <Product product={product} key={product.slug} />
      ))}
    </Container>
  );
};

export default ProductList;
