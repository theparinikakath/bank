import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg">
        {/* Navbar Content */}
        <div className="container">
          <Link className="navbar-brand fs-3 fw-bold" to="/">
            CryptoBank
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>

              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Us
                </a>

              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Us
                </a>
              </li>
              {user ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/transactions">
                      <i className="fas fa-exchange-alt"></i> Transactions
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button onClick={onLogout} className="btn btn-outline-light ms-3 custom-logout-btn">
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Inline CSS */}
      <style jsx>{`
        /* Custom navbar styles */
        .navbar {
          padding: 1rem 2rem; /* Add some padding */
        }

        .navbar-brand {
          font-weight: bold;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .nav-link {
          color: #fff !important; /* Ensure the link text is white */
          font-weight: 500;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .nav-link:hover {
          color: #ffcc00 !important; /* Change color on hover */
          transform: scale(1.1); /* Slightly enlarge on hover */
        }

        .navbar-toggler-icon {
          background-color: #fff; /* White icon for better contrast */
        }

        .custom-logout-btn {
          border-radius: 25px; /* Rounded edges for the button */
          padding: 8px 20px;
          font-weight: 500;
          background-color: #ff5733; /* A bright color for the logout button */
          transition: background-color 0.3s ease;
        }

        .custom-logout-btn:hover {
          background-color: #c0392b; /* Darker red on hover */
          color: white;
        }

        .navbar-nav .nav-item {
          margin-left: 1rem;
        }

        /* Mobile responsiveness */
        @media (max-width: 767px) {
          .navbar {
            padding: 1rem;
          }

          .navbar-nav {
            text-align: center;
          }

          .nav-link {
            padding: 0.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
