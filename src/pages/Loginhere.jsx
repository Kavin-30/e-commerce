import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './CSS/Login.css';

export const Loginhere = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="login p-4">
            <div className="login-container bg-light p-4 rounded">
              <h1 className="mb-4 text-center text-danger">Login</h1>
              <div className="login-fields">
                <input type="email" className="form-control mb-3" placeholder="Your Mail" />
                <input type="password" className="form-control mb-3" placeholder="Password" />
              </div>
              <button className="btn btn-danger btn-block w-300 mb-3">Login</button>
              <div className="login-agree form-check mb-3">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label text-muted">
                  I agree to the terms of use & privacy policy.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};