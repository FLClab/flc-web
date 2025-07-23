import React from 'react';
import './PageNotFound.css'; // Assuming you have a CSS file for styling

function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <p>Page Not Found</p>
      <a href="/">Go Home</a>
    </div>
  );
}

export default PageNotFound;