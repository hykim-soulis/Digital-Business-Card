import React from 'react';
import './index.css';

export default function Info() {
  return (
    <div>
      <div className="img-container">
        <img
          src="https://images.unsplash.com/photo-1646321570817-c22def764421?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          className="profile-img"
        />
      </div>
      <h1 className="name">Laura Smith</h1>
      <h4 className="developer">Frontend Developer</h4>
      <div className="website">laurasmit.website</div>
      <div className="buttons">
        <button className="email-btn">Email</button>
        <button className="linkedin-btn">LinkedIn</button>
      </div>
    </div>
  );
}
