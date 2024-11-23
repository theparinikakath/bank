import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div>
      {/* Main Content */}
      <div className="container my-5">
        {/* Welcome Message */}
        <div className="text-center my-5">
          <h1>Welcome to CryptoBank</h1>
          <p>Your trusted partner for managing your finances.</p>
          <img
            src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3lwdG8lMjBiYW5rfGVufDB8fDB8fHww"
            alt="Banking"
            className="img-fluid rounded shadow-lg"
          />
        </div>

        {/* About Us Section */}
        <section id="about" className="about-us py-5">
          <div className="row">
            <div className="col-md-6">
              <h2>About Us</h2>
              <p>
                Welcome to our CryptoBank. We provide efficient and reliable banking services to our customers, ensuring seamless transactions and secure account management. Our system allows users to view balances, make transactions, and track their financial activities with ease.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.antiersolutions.com/wp-content/uploads/2022/06/Crypto-Banking-Transforming-the-Traditional-Banking-Paradigm.jpg.webp"
                alt="About Us"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features py-5">
          <h2 className="text-center mb-4">Features</h2>
          {/* Image in the Middle */}
          <div className="image-section text-center">
            <img
              src="https://img.freepik.com/premium-vector/bitcoin-cryptocurrency-technology_18591-41178.jpg"
              alt="Banking Image"
              className="img-fluid feature-img"
            />
          </div>
          <div className="row">
            <div className="col-md-4 text-center feature-card">
              <div className="card p-4">
                <h4>Secure Transactions</h4>
                <p>Our system ensures secure transactions for a safe banking experience.</p>
              </div>
            </div>
            <div className="col-md-4 text-center feature-card">
              <div className="card p-4">
                <h4>24/7 Support</h4>
                <p>Our support team is available around the clock to assist you with any issues.</p>
              </div>
            </div>
            <div className="col-md-4 text-center feature-card">
              <div className="card p-4">
                <h4>Easy Account Management</h4>
                <p>Track and manage your bank accounts easily from one place.</p>
              </div>
            </div>
            <div className="col-md-4 text-center feature-card">
              <div className="card p-4">
                <h4>Locker Access</h4>
                <p>Track and manage your bank lockers easily from one place.</p>
              </div>
            </div>
            <div className="col-md-4 text-center feature-card">
              <div className="card p-4">
                <h4>Loan Approvals</h4>
                <p>Track and manage your loan approvals easily from one place.</p>
              </div>
            </div>
            <div className="col-md-4 text-center feature-card">
              <div className="card p-4">
                <h4>Upcoming Features!!</h4>
                <p>Look out for our upcoming features and updates!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="contact-us py-5 bg-light">
          <div className="row">
            <div className="col-md-6">
              <h2>Contact Us</h2>
              <p>If you have any questions or feedback, feel free to reach out to us.</p>
              <p>+91-7897485971</p>
            </div>
            <div className="col-md-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvVXkFV1c6_5P-Ru59pM21tMidU-uM1EYevw&s"
                alt="Contact Us"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .navbar {
          margin-bottom: 40px;
        }

        .about-us,
        .contact-us,
        .features {
          padding: 40px;
          text-align: center;
          background-color: #ffffff;
          margin-top: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .about-us h2,
        .contact-us h2,
        .features h2 {
          color: #007bff;
        }

        .about-us p,
        .contact-us p,
        .features p {
          color: #495057;
          font-size: 16px;
          line-height: 1.5;
        }

        .features .feature-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          margin: 20px 0;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .features .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        .features .card h4 {
          color: #007bff;
        }

        .contact-us form input,
        .contact-us form textarea {
          width: 80%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .contact-us form button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .contact-us form button:hover {
          background-color: #0056b3;
        }

        .img-fluid {
          max-width: 100%;
          height: auto;
          transition: transform 0.3s ease; /* Add transition for smooth effect */
        }

        .img-fluid:hover {
          transform: scale(1.1); /* Zoom effect on hover */
        }

        .image-section img {
          width: 100%;
          height: auto;
        }

        /* Media Queries for the image in the features section */
        .feature-img {
          max-width: 80%; /* Make image smaller */
        }

        /* Landscape Mode */
        @media (min-width: 768px) {
          .feature-img {
            max-width: 35%; /* Make image slightly wider in landscape view */
          }
        }

        /* Portrait Mode */
        @media (orientation: portrait) {
          .feature-img {
            max-width: 40%; /* Keep image small in portrait */
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
