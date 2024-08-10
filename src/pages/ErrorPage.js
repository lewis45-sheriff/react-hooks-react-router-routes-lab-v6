import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div>
      <h1>Oops! Looks like something went wrong.</h1>
      <p>The page you're looking for doesn't exist or an error occurred.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default ErrorPage;