import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function AboutUs() {
  
  return (
    
    <div style={{ background: '#fbd66e' ,paddingTop:'100px',paddingBottom:'50px'}}>
    <section className="container ">
      <div className="row align-items-center">
        {/* Left side: Image */}
        <div className="col-md-6">
          <img
            src="https://themewagon.github.io/organic/images/banner-ad-1.jpg"
            alt="About Us"
            className="img-fluid"
            style={{ borderRadius: '10px' }}
          />
        </div>

        {/* Right side: Heading and Text */}
        <div className="col-md-6 mt-4 mt-md-0">
          <h2 className="mb-4" style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
            About Our Company
          </h2>
          <p style={{ fontSize: '1.25rem' }}>
            We are a company dedicated to providing the highest quality organic
            products to our customers. Our team works diligently to ensure that
            every product we offer is fresh, organic, and delivered with care.
            With a passion for sustainability and a commitment to excellence, we
            strive to make healthy living easy and accessible for everyone.
          </p>
          <p style={{ fontSize: '1.25rem' }}>
            Our mission is to bring fresh, farm-to-table organic food directly to
            your doorstep. We believe that organic food should be affordable,
            nutritious, and available to everyone. Join us in our journey towards a
            healthier, more sustainable future.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}

export default AboutUs;
