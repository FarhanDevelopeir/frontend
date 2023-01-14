import React from 'react'
import Header from '../Components/header'
import Footer from '../Components/footer'
import shifa from '../images/download (2).jfif'
import { Link } from 'react-router-dom'
// import { Button } from 'react-bootstrap'
import map from '../images/8350944451595341180-128.png'
import doc from '../images/12336740611595341300-128.png'
import a from '../images/1282918811595341174-128.png';
import b from '../images/1453445921638178181-128.png';
import c from '../images/4379486051644993421-128.png';
import d from '../images/8350944451595341180-128.png';
import e from '../images/8516007241595341170-128.png';
import f from '../images/9251414541647350902-128.png';
import g from '../images/9963330951595341179-128.png';
import h from '../images/10295499861529659195-128.png';
import './shifa.css'
import farhan from '../images/FB_IMG_1655200645745-modified.png'
import saad from '../images/3d88cf50-5b2d-4efa-bff4-b369bc594b1d-modified.png'
import zee from '../images/309669010_828554178158000_1780954544487387833_n.jpg'




const Shifa = () => {
  return (
    <div>
      <Header />
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
        <div className='shifa-2 my-auto' style={{ borderLeft: '3px solid Orange', marginRight: '20px' }}>
          <div className='' >
            <div className='d-flex p-3'>
              <img src={map} class='mx-3' style={{ height: '40px' }}></img>
              <h5>Islamabad</h5>
            </div>
            <div className='d-flex p-3'>
              <img src={doc} class='mx-3' style={{ height: '40px' }}></img>
              <h5>98 doctors</h5>
            </div>
          </div>
        </div>

      </div>

      {/* Responsive for mobile */}

      <div className='shifa-m  border  mb-4     ' style={{ paddingLeft: '10px', display: 'flex', justifyContent: 'space-between', padding: '10px ', marginTop: '100px' }}>
        <div className='shifa-1 d-flex'>
          <div className='img my-auto' style={{ borderRadius: '50%', border: '2px solid orange' }}>
            <img src={shifa} className='img-fluid my-auto' style={{ borderRadius: '50%' }} ></img>
          </div>
          <div className='text my-auto'>
            <h2>Al-Shifa Hospital</h2>
            <h6>F-8 Centorus Mall Islamabad</h6>
            {/* <Button className='btn'>View details</Button> */}
            <button className='btn text-white w-75' style={{ backgroundColor: '#0b65af' }}>Call Helpline</button>

          </div>
        </div>
        <div className='shifa-2 my-auto' style={{ borderLeft: '3px solid Orange', marginRight: '20px' }}>
          <div className='' >
            <div className='d-flex p-3'>
              <img src={map} class='mx-3' style={{ height: '40px' }}></img>
              <h5>Islamabad</h5>
            </div>
            <div className='d-flex p-3'>
              <img src={doc} class='mx-3' style={{ height: '40px' }}></img>
              <h5>98 doctors</h5>
            </div>
          </div>
        </div>

      </div>

      {/* Al-shifa-close */}

      <div className='disease ' >


        <div className='abcd sp-inner w-75' >
          <h3>View Disease Doctors</h3>
          <p>Find best doctors for your disease</p>
          <div className='specialist-doc'>
            <div className='circles' >
              <a href='/#' className='cir-name'><img src={a} alt='sv'></img></a>
              <a href='/#' className='text'><p>Diabetes</p></a>
            </div>
            <div className='circles'>
              <a href='/#' className='cir-name'><img src={b} alt='sv'></img></a>
              <a href='/#' className='text'><p>Coronavirus</p></a>
            </div>
            <div className='circles'>
              <a href='/#' className='cir-name'><img src={c} alt='sv'></img></a>
              <a href='/#' className='text'><p>High blood Pressure</p></a>
            </div>
            <div className='circles'>
              <a href='/#' className='cir-name'><img src={d} alt='sv'></img></a>
              <a href='/#' className='text'><p>Anxiety</p></a>
            </div>
            <div className='circles'>
              <a href='/#' className='cir-name'><img src={e} alt='sv'></img></a>
              <a href='/#' className='text'><p>Constipation</p></a>
            </div>
            <div className='circles'>
              <a href='/#' className='cir-name'><img src={f} alt='sv'></img></a>
              <a href='/#' className='text'><p>Diagnostic</p></a>
            </div>
            <div className='circles'>
              <a href='/#' className='cir-name'><img src={g} alt='sv'></img></a>
              <a href='/#' className='text'><p>Pain</p></a>
            </div>
            <div className='circles'>
              <a href='//#' className='cir-name'><img src={h} alt='sv'></img></a>
              <a href='/#' className='text'><p>Diabetes</p></a>
            </div>
          </div>
        </div>

      </div>

      {/* Doctors in shifa-Open */}

      <div>
        <h1 className='text-center my-5 ' style={{ textShadow: '2px 2px 3px grey' }}>Doctors In Shifa Hospital</h1>
      </div>



      <div className='shifa w-75 border m-auto mb-4    ' style={{ display: 'flex', paddingLeft: '10px', justifyContent: 'space-between', padding: '10px ' }}>
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
            <Link to='/select_time' ><button className='btn  px-5 mb-3 w-100 ' style={{ backgroundColor: 'orange', height: '50px' }}>Book Appointment</button></Link>
            <button className='btn text-white px-5  w-100 ' style={{ backgroundColor: '#0b65af', height: '50px' }}>View Doctor details</button>

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
            <Link to='/select_time'><button className='btn   mt-4 w-100 ' style={{ backgroundColor: 'orange', height: '50px' }}>Book Appointment</button></Link>
            <button className='btn  text-white mt-2 w-100 ' style={{ backgroundColor: '#0b65af', height: '50px' }}>Book Appointment</button>

          </div>
        </div>



      </div>


      {/* Muhammad_Farhan */}

      <div className='shifa w-75 border m-auto mb-4    ' style={{ display: 'flex', paddingLeft: '10px', justifyContent: 'space-between', padding: '10px ' }}>
        <div className='shifa-1 d-flex'>
          <div className='img my-auto' style={{ borderRadius: '50%', border: '2px solid orange' }}>
            <img src={farhan} className='img-fluid my-auto' style={{ borderRadius: '50%' }} ></img>
          </div>
          <div className='test my-auto'>
            <h2>Dr.Muhammad Farhan</h2>
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
            <button className='btn  px-5 mb-3 w-100 ' style={{ backgroundColor: 'orange', height: '50px' }}>Book Appointment</button>
            <button className='btn text-white px-5  w-100 ' style={{ backgroundColor: '#0b65af', height: '50px' }}>View Doctor details</button>

          </div>
        </div>

      </div>

      {/* Responsive for mobile */}

      <div className='shifa-m  abc  border m-auto mb-4     ' style={{ paddingLeft: '10px', justifyContent: 'space-between', padding: '10px ' }}>
        <div className='shifa-1 d-flex'>
          <div className='img my-auto' style={{ borderRadius: '50%', border: '2px solid orange' }}>
            <img src={farhan} className='img-fluid my-auto' style={{ borderRadius: '50%' }} ></img>
          </div>
          <div className='test my-auto'>
            <h2>Dr.Muhammad Farhan</h2>
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
            <button className='btn   mt-4 w-100 ' style={{ backgroundColor: 'orange', height: '50px' }}>Book Appointment</button>
            <button className='btn  text-white mt-2 w-100 ' style={{ backgroundColor: '#0b65af', height: '50px' }}>Book Appointment</button>

          </div>
        </div>



      </div>

      {/* Muhammad Farhan_Close */}

      {/* Saad_open */}


      <div className='shifa w-75 border m-auto mb-4    ' style={{ display: 'flex', paddingLeft: '10px', justifyContent: 'space-between', padding: '10px ' }}>
        <div className='shifa-1 d-flex'>
          <div className='img my-auto' style={{ borderRadius: '50%', border: '2px solid orange' }}>
            <img src={saad} className='img-fluid my-auto' style={{ borderRadius: '50%' }} ></img>
          </div>
          <div className='test my-auto'>
            <h2>Dr.Saad Ali</h2>
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
            <button className='btn  px-5 mb-3 w-100 ' style={{ backgroundColor: 'orange', height: '50px' }}>Book Appointment</button>
            <button className='btn text-white px-5  w-100 ' style={{ backgroundColor: '#0b65af', height: '50px' }}>View Doctor details</button>

          </div>
        </div>

      </div>

      {/* Responsive for mobile */}

      <div className='shifa-m  abc  border m-auto mb-4     ' style={{ paddingLeft: '10px', justifyContent: 'space-between', padding: '10px ' }}>
        <div className='shifa-1 d-flex'>
          <div className='img my-auto' style={{ borderRadius: '50%', border: '2px solid orange' }}>
            <img src={saad} className='img-fluid my-auto' style={{ borderRadius: '50%' }} ></img>
          </div>
          <div className='test my-auto'>
            <h2>Dr.Saad Ali</h2>
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
            <button className='btn   mt-4 w-100 ' style={{ backgroundColor: 'orange', height: '50px' }}>Book Appointment</button>
            <button className='btn  text-white mt-2 w-100 ' style={{ backgroundColor: '#0b65af', height: '50px' }}>Book Appointment</button>

          </div>
        </div>


      </div>




      {/* saad_Close */}









      {/* Doctors In Shifa_close */}



      <Footer />

    </div>
  )
}

export default Shifa