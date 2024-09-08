import React from 'react';
import NavBar from './NavBar';
import './Header.css';

function header() {
  return (
    <header>
      <h1>My Website</h1> {/* 웹사이트 타이틀 또는 로고 */}
      <NavBar /> {/* 네비게이션 바 */}
    </header>
  );
}

export default header;
