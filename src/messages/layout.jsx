
import React from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen w-full bg-white overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        <div className="flex-1 flex overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
