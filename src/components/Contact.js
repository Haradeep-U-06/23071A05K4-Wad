import React from 'react';

const Contact = () => (
  <div className="container mt-5">
    <h2>Contact Us</h2>
    <form>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label className="form-label">Your Message</label>
        <textarea className="form-control" rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Send</button>
    </form>
  </div>
);

export default Contact;
