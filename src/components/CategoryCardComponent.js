import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CategoryCardComponent = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/tablets-category.png" />
      <Card.Body>
        <Card.Title>Electronique</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Voir la catégorie</Button>
      </Card.Body>
    </Card>
  )
}

export default CategoryCardComponent