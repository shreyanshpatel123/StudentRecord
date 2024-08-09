import {Link,Outlet} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout=()=>{
    return(
      <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">React Project</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  as={Link} to="2home">Home</Nav.Link>
            <Nav.Link as={Link} to="1insert">Insert</Nav.Link>
            <Nav.Link as={Link} to="3display">Display</Nav.Link>
            <Nav.Link  as={Link} to="4search">Search</Nav.Link>
            <Nav.Link  as={Link} to="7update">Update</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Outlet/>

      www.mycompany.com
      </>
  
    )
  }
     
  export default Layout;