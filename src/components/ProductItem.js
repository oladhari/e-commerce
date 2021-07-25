import { Item, Button, Label, Icon } from "semantic-ui-react";
import { Card, Icon, Image } from 'semantic-ui-react'


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


const CardExampleImageCard = ({ data }) => (
  <Card>
    <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.title}</Card.Header>
      <Card.Meta>{data.price}</Card.Meta>
      <Card.Description>
        {data.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
  </Card>
)

export default CardExampleImageCard

export default Product;
