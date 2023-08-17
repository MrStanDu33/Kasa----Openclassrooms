import './components/index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Error from './components/Error/Error';
import AccomodationPage from './components/AccomodationPage/accomodationPage';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/accomodationpage" element={<AccomodationPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
