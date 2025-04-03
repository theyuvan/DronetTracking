import React from 'react';
import DroneSidebar from '@/components/DroneSidebar';
import DroneMap from '@/components/DroneMap';

// Mock data for drones on the map
const droneLocationData = [
  { id: 'DRN-001', lat: 37.7749, lng: -122.4194, battery: 78, speed: 15, status: 'In Transit' },
  { id: 'DRN-002', lat: 37.7739, lng: -122.4312, battery: 92, speed: 12, status: 'Returning' },
  { id: 'DRN-003', lat: 37.7833, lng: -122.4167, battery: 45, speed: 18, status: 'Delivery' },
  { id: 'DRN-004', lat: 37.7699, lng: -122.4103, battery: 65, speed: 0, status: 'Idle' },
];

const DroneMapPage = () => {
  return (
    <div className="drone-tracker-grid">
      <div className="drone-sidebar">
        <DroneSidebar />
      </div>
      
      <div className="drone-main overflow-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">Live Drone Map</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
            {droneLocationData.map(drone => (
              <div key={drone.id} className="bg-secondary p-4 rounded-lg border border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-primary">{drone.id}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    drone.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                    drone.status === 'Returning' ? 'bg-purple-100 text-purple-800' :
                    drone.status === 'Delivery' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>{drone.status}</span>
                </div>
                <div className="mt-2 text-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-muted-foreground">Battery</span>
                    <span className="text-primary">{drone.battery}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Speed</span>
                    <span className="text-primary">{drone.speed} mph</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-secondary p-1 rounded-lg border border-gray-700 shadow-sm h-[600px]">
            <DroneMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneMapPage;