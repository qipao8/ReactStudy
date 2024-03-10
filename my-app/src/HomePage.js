// HomePage.js
import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Home Page</h1>
      <div>
        <Button type="primary" style={{ margin: '0 10px' }}>
          <Link to="/register">Register</Link>
        </Button>
        <Button type="primary">
          <Link to="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
