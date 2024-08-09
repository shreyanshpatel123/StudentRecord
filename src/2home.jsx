import Carousel from 'react-bootstrap/Carousel';
import '../public/image2.png';
import '../public/image1.png';
import '../public/image3.png';

const Home =()=>{
    return(

        <>

<Carousel fade>
      <Carousel.Item>
      <img src="public/image2.png"  width="100%" height="50%" />

    
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        
      <img src="public/image1.png"  width="100%" height="50%" />


        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
    
      <img src="public/image3.png"  width="100%" height="50%" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        </>
    )
}

export default Home
