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

function Shop() {
  window.location.href = "https://www.google.com";
  return null; // This component will never render anything since it redirects immediately
}


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route
          path="/shop"
          element={
            window.location.pathname === "/shop"
              ? (() => {
                  window.location.href = "https://www.google.com";
                  return null;
                })()
              : null
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

