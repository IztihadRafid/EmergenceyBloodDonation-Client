import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import BloodDonationHistory from './Pages/BloodDonationHistory';
import RequestBlood from './Pages/RequestBlood';
import DonateBlood from './Pages/DonateBlood';
import AvailableBloodTracker from './Pages/AvailableBloodTracker';
import Chat from './Pages/Chat';
import Profile from './Pages/Profile';
import Navbar from '../Home/Navbar'
const DashboardContent = () => {
  const [activePage, setActivePage] = useState('profile');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderPage = () => {
    switch(activePage) {
      case 'history': return <BloodDonationHistory />;
      case 'request': return <RequestBlood />;
      case 'donate': return <DonateBlood />;
      case 'tracker': return <AvailableBloodTracker />;
      case 'chat': return <Chat />;
      case 'profile': return <Profile />;
      default: return <Profile />;
    }
  };

  return (
    <div className='bg-red-50'>
      <Navbar></Navbar>
      <div className="flex flex-col min-h-screen ">
      {/* Mobile Header */}
      <header className="md:hidden bg-red-50 text-white p-4 flex items-center justify-between">
        <button 
          className="text-white"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-xl font-bold">Dashboard</h1>
        <div className="w-6"></div> {/* Placeholder for balance */}
      </header>

      <div className="flex flex-1">
        <Sidebar 
          setActivePage={setActivePage} 
          activePage={activePage} 
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div className="flex-1 p-4 md:p-10">
          {renderPage()}
        </div>
      </div>
    </div>
    </div>
  );
}

export default DashboardContent;
