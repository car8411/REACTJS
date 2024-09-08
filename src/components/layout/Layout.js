import React from 'react';
import Header from '../Header/Header';  // 헤더 컴포넌트 가져오기
import './Layout.css';   // 스타일 파일 가져오기 (선택 사항)
import Sidebar from '../Sidebar/Sidebar';

function Layout({ children }) {
  return (
    <div className="layout">  {/* 모든 페이지에 공통적으로 들어가는 헤더 */}
     <Header/>
     <Sidebar/>
     <main className="content">
        {children}  {/* 본문 영역, 각 페이지의 콘텐츠가 들어갈 곳 */}
      </main>
      <footer className="footer">
        <p>&copy; 2024 My Website. All rights reserved.</p>  {/* 푸터 */}
      </footer>
    </div>
  );
}

export default Layout;