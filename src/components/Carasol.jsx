import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

 const Carasol = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item style={{width:'100%',height:'600px'}}>
        <img
          className="d-block w-100"
          src="src/components/images/slide1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{width:'100%',height:'600px'}}>
        <img
          className="d-block w-100"
          src="src/components/images/slide2.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{width:'100%',height:'600px'}}>
        <img
          className="d-block w-100"
          src="src/components/images/slide4.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
export default Carasol