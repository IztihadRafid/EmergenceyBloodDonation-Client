import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className=" bg-gray-800 h-full text-white p-4">
      <h2 className="text-xl font-semibold mb-8">User Dashboard</h2>
      <ul className="space-y-4">
        <li><Link to='/history' className="hover:text-gray-300">Blood Donation History</Link></li>
        <li><a href="/request-blood" className="hover:text-gray-300">Request Blood</a></li>
        <li><a href="/donate-blood" className="hover:text-gray-300">Donate Blood</a></li>
        <li><a href="/tracker" className="hover:text-gray-300">Available Blood Tracker</a></li>
        <li><a href="/chat" className="hover:text-gray-300">Chat</a></li>
        <li><a href="/profile" className="hover:text-gray-300">Profile</a></li>
        <li><a href="/settings" className="hover:text-gray-300">Settings</a></li>
        <li><a href="/logout" className="hover:text-gray-300">Logout</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;