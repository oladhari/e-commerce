import React, { createContext, useState } from "react";
import Axios from "axios";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    Axios.get("http://127.0.0.1:8000/api/products/")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
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
      {products.map((el, key) => (
        <ProductsContext.Provider>
          <Product data={el} key={key} />
        </ProductsContext.Provider>
      ))}
    </Container>
  );
};

export default ProductsContextProvider;
