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
  console.log("Redirecting to shop...");
  window.location.href = "https://www.google.com";
  return null; // This component will never render anything since it redirects immediately
}


export default function App() {
  console.log("App component rendered");
  console.log("Desired path:", window.location.pathname);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="alumni" element={<AlumniPage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

