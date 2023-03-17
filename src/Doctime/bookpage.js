import React from 'react';
import Header from '../Components/header';
import Footer from '../Components/footer';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import { Button } from 'reactstrap';
import Table from 'react-bootstrap/Table';
import tick from '../images/images-removebg-preview.png'
import './bookpage.css'
import { useLocation } from 'react-router-dom';


const Bookpage = () => {
    // open
    
    // close

    return (
        <div>
            <Header />
            {/* <p style={{ margin:'150px auto' }}>Your Appointment </p> */}
            
            <div className='container kkk border w-50 text-center ' style={{ margin:'180px auto', borderRadius: '5px' }}>
            <img className='fff' src={tick} ></img>
                <Button className='w-100 my-3 bbb' style={{height:'50px',border:'none',background:'#0b65af',fontSize:'25px'}}>Your Appointment is Booked</Button>
                <Table striped bordered hover size="xl" className='text-center'>
                    <thead>
                        <tr>
                            
                            <th>Patient Name</th>
                            <td>Iftikhar Janjua</td>
                            
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                          
                            <th>Patient Number</th>
                            <td>03070582931</td>
                            
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                          
                            <th>Date</th>
                            <td>16 March 2023</td>
                            
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                          
                            <th>Time</th>
                            <td>12:00 PM</td>
                            
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                          
                            <th>Doctor Name</th>
                            <td>Dr.Javed Iqbal</td>
                            
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                          
                            <th>Hospital</th>
                            <td>Shifa International</td>
                            
                        </tr>
                    </thead>
                </Table>

            </div>



            <Footer />
        </div>
    )
}

export default Bookpage