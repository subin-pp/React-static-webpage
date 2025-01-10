import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer
      className="text-dark py-4 shadow-lg"
      style={{ background: '#fbd66e' }}
    >
      <div className="container ">
        <div className="row">
          {/* Section 1: Brand Name and Icons */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h2 className="fw-bold">OrganicStore</h2>
            <p className="mt-2">
              We offer a wide range of organic products to help you live a healthier, greener lifestyle.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-dark fs-4">
                <FaInstagram />
              </a>
              <a href="#" className="text-dark fs-4">
                <FaTwitter />
              </a>
              <a href="#" className="text-dark fs-4">
                <FaFacebook />
              </a>
              <a href="#" className="text-dark fs-4">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h4 className="fw-bold">Quick Links</h4>
            <ul className="list-unstyled mt-3">
              <li><a href="#" className="text-dark text-decoration-none">Home</a></li>
              <li><a href="#" className="text-dark text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Products</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Section 3: Our Services */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h4 className="fw-bold">Our Services</h4>
            <ul className="list-unstyled mt-3">
              <li><a href="#" className="text-dark text-decoration-none">Organic Farming</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Home Delivery</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Custom Orders</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Consultations</a></li>
            </ul>
          </div>

          {/* Section 4: Contact Us */}
          <div className="col-lg-3 col-md-12">
            <h4 className="fw-bold">Contact Us</h4>
            <p className="mt-3">Stay updated with our latest products and offers.</p>
            <form className="mt-3">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control rounded-pill"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button className="btn btn-dark rounded-pill" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
