import React from 'react';
import shifa from 'F:/farhan-work-place/react/myapp/src/images/download (2).jfif'
import map from 'F:/farhan-work-place/react/myapp/src/images/8350944451595341180-128.png'
import doc from 'F:/farhan-work-place/react/myapp/src/images/12336740611595341300-128.png'
import { Button } from 'react-bootstrap';
import zee from 'F:/farhan-work-place/react/myapp/src/images/bruno-rodrigues-279xIHymPYY-unsplash.jpg'



import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
 
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <>
    
    <div className='shifa w-75 border  mb-4    ' style={{ display: 'flex', paddingLeft: '10px', justifyContent: 'space-between', padding: '10px ', margin: '100px auto', marginTop: '100px' }}>
        <div className='shifa-1 d-flex'>
          <div className='img my-auto' style={{ borderRadius: '50%', border: '2px solid orange' }}>
            <img src={shifa} className='img-fluid my-auto' style={{ borderRadius: '50%' }} ></img>
          </div>
          <div className='text my-auto'>
            <h2>Al-Shifa Hospital</h2>
            <h6>F-8 Centorus Mall Islamabad</h6>
            {/* <Link to='/Shifa' ><Button>View details</Button></Link> */}
            <button className='btn text-white w-75' style={{ backgroundColor: '#0b65af' }} >Call Helpline</button>


          </div>
        </div>
        <div className='shifa-2 my-auto p-2' style={{ borderLeft: '3px solid Orange', marginRight: '20px', }}>
          <div className='' >
            <div className='d-flex p-3'>
              <img src={map} class='mx-3' style={{ height: '40px' }}></img>
              <h5>Islamabad</h5>
            </div>
            <div className=' h-100 '>
              <Button className=' w-100 h-100'>Edit Hospital</Button>
              {/* <img src={doc} class='mx-3' style={{ height: '40px' }}></img>
              <h5>Government</h5> */}
            </div>
          </div>
        </div>

      </div>


      <MDBContainer fluid className=' w-75 rounded ' style={{marginTop:'30px' , marginBottom:"50px"}}>

<MDBRow className=' d-flex justify-content-center align-items-center h-70 '>
  <MDBCol>

    <MDBCard className='shifa my-4 bg-silver '>

      <MDBRow className='g-0'>

        <MDBCol md='6' className="d-none d-md-block">
          <MDBCardImage style={{height:'100%'}} src='https://img.freepik.com/premium-photo/interior-hospital-consulting-room-with-medical-eye-test-chart-wheelchair-service-office-ophthalmologic-clinic-visual-examination-equipment-devices-treatment-vision_35148-258.jpg?size=626&ext=jpg&ga=GA1.1.1661947102.1678828742&semt=ais' alt="Sample photo" className="rounded" fluid/>
        </MDBCol>

        <MDBCol md='6'>

          <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
            <h3 className="mb-5  fw-bold">Add Hospital Details</h3>

            <MDBRow>
            <MDBInput wrapperClass='mb-4'placeholder='Hospital Name' label='Hospital Name' size='lg' id='form5' type='text'/>

            

            </MDBRow>

        
            <MDBRow>


            </MDBRow>

            <MDBInput wrapperClass='mb-4' placeholder='Hospital City' label='Hospital City' size='lg' id='form4' type='text' />
            <MDBInput wrapperClass='mb-4' placeholder='Hospital Address' label='Hospital Address' size='lg' id='form5' type='text'/>
            <MDBInput wrapperClass='mb-4' placeholder='Hospital Contact Number' label='Hospital Address' size='lg' id='form5' type='text'/>
            <MDBInput wrapperClass='mb-4' placeholder='Hospital Picture' label='Hospital Picture' size='lg' id='form6' type='file'/>

            <div className="d-flex justify-content-end pt-3">
              {/* <MDBBtn color='light' size='lg'>Reset all</MDBBtn> */}
              {/* <MDBBtn className='ms-2' color='warning' size='lg'>Submit Doctor form</MDBBtn> */}
              <Button className='btn btn-warning ' size='lg'>Add Hospital</Button>
            </div>

          </MDBCardBody>

        </MDBCol>
      </MDBRow>

    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer >




    <MDBContainer fluid className=' w-75 rounded mb-5 mt-5'>

      <MDBRow className='d-flex justify-content-center align-items-center h-70 '>
        <MDBCol>

          <MDBCard className='my-4 shifa '>

            <MDBRow className='g-0'>

              <MDBCol md='6' className="d-none d-md-block">
                <MDBCardImage style={{height:'100%'}} src='https://img.freepik.com/premium-photo/interior-hospital-consulting-room-with-medical-eye-test-chart-wheelchair-service-office-ophthalmologic-clinic-visual-examination-equipment-devices-treatment-vision_35148-258.jpg?size=626&ext=jpg&ga=GA1.1.1661947102.1678828742&semt=ais' alt="Sample photo" className="rounded" fluid/>
              </MDBCol>

              <MDBCol md='6'>

                <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                  <h3 className="mb-5  fw-bold">Add Doctors In Tabeeb</h3>

                  <MDBRow>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'/>
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
                    </MDBCol>

                  </MDBRow>

                 
                  <div className='d-md-flex ustify-content-start align-items-center mb-4'>
                    <h6 class="fw-bold mb-0 me-4">Gender: </h6>
                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
                  
                  </div>

                  <MDBRow>

                    

                  </MDBRow>

                  <MDBInput wrapperClass='mb-4' label='Specialist Field' size='lg' id='form4' type='text'/>
                  <MDBInput wrapperClass='mb-4' label='Years Experience' size='lg' id='form5' type='number'/>
                  <MDBInput wrapperClass='mb-4' label='Doctor Img' size='lg' id='form6' type='file'/>

                  <div className="d-flex justify-content-end pt-3">
                 
                    <Button className='btn btn-warning ' size='lg'>Add Doctor</Button>
                  </div>

                </MDBCardBody>

              </MDBCol>
            </MDBRow>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer >


    <div className='shifa w-75 border m-auto mb-4    ' style={{ display: 'flex', paddingLeft: '10px', justifyContent: 'space-between', padding: '10px ' }}>
        <div className='shifa-1 d-flex'>
          <div className='img my-auto' style={{ borderRadius: '50%', border: '2px solid orange' }}>
            <img src={zee} className='img-fluid my-auto' style={{ borderRadius: '50%' }} ></img>
          </div>
          <div className='test my-auto'>
            <h2>Dr.Javed Iqbal</h2>
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
            <button className='btn  px-5 mb-3 w-100 text-white ' style={{ backgroundColor: 'blue', height: '50px' }}>Edit Doctor</button>
            <button className='btn text-white px-5  w-100 ' style={{ backgroundColor: 'red', height: '50px' }}>Delete Doctor </button>

          </div>
        </div>

      </div>

      {/* Responsive for mobile */}

      <div className='shifa-m  abc  border m-auto mb-4     ' style={{ paddingLeft: '10px', justifyContent: 'space-between', padding: '10px ' }}>
        <div className='shifa-1 d-flex'>
          <div className='img my-auto' style={{ borderRadius: '50%', border: '2px solid orange' }}>
            <img src={zee} className='img-fluid my-auto' style={{ borderRadius: '50%' }} ></img>
          </div>
          <div className='test my-auto'>
            <h2>Dr.Javed Iqbal</h2>
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
           <button className='btn   mt-4 w-100 text-white ' style={{ backgroundColor: 'blue', height: '50px' }}>Edit Doctor</button>
            <button className='btn  text-white mt-2 w-100 ' style={{ backgroundColor: 'red', height: '50px' }}>Delete Doctor</button>

          </div>
        </div>



      </div>

    </>
  );
}

export default App;