import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../componets/Header';
import Footer from '../componets/Footer';

function Landing() {
  return (
    <div>
      <Header/>
      <div
  className="d-flex flex-column justify-content-center text-white text-center text-sm-start ps-4 ps-md-5 ps-0"
  style={{
    backgroundImage: "url('https://themewagon.github.io/organic/images/banner-1.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    padding: '0 0px',  // No top or bottom padding
  }}
>
  <h1 className="display-4">
    <span style={{ fontWeight: '800', color: 'black', fontSize: '4rem' }}>
      Organic
    </span>{' '}
    <span style={{ fontWeight: '800', color: 'white', fontSize: '4rem' }}>
      Foods
    </span>
    <br />
    <span style={{ fontWeight: '300', color: '#333' }}>
      at your
    </span>{' '}
    <span style={{ fontWeight: '800', color: 'black', fontSize: '4rem' }}>
      Doorstep
    </span>
  </h1>

  <p className="lead" >
    Dignissim massa diam elementum.
  </p>

  <div>
    <button className="btn btn-success me-3 rounded-pill px-4 py-2 shadow">
      Start Shopping
    </button>
    <button className="btn btn-outline-light rounded-pill px-4 py-2 shadow" style={{ border: '2px solid white' }}>
      Join Now
    </button>
  </div>

  {/* New Text Content Section */}
  <div className="mt-4  ">
    <h3 style={{ fontWeight: '700', color: 'black' }}>
      Why Choose Us?
    </h3>
    <p className="lead" style={{ color: 'black' }}>
      We provide the best organic products directly from the farm <br /> to your doorstep. Our focus is on quality and sustainability, ensuring
      <br /> you get only the freshest and healthiest produce.
    </p>
  </div>
</div>



      {/* Features Section */}
      <div className="p-5 "  style={{ background: '#fbd66e' }}>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center justify-content-between p-4" style={{ backgroundColor: '#6bb252', color: 'white', borderRadius: '10px' }}>
              <i className="fas fa-leaf" style={{ fontSize: '50px' }}></i>
              <div className="text-left" style={{ width: '70%' }}>
                <h2>Fresh from Farm</h2>
                <p>We deliver farm-fresh organic produce to your door.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center justify-content-between p-4" style={{ backgroundColor: '#f95f09', color: 'white', borderRadius: '10px' }}>
              <i className="fas fa-seedling" style={{ fontSize: '50px' }}></i>
              <div className="text-left" style={{ width: '70%' }}>
                <h2>100% Organic</h2>
                <p>All our products are certified organic and chemical-free.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center justify-content-between p-4" style={{ backgroundColor: '#364127', color: 'white', borderRadius: '10px' }}>
              <i className="fas fa-truck" style={{ fontSize: '50px' }}></i>
              <div className="text-left" style={{ width: '70%' }}>
                <h2>Free Delivery</h2>
                <p>Enjoy free delivery on all orders, no minimum required.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Landing;
