
import React from 'react';
import DroneHeader from './DroneHeader';
import DroneSidebar from './DroneSidebar';
import DroneMap from './DroneMap';
import DeliveryCards from './DeliveryCards';
import DeliveryAnalytics from './DeliveryAnalytics';

const DroneDashboard = () => {
  return (
    <div className="drone-tracker-grid">
      <div className="drone-header">
        <DroneHeader />
      </div>
      
      <div className="drone-sidebar">
        <DroneSidebar />
      </div>
      
      <div className="drone-main overflow-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Live Drone Tracking</h2>
            <div className="bg-white p-1 rounded-lg border border-gray-200 shadow-sm h-[500px]">
              <DroneMap />
            </div>
            
            <div className="mt-6">
              <DeliveryAnalytics />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Active Deliveries</h2>
            <DeliveryCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneDashboard;
