import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow" style={{ background: '#fbd66e' }}> 
      <div className="container">
        {/* Navbar Brand */}
        <Link className="navbar-brand fw-bold fs-3" to="/">
          OrganicStore
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isNavbarOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div
          className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto text-center gap-3">
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold fs-5" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold fs-5" to="/aboutus">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold fs-5" to="/products">
                Products
              </Link>
            </li>
          </ul>

          {/* Search Box and "Fevorts" Text */}
          <form className="d-flex align-items-center ms-auto mt-3 mt-lg-0 gap-3">
          <span className="text-danger fw-bold fs-5">Fevorts</span>

            <input
              className="form-control rounded-pill"
              type="search"
              placeholder="Search products..."
              aria-label="Search"
            />
            <button
              className="btn btn-light text-primary rounded-pill"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
