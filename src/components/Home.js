import React from 'react';
import './Home.css'; // Import the CSS file

function Home() {
   
 const handleclick = () => {
  alert('cliked');
 }

  return (
    <div>
      <button Class="first" onClick={handleclick}>Home Page</button>
      <input type="text" placeholder="Enter text"></input>
      <button id="ad" onClick={() => window.location.href = 'https://jihunchja.com'}>Link</button>;
      </div>
  );
}

export default Home;


/*function Home() {
  // 버튼이 눌렸을 때 실행할 함수
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      {/* 버튼 클릭 시 handleClick 함수가 실행됩니다 <button className="first" onClick={handleClick}>Home Page</button>
      </div> */
      