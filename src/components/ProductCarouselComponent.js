import Carousel from 'react-bootstrap/Carousel';

const ProductCarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 assombrir"
          src="images/carousel/carousel-1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>ELECTRONIQUE</h3>
          <p>Vous êtes un geek ? Prenez votre pied ici !.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 assombrir"
          src="images/carousel/carousel-2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>LIVRES ET EBOOK</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 assombrir"
          src="images/carousel/carousel-3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>JEUX JOUETS</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarouselComponent;
