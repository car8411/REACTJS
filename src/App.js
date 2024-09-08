import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Company from './components/Companyintroduce';
import Login from './components/Login';
import './styles/App.css';
import Layout from './components/Layout'; // Layout이 모든 페이지에서 동일한 레이아웃 제공
import Sidebar from './components/Sidebar';
import './styles/Sidebar.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Sidebar />
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/companyintroduce" element={<Layout><Company /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;