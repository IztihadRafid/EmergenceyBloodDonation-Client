import React from 'react';
import Sidebar from './Sidebar';


const DashboardContent = () => {
  return (
    <div className="flex bg-gray-100 p-8 w-full">
      <div className='w-1/2'>
        <Sidebar></Sidebar>
        
      </div>
     <div className='w-1/2'>
     <h1 className="text-3xl font-semibold mb-6">Welcome, [User Name]</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white p-6 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4">Blood Donation History</h2>
          <p>View your previous blood donations and requests.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">View History</button>
        </div>
        <div className="bg-white p-6 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4">Request Blood</h2>
          <p>Submit a request to find the blood you need.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Request Blood</button>
        </div>
        <div className="bg-white p-6 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4">Donate Blood</h2>
          <p>Fill out a form to donate blood at a nearby hospital.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Donate Blood</button>
        </div>
        <div className="bg-white p-6 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4">Available Blood Tracker</h2>
          <p>Track blood availability in nearby hospitals and blood banks.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Track Blood</button>
        </div>
        <div className="bg-white p-6 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-4">Chat</h2>
          <p>Communicate directly with donors or recipients.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Go to Chat</button>
        </div>
      </div>
     </div>
    </div>
  );
}

export default DashboardContent;