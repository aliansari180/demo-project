import React from 'react';
import  './Certificate.css'
import {  useNavigate } from 'react-router-dom';


function Certificates() {
    const navigate = useNavigate();

    const handleNav = () => {
        // Navigate to the portfolio page
        navigate('/portfolio');
      }
    const moveNav = () => {
        // Navigate to the portfolio page
        navigate('/contact');
      }
    
  return (
    <>
    <div class="ribbon"><a  href="https://github.com/aliansari180" title="@aliansari180">FOLLOW ON GITHUB</a></div>

    <div className="arrow-container" id="arrow" onClick={moveNav}>
        <span className="arrow-text">Contact</span>
        <img src="arr.png" alt="" className="arrow" />
      </div>

        <div className="arrow-container1" id="arrow" onClick={handleNav}>
        <span className="arrow-text1">portfolio</span>
        <img src="arr.png" alt="" className="arrow1" />
      </div>

<div>
    <h2 className='heading'>Certifications</h2>
</div>
   <div className='MainCertificates'>

  <div>
    <a href='https://www.coursera.org/account/accomplishments/professional-cert/BQMFKV92HL4B'>
    <img src="metacert.jpg"  alt="certificate" />
    </a>
  </div>
  <div>
    <img src="digital.jpg" alt="certificate" />
  </div>
  <div>
    <img src="digital.jpg" alt="certificate" />
  </div>
  <div>
    <img src="digital.jpg" alt="certificate" />
  </div>
  <div>
    <img src="digital.jpg" alt="certificate" />
  </div>
  <div>
    <img src="digital.jpg" alt="certificate" />
  </div>
  <div>
    <img src="digital.jpg" alt="certificate" />
  </div>
  <div>
    <img src="digital.jpg" alt="certificate" />
  </div>
  <div>
    <img src="digital.jpg" alt="certificate" />
  </div>
</div>




       
        </>
  );
}

export default Certificates;
