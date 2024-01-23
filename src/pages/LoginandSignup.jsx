import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './CSS/LoginandSignup.css';
import { Link } from 'react-router-dom'

export const LoginandSignup = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="loginsignup p-4">
            <div className="loginsignup-container bg-light p-4 rounded">
              <h1 className="mb-4 text-center text-danger">Sign Up</h1>
              <div className="loginsignup-fields">
                <input type="text" className="form-control mb-3" placeholder="Your Name" />
                <input type="email" className="form-control mb-3" placeholder="Your Mail" />
                <input type="password" className="form-control mb-3" placeholder="Password" />
              </div>
              <button className="btn btn-danger btn-block w-300 mb-3">Continue</button>
              <p className="loginsignup-login text-center text-muted">
                Already have an account? <span><Link to='/loginhere'>Login here</Link></span>
              </p>
              <div className="loginsignup-agree form-check mb-3">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label text-muted">
                  By continuing, I agree to the terms of use & privacy policy.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};