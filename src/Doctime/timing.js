import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import Header from '../Components/header'
import Footer from '../Components/footer'
import zee from '../images/309669010_828554178158000_1780954544487387833_n.jpg'
import { Link } from 'react-router-dom'
import './timing.css'
import sunny from '../images/sunny.png'
import cloud from '../images/clear-sky.png'
// import { Button } from 'bootstrap';
import { Button } from 'react-bootstrap';

const Doctime = () => {
  const [modal, setmodal] = useState(false)
  return (
    <div>
      <Header />


      <div className='shifa border w-75  ' style={{ display: 'flex', margin: '40px auto', marginTop: '100px ', paddingLeft: '10px', justifyContent: 'space-between', padding: '10px ' }}>
        <div className='shifa-1 d-flex'>
          <div className='img my-auto' style={{ borderRadius: '50%', border: '2px solid orange' }}>
            <img src={zee} className='img-fluid my-auto' style={{ borderRadius: '50%' }} ></img>
          </div>
          <div className='test my-auto'>
            <h2>Dr.Khushnood Iqbal</h2>
            <h6>Diabetologist, Consultant Physician, Endocrinologist</h6>
            <h6>MBBS, MRCPS (UK), MD (USA)</h6>

            <div className='experience d-flex justify-content-around'>
              <div className='years '>
                <h5>15 Years</h5>
                <p>Experience</p>
              </div>
              <div className='  ' style={{ height: '70px', width: '2px', border: '1px solid orange' }}> </div>
              <div className='reviews '>
                <h5> 90% Reviews</h5>
                <p>Satisfied Patients</p>
              </div>
            </div>


          </div>
        </div>

        <div className='w-50 ' style={{ position: 'relative' }}>
          <div className='text-right ' style={{ position: 'absolute', marginBottom: '10px', right: '0', bottom: '0' }}>
            {/* <Link to='/select_time' ><button className='btn  px-5 mb-3 w-100 ' style={{ backgroundColor: 'orange', height: '50px' }}>Book Appointment</button></Link> */}
            {/* Open-Popup */}
            <Modal
              size='md'
              isOpen={modal}
              toggle={() => setmodal(!modal)}
            >
              <ModalHeader toggle={() => setmodal(!modal)} style={{ background: '#1177ca', color: 'white' }}>
                Appointment with Dr.Khushnood Iqbal
              </ModalHeader>
              <ModalBody>
                <form>
                  <Row>
                    <Col>
                      <div>
                        <label>
                          Patient Name
                        </label>
                        <input
                          style={{ height: '40px' }}
                          type='text'
                          className='form_control w-100 my-2 '
                        //  placeholder='Enter Your Phone Number'
                        >
                        </input>
                        <label>
                          Patient Phone Number
                        </label>
                        <input
                          style={{ height: '40px' }}
                          type='text'
                          className='form_control w-100 my-2 '
                        //  placeholder='Enter Your Phone Number'
                        >
                        </input>

                        <Link to='/booked'><Button className='w-100 mb-1 mt-3 bg-warning  ' style={{ height: '50px', border: 'none', color: 'black', fontSize: '21px' }}  >Book Now</Button></Link>

                        
                      </div>
                    </Col>
                  </Row>
                </form>
              </ModalBody>
            </Modal>
            <button className='btn  px-5 mb-3 w-100 ' style={{ backgroundColor: 'orange', height: '50px' }} onClick={() => setmodal(true)}>Book Appointment</button>
            {/* Close-Popup */}
            <button className='btn text-white px-5  w-100 ' style={{ backgroundColor: '#0b65af', height: '50px' }}>View Doctor details</button>

          </div>
        </div>

      </div>

      {/* Responsive for mobile */}

      <div className='shifa-m  abc  border     ' style={{ paddingLeft: '10px', margin: '40px auto', marginTop: '100px', justifyContent: 'space-between', padding: '10px ' }}>
        <div className='shifa-1 d-flex'>
          <div className='img my-auto' style={{ borderRadius: '50%', border: '2px solid orange' }}>
            <img src={zee} className='img-fluid my-auto' style={{ borderRadius: '50%' }} ></img>
          </div>
          <div className='test my-auto'>
            <h2>Dr.Khushnood Iqbal</h2>
            <h6 >Diabetologist, Consultant Physician, Endocrinologist</h6>
            <h6>MBBS, MRCPS (UK), MD (USA)</h6>

            <div className='experience d-flex justify-content-around'>
              <div className='years '>
                <h5>15 Years</h5>
                <p>Experience</p>
              </div>
              <div className='  ' style={{ height: '70px', width: '2px', border: '1px solid orange' }}> </div>
              <div className='reviews '>
                <h5> 90% Reviews</h5>
                <p>Satisfied Patients</p>
              </div>
            </div>



          </div>
        </div>

        <div className='acc w-100 ' >
          <div className='text-right '>
            {/* <Link to='/select_time'><button className='btn   mt-4 w-100 ' style={{ backgroundColor: 'orange', height: '50px' }}>Book Appointment</button></Link> */}
             {/* Open-Popup */}
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
                <form>
                  <Row>
                    <Col>
                      <div>
                        <label>
                          Patient Name
                        </label>
                        <input
                          style={{ height: '40px' }}
                          type='text'
                          className='form_control w-100 my-2 '
                        //  placeholder='Enter Your Phone Number'
                        >
                        </input>
                        <label>
                          Patient Phone Number
                        </label>
                        <input
                          style={{ height: '40px' }}
                          type='text'
                          className='form_control w-100 my-2 '
                        //  placeholder='Enter Your Phone Number'
                        >
                        </input>

                        <Link to='/booked'><Button className='w-100 mb-1 mt-3 bg-warning  ' style={{ height: '50px', border: 'none', color: 'black', fontSize: '21px' }}  >Book Now</Button></Link>

                        
                      </div>
                    </Col>
                  </Row>
                </form>
              </ModalBody>
            </Modal>
            {/* <button className='btn  px-5 mb-3 w-100 ' style={{ backgroundColor: 'orange', height: '50px' }} onClick={() => setmodal(true)}>Book Appointment</button> */}
           <button className='btn   mt-4 w-100 ' style={{ backgroundColor: 'orange', height: '50px' }}  onClick={() => setmodal(true)}>Book Appointment</button>

            {/* Close-Popup */}
            <button className='btn  text-white mt-2 w-100 ' style={{ backgroundColor: '#0b65af', height: '50px' }}>Book Appointment</button>

          </div>
        </div>



      </div>

      {/* Close_Doctor_Profile */}


      {/* Open_timing_Box */}


      <div className='Timing-box w-75  p-3' style={{margin:'40px auto',marginBottom:'50px'}}>
        <h2>Select Date</h2>
        <div className='date'>
          <div className='border m-2 px-3 text-center bg-primary' style={{ borderRadius: '10px' }}>
            <h6>Today</h6>
            <p>03 Jan</p>
          </div>
          <div className='border m-2 px-3 text-center' style={{ borderRadius: '10px' }}>
            <h6>Mon</h6>
            <p>03 Jan</p>
          </div>
          <div className='border m-2 px-3 text-center' style={{ borderRadius: '10px' }}>
            <h6>Tues</h6>
            <p>03 Jan</p>
          </div>
          <div className='border m-2 px-3 text-center' style={{ borderRadius: '10px' }}>
            <h6>Wed</h6>
            <p>03 Jan</p>
          </div>
          <div className='border m-2 px-3 text-center' style={{ borderRadius: '10px' }}>
            <h6>Thu</h6>
            <p>03 Jan</p>
          </div>
          <div className='border m-2 px-3 text-center' style={{ borderRadius: '10px' }}>
            <h6>Fri</h6>
            <p>03 Jan</p>
          </div>
          <div className='border m-2 px-3 text-center' style={{ borderRadius: '10px' }}>
            <h6>Sat</h6>
            <p>03 Jan</p>
          </div>

        </div>
        <h2>Select Date</h2>
        <h6><img src={cloud} className='pr-2' style={{ height: '30px' }}></img>Morning</h6>
        <div className='time'>
          <div className='border m-2 px-3 text-center bg-primary' style={{ borderRadius: '10px' }}>
            <h6>10:00 AM</h6>
          </div>
          <div className='border m-2 px-4 text-center' style={{ borderRadius: '10px' }}>
            <h6>10:30 AM</h6>
          </div>
          <div className='border m-2 px-3 text-center' style={{ borderRadius: '10px' }}>
            <h6>11:00 AM</h6>
          </div>
          <div className='border m-2 px-3 text-center' style={{ borderRadius: '10px' }}>
            <h6>11:30 AM</h6>
          </div>
          <div className='border m-2 px-3 text-center' style={{ borderRadius: '10px' }}>
            <h6>11:45 AM</h6>
          </div>

        </div>

        <h6><img src={sunny} style={{ height: '30px' }}></img>Afternoon</h6>
        <div className='time'>
          <div className='border m-2 px-3 text-center ' style={{ borderRadius: '10px' }}>
            <h6>12:00 PM</h6>
          </div>
          <div className='border m-2 px-4 text-center' style={{ borderRadius: '10px' }}>
            <h6>1:00 PM</h6>
          </div>
          <div className='border m-2 px-3 text-center' style={{ borderRadius: '10px' }}>
            <h6>2:00 PM</h6>
          </div>
          <div className='border m-2 px-3 text-center' style={{ borderRadius: '10px' }}>
            <h6>3:00 PM</h6>
          </div>
          <div className='border m-2 px-3 text-center' style={{ borderRadius: '10px' }}>
            <h6>4:00 PM</h6>
          </div>
          <div className='border m-2 px-3 text-center' style={{ borderRadius: '10px' }}>
            <h6>5:00 PM</h6>
          </div>
          <div className='border m-2 px-3 text-center' style={{ borderRadius: '10px' }}>
            <h6>6:00 PM</h6>
          </div>
          <div className='border m-2 px-3 text-center' style={{ borderRadius: '10px' }}>
            <h6>7:00 PM</h6>
          </div>

        </div>


      </div>




      {/* Close_timing_Box */}




      <Footer />
    </div>
  )
}

export default Doctime