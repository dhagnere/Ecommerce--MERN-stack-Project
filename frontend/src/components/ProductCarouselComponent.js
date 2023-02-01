import Carousel from 'react-bootstrap/Carousel'
import { LinkContainer } from 'react-router-bootstrap'

const ProductCarouselComponent = () => {
  const cursP = {
    cursor: 'Pointer',
  }

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className='d-block w-100 assombrir'
          crossOrigin='anonymous'
          style={{ height: '300px', objectFit: 'cover' }}
          src='images/carousel/carousel-1.png'
          alt='First slide'
        />

        <Carousel.Caption>
          <LinkContainer to='product-details' style={cursP}>
            <h3>ELECTRONIQUE</h3>
          </LinkContainer>

          <p>Vous êtes un geek ? Prenez votre pied ici !.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100 assombrir'
          crossOrigin='anonymous'
          style={{ height: '300px', objectFit: 'cover' }}
          src='images/carousel/carousel-2.png'
          alt='Second slide'
        />

        <Carousel.Caption>
          <LinkContainer to='product-details' style={cursP}>
            <h3>LIVRES ET EBOOK</h3>
          </LinkContainer>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100 assombrir'
          crossOrigin='anonymous'
          style={{ height: '300px', objectFit: 'cover' }}
          src='images/carousel/carousel-3.png'
          alt='Third slide'
        />

        <Carousel.Caption>
          <LinkContainer to='product-details' style={cursP}>
            <h3>PHOTOGRAPHIE</h3>
          </LinkContainer>

          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ProductCarouselComponent
