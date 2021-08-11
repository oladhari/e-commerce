import { Button, Icon, Item, Label } from "semantic-ui-react";

const Product = ({ product }) => (
  <Item.Group divided key={product.slug}>
    <Item>
      <Item.Image src={product.image} />

      <Item.Content>
        <Item.Header as="a">{product.title}</Item.Header>
        <Item.Meta>
          <span className="cinema">{product.price}</span>
        </Item.Meta>
        <Item.Description>{product.description}</Item.Description>
        <Item.Extra>
          <Button primary floated="right" icon labelPosition="right">
            Add to cart
            <Icon name="cart plus" />
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
);

export default Product;
