import React from 'react';
import './slider.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useEffect } from 'react';
import doc from '../images/download (1).jfif'
import crown from '../images/crown.png'
import K from '../images/download.jfif'
import S from '../images/austin-distel-7bMdiIqz_J4-unsplash.jpg'
import F from '../images/download (5).jfif'
import L from '../images/bruno-rodrigues-279xIHymPYY-unsplash.jpg'


const  Arrow= () => {
  return (
    <div >
      <div class="Container">
      
            
        <h2 className='text-center pt-5 pb-5'><img src={crown} className="align-center" style={{height:'40px',width:'40px',marginRight:'10px'}}></img>Our Best doctors</h2>
       
    
    <ul class="cards" >
        <li class="card" style={{boxShadow:'1px 1px 7px 1px rgba(0, 0, 0, 0.2)'}}>
            <div style={{textAlign:'center'}}>
                <img src={doc}  className='img-fluidd
 rounded-circle' style={{width:'80px', height:'80px'
 }}></img>
                <div class="card-content">
                  <h3 className=' text-center' style={{marginTop:'30px',marginRight:'-25px'}}>Dr.Wajid Akbar</h3>
                  <p style={{marginTop:'-5px',marginRight:'-25px'}}>5 Years Experience</p>
                    <p style={{marginTop:'-20px',marginRight:'-25px'}}>Dentist</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Book Appointment
</a>
            </div>
        </li>
        <li class="card"  style={{boxShadow:'1px 1px 7px 1px rgba(0, 0, 0, 0.2)'}}>
            <div>
            <img src={K}  className='img-fluidd
 rounded-circle' style={{width:'80px', height:'80px'
 }}></img>

                <div class="card-content">
                <h3 className=' text-center' style={{marginTop:'30px',marginRight:'-25px'}}>Dr.Khushnood</h3>
                  <p style={{marginTop:'-5px',marginRight:'-25px'}}>7 Years Experience</p>
                    <p style={{marginTop:'-20px',marginRight:'-25px'}}>Sexologist</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Book Appointment
</a>
            </div>
        </li>
        <li class="card"  style={{boxShadow:'1px 1px 7px 1px rgba(0, 0, 0, 0.2)'}}>
            <div>
                 <img src={S}  className='img-fluidd
 rounded-circle' style={{width:'80px', height:'80px'
 }}></img>

                <div class="card-content">
                <h3 className=' text-center' style={{marginTop:'30px',marginRight:'-25px'}}>Dr.Saad Ali </h3>
                  <p style={{marginTop:'-5px',marginRight:'-25px'}}>7 Years Experience</p>
                    <p style={{marginTop:'-20px',marginRight:'-25px'}}>Skin Specialist</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Book Appointment
</a>
            </div>
        </li>
        <li class="card"  style={{boxShadow:'1px 1px 7px 1px rgba(0, 0, 0, 0.2)'}}>
            <div>
            <img src={L}  className='img-fluidd
 rounded-circle' style={{width:'80px', height:'80px'
 }}></img>

                <div class="card-content">
                <h3 className=' text-center' style={{marginTop:'30px',marginRight:'-25px'}}>Dr.Zain-ul-Abideen </h3>
                  <p style={{marginTop:'-5px',marginRight:'-25px'}}>10 Years Experience</p>
                    <p style={{marginTop:'-20px',marginRight:'-25px'}}>Specialist Gynecologist</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Book Appointment
</a>
            </div>
        </li>
        <li class="card"  style={{boxShadow:'1px 1px 7px 1px rgba(0, 0, 0, 0.2)'}}>
            <div>
            <img src={F}  className='img-fluidd
 rounded-circle' style={{width:'80px', height:'80px'
 }}></img>

                <div class="card-content">
                <h3 className=' text-center' style={{marginTop:'30px',marginRight:'-25px'}}>Dr.Farhan</h3>
                  <p style={{marginTop:'-5px',marginRight:'-25px'}}>7 Years Experience</p>
                    <p style={{marginTop:'-20px',marginRight:'-25px'}}>Heart Specialist</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Book Appointment
</a>
            </div>
        </li>
        <li class="card"  style={{boxShadow:'1px 1px 7px 1px rgba(0, 0, 0, 0.2)'}}>
            <div>
            <img src={L}  className='img-fluidd
 rounded-circle' style={{width:'80px', height:'80px'
 }}></img>

                <div class="card-content">
                <h3 className=' text-center' style={{marginTop:'30px',marginRight:'-25px'}}>Dr.Farhan Ali </h3>
                  <p style={{marginTop:'-5px',marginRight:'-25px'}}>7 Years Experience</p>
                    <p style={{marginTop:'-20px',marginRight:'-25px'}}>Dentist</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Book Appointment
</a>
            </div>
        </li>
        <li class="card"  style={{boxShadow:'1px 1px 7px 1px rgba(0, 0, 0, 0.2)'}}>
            <div>
            <img src={S}  className='img-fluidd
 rounded-circle' style={{width:'80px', height:'80px'
 }}></img>

                <div class="card-content">
                <h3 className=' text-center' style={{marginTop:'30px',marginRight:'-25px'}}>Dr.Abdul Moiz</h3>
                  <p style={{marginTop:'-5px',marginRight:'-25px'}}>7 Years Experience</p>
                    <p style={{marginTop:'-20px',marginRight:'-25px'}}>Dentist</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Book Appointment
</a>
            </div>
        </li>
        <li class="card"  style={{boxShadow:'1px 1px 7px 1px rgba(0, 0, 0, 0.2)'}}>
            <div>
            <img src={K}  className='img-fluidd
 rounded-circle' style={{width:'80px', height:'80px'
 }}></img>

                <div class="card-content">
                <h3 className=' text-center' style={{marginTop:'30px',marginRight:'-25px'}}>Dr.Tahreem</h3>
                  <p style={{marginTop:'-5px',marginRight:'-25px'}}>7 Years Experience</p>
                    <p style={{marginTop:'-20px',marginRight:'-25px'}}>Dentist</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Book Appointment
</a>
            </div>
        </li>
        <li class="card"  style={{boxShadow:'1px 1px 7px 1px rgba(0, 0, 0, 0.2)'}}>
            <div>
            <img src={F}  className='img-fluidd
 rounded-circle' style={{width:'80px', height:'80px'
 }}></img>

                <div class="card-content">
                <h3 className=' text-center' style={{marginTop:'30px',marginRight:'-25px'}}>Dr.Saima</h3>
                  <p style={{marginTop:'-5px',marginRight:'-25px'}}>7 Years Experience</p>
                    <p style={{marginTop:'-20px',marginRight:'-25px'}}>Dentist</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Book Appointment
</a>
            </div>
        </li>
        <li class="card"  style={{boxShadow:'1px 1px 7px 1px rgba(0, 0, 0, 0.2)'}}>
            <div>
            <img src={S}  className='img-fluidd
 rounded-circle' style={{width:'80px', height:'80px'
 }}></img>

                <div class="card-content">
                <h3 className=' text-center' style={{marginTop:'30px',marginRight:'-25px'}}>Dr. Sania </h3>
                  <p style={{marginTop:'-5px',marginRight:'-25px'}}>7 Years Experience</p>
                    <p style={{marginTop:'-20px',marginRight:'-25px'}}>Dentist</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Book Appointment
</a>
            </div>
        </li>
        <li class="card"  style={{boxShadow:'1px 1px 7px 1px rgba(0, 0, 0, 0.2)'}}>
            <div>
            <img src={L}  className='img-fluidd
 rounded-circle' style={{width:'80px', height:'80px'
 }}></img>

                <div class="card-content">
                <h3 className=' text-center' style={{marginTop:'30px',marginRight:'-25px'}}>Dr. Isma Batool </h3>
                  <p style={{marginTop:'-5px',marginRight:'-25px'}}>7 Years Experience</p>
                    <p style={{marginTop:'-20px',marginRight:'-25px'}}>Dentist</p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Book Appointment
</a>
            </div>
        </li>
        <li class="card"  style={{boxShadow:'1px 1px 7px 1px rgba(0, 0, 0, 0.2)'}}>
            <div>
            <img src={F}  className='img-fluidd
 rounded-circle' style={{width:'80px', height:'80px'
 }}></img>

                <div class="card-content">
                <h3 className=' text-center' style={{marginTop:'30px',marginRight:'-25px'}}>Dr.Ayesha Akram</h3>
                  <p style={{marginTop:'-5px',marginRight:'-25px'}}>7 Years Experience</p>
                    <p style={{marginTop:'-20px',marginRight:'-25px'}}>Skin Specialist                                                                                            </p>
                </div>
            </div>
            <div class="card-link-wrapper">
                <a href="" class="card-link">Book Appointment
</a>
            </div>
        </li>
    </ul>
</div>
    </div>
  )
}

export default Arrow