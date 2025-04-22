import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // simulate register
    setIsLoggedIn(true);
    navigate('/eligibility');
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
