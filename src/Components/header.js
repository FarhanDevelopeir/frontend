import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import './header.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import piii from '../images/lloogo.png'
// import Auth from './Auth';
import firebase from '../firebase';

import {setUpRecaptcha,onSignInSubmit} from 'firebase/app'
// import { getAuth, signInWithPhoneNumber } from "firebase/auth"
// import { ModalBody } from 'react-bootstrap';

const Header = () => {
  // const { http } = Auth();
  const [modal, setmodal] = useState(false);
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();

  // const submitForm = () => {
  //   console.log(email + '' + password)
  //   http.post('./login', { email: email, password: password }).then((res) => {
  //     console.log(res.data);
  //   })
  // }
  setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
      }
    });
  }

  onSignInSubmit = (event) => {
    event.preventDefault();
    const phoneNumber = +9203070582931;
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        // ...
      });
  }

  return (
    <div>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 position-fixed" style={{ backgroundColor: "#1177ca", top: '0', height: '80px', width: '100%', zIndex: '1' }} >
          <Container fluid >
            <Navbar.Brand className='text-white' ><Link to='/' class='text-white text-decoration-none'><img src={piii} style={{ height: '50px', width: '50px', marginRight: '-10 px' }}></img>Tabeeb</Link></Navbar.Brand>
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
                        <h6>Find doctor by name</h6>

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
                  {/* <Link to='/signup' ><Button className='jbf btn' style={{background:'#fd9940',border:'none'}}  >SignUp/Login</Button></Link> */}

                  {/* Popup-open */}

                  <Modal
                    size='md'
                    isOpen={modal}
                    toggle={() => setmodal(!modal)}
                  >
                    <ModalHeader
                      toggle={() => setmodal(!modal)}
                      style={{ background: '#1177ca', color: 'white' }}


                    >
                      Welcome to Tabeeb
                    </ModalHeader>
                    <ModalBody>
                      <form onSubmit={this.onSignInSubmit}>
                        <Row>
                          <Col lg={12}>
                            <div>
                              <label htmlFor='name'>
                                Enter Your Name
                              </label>
                              <input
                                style={{ height: '40px' }}
                                type='email'
                                className='form_control w-100 my-2 '
                                // onChange={e => setEmail(e.target.value)}
                              //  placeholder='Enter Your Phone Number'
                              >
                              </input>
                              <label htmlFor='name'>
                                Enter Your Phone Number
                              </label>
                              <input
                                style={{ height: '40px' }}
                                type='password'
                                className='form_control w-100 my-2'
                                // onChange={e => setpassword(e.target.value)}

                              //  placeholder='Enter Your Phone Number'
                              >
                              </input>
                              <Button className='w-100 mb-1 mt-3 bg-warning  '  style={{ height: '50px', border: 'none', color: 'black', fontSize: '21px' }}  >Login</Button>
                            </div>
                          </Col>
                        </Row>
                      </form>
                    </ModalBody>
                  </Modal>





                  <Button className='jbf btn' style={{ background: '#fd9940', border: 'none' }} onClick={() => setmodal(true)}>SignUp/Login</Button>


                  {/* Popup-close */}

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
