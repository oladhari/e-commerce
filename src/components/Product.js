import { Item, Button, Label, Icon } from "semantic-ui-react";

const Product = ({ data }) => (
  <Item.Group divided key={data.slug}>
    <Item>
      <Item.Image src={data.image} />

      <Item.Content>
        <Item.Header as="a">{data.title}</Item.Header>
        <Item.Meta>
          <span className="cinema">IFC Cinema</span>
        </Item.Meta>
        <Item.Description>{data.description}</Item.Description>
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
);

export default Product;
