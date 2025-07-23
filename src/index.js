import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './Layout';
import AlumniPage from './AlumniPage';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

function PageNotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      color: 'white',
      fontFamily: 'Segoe UI, Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '4rem', margin: 0 }}>404</h1>
      <p style={{ fontSize: '1.5rem', margin: '1rem 0' }}>Page Not Found</p>
      <a href="/" style={{
        marginTop: '1rem',
        padding: '0.5rem 1.5rem',
        background: '#ff9100',
        color: '#fff',
        borderRadius: '4px',
        textDecoration: 'none',
        fontWeight: 'bold',
        boxShadow: '0 2px 8px rgba(37,99,235,0.1)'
      }}>
        Go Home
      </a>
    </div>
  );
}

function Shop() {
  window.location.href = "http://172.16.1.169:5050";
  return null; // This component will never render anything since it redirects immediately
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="alumni" element={<AlumniPage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

