import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/about/About';
import Contact from './components/Contact';
import Login from './components/login/Login';
import './styles/App.css';
import Layout from './components/layout/Layout'; // Layout이 모든 페이지에서 동일한 레이아웃 제공
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <div className="main-layout">
        <Sidebar/>
      <div className="content-area">
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
        </Routes>
      </div>
      </div>
      </div>
    </Router>
  );
}

export default App;