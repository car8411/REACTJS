import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Header.css';

function Header() {
  return (
    <header Class="ss">
      <h1>My Website</h1> {/* 웹사이트 타이틀 또는 로고 */}
      <NavBar/>
      {/* 네비게이션 바 */}
    
    </header>
  );
}
export default Header;
