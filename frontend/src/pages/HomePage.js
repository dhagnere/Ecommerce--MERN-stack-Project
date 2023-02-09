import ProductCarouselComponent from '../components/ProductCarouselComponent'
import CategoryCardComponent from '../components/CategoryCardComponent'
import { Row, Container } from 'react-bootstrap'

/**
 * It returns a React component that renders a ProductCarouselComponent and a Row of
 * CategoryCardComponents.
 * @returns A React component
 */
const HomePage = () => {
  const categories = ['Tablets', 'Monitors', 'Games', 'Printers' , 'Test', 'Test1', 'Test2']

  return (
    <>
      <ProductCarouselComponent />
      <Container>
      <Row s={1} md={2} className="g-4 mt-5">
        {categories.map((category, idx) => (
          <CategoryCardComponent key={idx} category={category} idx={idx} />
        ))}
      </Row></Container>
    </>
  )
}

export default HomePage
