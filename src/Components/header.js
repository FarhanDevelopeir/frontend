import React from 'react';
import './header.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 position-fixed" style={{ backgroundColor: "#1177ca", top: '0', height: '80px', width: '100%', zIndex: '1' }} >
          <Container fluid >
            <Navbar.Brand className='text-white' ><Link to='/' class='text-white text-decoration-none'>Tabeeb</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='bg-light' />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Tabeeb
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">


                  {/* <NavDropdown 
                    title="Doctors"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                   
                    
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "#1177ca", border: "none" }}>
                      Doctors
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='dropdown-content'>
                      {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                      {/* <div class="dropdown-content"> */}

                      <div>
                        <h6>Find doctor by speciality</h6>

                        <div className='doclist'>
                          <p><a href='#'>Dermatologist</a></p>
                          <p><a href='#'>Neurologist</a></p>
                          <p><a href='#'>Child Specialist</a></p>
                          <p><a href='#'>Gynecologist</a></p>
                          <p><a href='#'>Psychiatrist</a></p>
                          <p><a href='#'>General Physician</a></p>

                        </div>


                      </div>
                      {/* <div>
                        <h6>Find doctor by disease</h6>
                        
                          <div className='doclist'>
                            <p><a href='#'>Coronavirus</a></p>
                            <p><a href='#'>Diabetes</a></p>
                            
                            <p><a href='#'>High blood Pressure</a></p>
                            <p><a href='#'>Anxiety</a></p>
                            <p><a href='#'>Constipation</a></p>
                            <p><a href='#'>General Physician</a></p>

                          </div> 
                        </div> */}
                      {/* <div>
                        <h6>Find doctor by city</h6>

                        <div className='doclist'>
                          <p><Link to='/islamabad'>Islamabad</Link></p>
                          <p><Link to='/rawalpindi'>Rawalpindi</Link></p>
                          <p><a href='#'>Lahore</a></p>
                          <p><a href='#'>Karachi</a></p>

                        </div>


                      </div> */}


                      {/* </div> */}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown >
                    <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "#1177ca", border: "none" }}>
                      Hospitals
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <div>
                        <h6>Find doctor by city</h6>

                        <div className='doclist'>
                          <p><Link to='/islamabad'>Islamabad</Link></p>
                          <p><Link to='/rawalpindi'>Rawalpindi</Link></p>
                       

                        </div>


                      </div>

                    </Dropdown.Menu>
                  </Dropdown>




                  <Nav.Link href="#action1" className='text-white'>Health Blogs</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  {/* <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  /> */}
                   <Link to='/signup' ><Button className='jbf btn' style={{background:'#fd9940',border:'none'}}  >SignUp/Login</Button></Link>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}



    </div>
  )
}

export default Header
