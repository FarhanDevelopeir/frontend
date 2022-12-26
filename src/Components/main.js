import React from 'react';
import './main.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import doc from '../images/bruno-rodrigues-279xIHymPYY-unsplash-removebg.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import pic from '../images/istockphoto-174674040-612x612.jpg';
import check from '../images/check-mark.png'
// import Pic from '../images/istockphoto-174674040-612x612.jpg';
// import picture from '../images/ashkan-forouzani-DPEPYPBZpB8-unsplash.jpg';


const Main = () => {
  return (
    <div>
      <main className='App-main' style={{ display: 'flex' }}>
        <div className='main-1' style={{ width: '50%' }}>
          <div className='ab' >
          <div className='heading d-sm-none d-none d-xl-block d-lg-block d-md-block' style={{  marginTop: '130px' }}><h1>Book <span style={{ color: '#ff9e15' }}>best doctors </span> near you</h1></div>
          <div className='heading d-xl-none d-lg-none d-md-none d-sm-block d-block' style={{ marginTop: '100px' }}><h4>Book <span style={{ color: '#ff9e15' }}>best doctors </span> near you</h4></div>

          <div className='location'>
            <input type='text' className='location-bar' placeholder='Enter City' style={{ marginTop: '30px'}} />
          </div>
          <div className='Search'>
            <input type='text' className='search-bar' placeholder='Search for doctors & hospitals' style={{ marginTop: '30px' }} />

          </div>
          
          </div>
          {/* <div className='boxes'>

             

        <div class="container-fluid mt-5 mb-4 d-none d-md-block d-lg-block d-xl-block">
        <div class="row">
            <div class="col-md-6 col-lg-5 ms-3">
                <div class="card mx-30 " >
                  <img src={pic} class="card-img-top d-xl-none d-md-none d-lg-block"   alt="..."/>
                  <img src={pic} class="card-img-top d-xl-none d-md-block d-lg-none d-none" style={{ width:'260px'}} alt="..."/>
                  <img src={pic} class="card-img-top d-xl-block d-sm-none d-md-none d-none" style={{ width:'230px'}} alt="..."/>
                  <div class="card-body">
                    <h6 class="card-title" style={{color:'black'}}>
Book Emergency Ward</h6>

<p class="card-text">
100+ PMC Verified Doctors</p>
<button className='box-button'>Book Now</button>
</div>
</div>
</div>
<div class="col-md-6 col-lg-5 ms-3 " >
                <div class="card mx-30 ">
                  <img src={picture} class="card-img-top d-xl-none d-md-none d-lg-block "  alt="..."/>
                  <img src={picture} class="card-img-top d-xl-none d-md-block d-lg-none d-none " style={{ width:'260px'}} alt="..."/>
                  <img src={picture} class="card-img-top d-xl-block d-sm-none d-md-none d-none" style={{ width:'230px'}} alt="..."/>
                  <div class="card-body">
                    <h6 class="card-title" style={{color:'black'}}>
book Appointment</h6>

<p class="card-text">
100+ PMC Verified Doctors</p>
<button className='box-button'>Book Now</button>
</div>
</div>
</div>

</div>
</div>


<div class="container-fluid mt-5 mb-4  d-block d-md-none d-lg-none d-xl-none "  >
        <div class="row">
            <div class=" ms-3  d-inline">
                <div class="card mx-30 d-inline" >
                  <img src={Pic} class="card-img-top d-xl-none d-md-none d-lg-block d-none d-sm-none"  alt="..."/>
                  <img src={Pic} class="card-img-top d-xl-none d-md-block d-lg-none d-none d-sm-none" style={{ width:'260px',height:'200px'}} alt="..."/>
                  <img src={Pic} class="card-img-top d-xl-block d-sm-none d-md-none d-none d-lg-none " style={{ width:'260px'}} alt="..."/>
                  <img src={Pic} class="card-img-top d-xl-none d-sm-block d-md-none d-block d-lg-none" style={{width:'230px'}}  alt="..."/>

                  <div class="card-body">
                    <h5 class="card-title">
Julia Thorn</h5>
<h6>
Junior Developer</h6>
<p class="card-text">
100+ PMC Verified Doctors</p>
<button className='box-button'>Book Now</button>
</div>
</div>
</div>
<div class=" ms-3 d-inline " >
                <div class="card mx-30 d-inline">
                  <img src={pic} class="card-img-top d-xl-none d-md-none d-lg-block d-none"  alt="..."/>
                  <img src={pic} class="card-img-top d-xl-none d-md-block d-lg-none d-none " style={{ width:'260px',height:'200px'}} alt="..."/>
                  <img src={pic} class="card-img-top d-xl-block d-sm-none d-md-none d-none" style={{ width:'260px'}} alt="..."/>
                  <img src={Pic} class="card-img-top d-xl-none d-sm-block d-md-none d-block"  alt="..."/>

                  <div class="card-body">
                    <h5 class="card-title">
Martha David</h5>
<h6>
UI / UX Designer</h6>
<p class="card-text">
100+ PMC Verified Doctors</p>
<button className='box-button'>Book Now</button>
</div>
</div>
</div>

</div>
</div>










            </div> */}



          {/* <div class="container d-none d-sm-none d-md-none d-lg-block d-xl-block">
        <div class="row">
            <div class="col-lg-5 mb-4 mt-4">
                <div class="card ">
                    <img class="card-img-top" src={pic}  alt=""/>
  
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                            Some quick example text to build on 
                            the card title and make up the bulk 
                            of the card's content.
                        </p>
  
                        <a href="#" class="btn btn-outline-primary btn-sm">
                            Card link
                        </a>
                        <a href="#" class="btn btn-outline-secondary btn-sm">
                            <i class="far fa-heart"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 mb-4 mt-4">
                <div class="card">
                    <img class="card-img-top" src={Pic} alt=""/>
  
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                            Some quick example text to build on the 
                            card title and make up the bulk of the 
                            card's content.
                        </p>
                          
                        <a href="#" class="btn btn-outline-primary btn-sm">
                            Card link
                        </a>
                        <a href="#" class="btn btn-outline-secondary btn-sm">
                            <i class="far fa-heart"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
          <Row className='rrow w-100 m-auto '  >
            <Col className='box d-flex '  >
              <div>
                <div className='mt-3 mb-5'>
                  <b><p>Emergency Ward</p></b>
                  <p><img src={check} className='ttt'></img>Best Wards in City</p>
                </div>
                <Button className='aaa mt-3' style={{width:'150px',background:'#0b65af'}} >Book Now</Button>
              </div>
              <div className='er'>
                <img src={pic} className='img-fluid d-sm-block d-md-block d-lg-block d-xl-block' style={{ height: '200px',  }} ></img>
              </div>


            </Col>
            <Col className='box d-flex' >
              <div>
                <div className='mt-3 mb-5 '>
                  <b><p>Book Appointment</p></b>
                  <p><img src={check} className='ttt'></img>PMC Verified Doctors</p>
                </div>

                <Button className='aaa mt-3'style={{width:'150px',background:'#0b65af'}} >Book Now</Button>
              </div>
              <div className='er'>
                <img src={pic} className='img-fluid d-sm-block d-md-block d-lg-block d-xl-block' style={{ height: '200px' }}></img>
              </div>


            </Col>
            
          </Row>




        </div>
        <div className='main-2' style={{ width: '50%', marginTop: '50px' }} >
          <img src={doc} className='img-fluid d-xl-none' style={{ width: '100%', marginTop: '20px' }} alt='adc'></img>
          <img src={doc} className='img-fluid d-md-none d-sm-none d-none d-xl-block' alt='adc' style={{ width: '100%', height: '100vh' }}></img>


        </div>

      </main>


      {/* responsive */}

      <Row className='eee w-100 m-auto  mt-4'   >
            <Col className='box d-flex '  >
              <div>
                <div className='mt-3 mb-5'>
                  <b><p>Emergency Ward</p></b>
                  <p><img src={check} className='ttt'></img>Best Wards in City</p>
                </div>
                <Button className='aaa mt-3 d-none d-sm-none d-md-block d-lg-block d-xl-block ' style={{background:'#0b65af'}} >Book Now</Button>
                <Button className='aaa mt-1    mb-3 ' style={{width:'100px',background:'#0b65af'}} >Book Now</Button>

              </div>
              <div>
                <img src={pic} className='res img-fluid  d-sm-block d-md-block d-lg-block d-xl-block' style={{ height: '200px', margin: '10px' }} ></img>
              </div>


            </Col>
            <Col className='box d-flex' >
              <div>
                <div className='mt-3 mb-5 '>
                  <b><p>Book Appointment</p></b>
                  <p><img src={check} className='ttt'></img>PMC Verified Doctors</p>
                </div>

                <Button className='aaa mt-3 d-none d-sm-none d-md-block d-lg-block d-xl-block ' style={{background:'#0b65af'}}  >Book Now</Button>
                <Button className='aaamt-1    mb-3 ' style={{width:'100px',background:'#0b65af'}} >Book Now</Button>
              </div>
              <div>
                <img src={pic} className='res img-fluid d-sm-block d-md-block d-lg-block d-xl-block' style={{ height: '200px' }}></img>
              </div>


            </Col>
            
          </Row>



    </div>
  )
}

export default Main