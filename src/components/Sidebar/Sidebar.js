import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // 사이드바 열림 상태 관리

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // 열기/닫기 상태 토글
  };

  return (
    <div>
      <button onClick={toggleSidebar}>
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
     </div>
    </div>
  );
}

export default Sidebar;