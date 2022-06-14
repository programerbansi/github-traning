import '../css_file/Header.css'
import { Button, Nav, NavDropdown, Form, FormControl, Navbar, Container, Offcanvas, Carousel,Badge } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CartContext from "./CartContext"
import { useContext } from "react"
const Header = () => {
  const data = useContext(CartContext)
    console.log(data.count);
  return (
    <>
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#" className='logo'>BeautyStore</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                {/* <Nav.Link href="/">Home</Nav.Link> */}
                <Link to="/" className='nav-link'>Home</Link> 
                <NavDropdown title="Categories" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">HairCare</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">SkinCare</NavDropdown.Item>   
                  <NavDropdown.Item href="#action4">Makeup</NavDropdown.Item>   
                  <NavDropdown.Item href="#action4">Natural</NavDropdown.Item>   
                </NavDropdown>
                {/* <Nav.Link href="show">
                  Carts
                </Nav.Link> */}
                 <Link to="/show" className='nav-link'>Carts
                 <Badge className='bdge1' bg="danger">{data.count}</Badge>
                 </Link> 
                
                <Nav.Link href="#">
                  Offers
                </Nav.Link>
                <Nav.Link href="#">
                  Blog
                </Nav.Link>
                <Nav.Link href="#">
                  Contact Us
                </Nav.Link>
              </Nav>
              <Form className="d-flex search-data">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-1 text-1"
                  aria-label="Search"
                />
                <Button className='search-btn'>Search</Button>
                <Link to="/Login"><Button className='search-btn'>Login</Button></Link> 
             
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className='fixed3'>
             <Carousel variant="light">
                 <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100" 
                    src={require('./image/slide4.gif')}
                    alt="Second slide"
                    />
                 </Carousel.Item>
                 <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src={require('./image/slide5.gif')}
                    alt="First slide"
                    />
                </Carousel.Item>
                  
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block w-100"
                        src={require('./image/slide2.jpg')}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        
                        </Carousel.Caption>
                    </Carousel.Item >
                   
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block w-100"
                        src={require('./image/slide3.jpg')}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block w-100"
                        src={require('./image/slide1.jpg')}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block w-100"
                        src={require('./image/slide6.jpg')}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
         </div>
         <div>
           <h1 className='product-h1'>Products</h1>
         </div>

    </>
  );
}
export default Header