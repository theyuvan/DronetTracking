import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts';
import DroneSidebar from '@/components/DroneSidebar';

// Mock data for analytics
const deliveryData = [
  { name: 'Mon', deliveries: 12, returns: 2 },
  { name: 'Tue', deliveries: 19, returns: 1 },
  { name: 'Wed', deliveries: 15, returns: 0 },
  { name: 'Thu', deliveries: 22, returns: 3 },
  { name: 'Fri', deliveries: 28, returns: 2 },
  { name: 'Sat', deliveries: 24, returns: 1 },
  { name: 'Sun', deliveries: 10, returns: 0 },
];

const efficiencyData = [
  { name: 'Week 1', efficiency: 85 },
  { name: 'Week 2', efficiency: 88 },
  { name: 'Week 3', efficiency: 92 },
  { name: 'Week 4', efficiency: 90 },
];

const Analytics = () => {
  return (
    <div className="drone-tracker-grid">
      <div className="drone-sidebar">
        <DroneSidebar />
      </div>
      
      <div className="drone-main overflow-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-primary">Delivery Analytics</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-secondary p-4 rounded-lg border border-gray-700 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-primary">Weekly Deliveries</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={deliveryData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#F9FAFB' }} />
                  <Legend />
                  <Bar dataKey="deliveries" fill="#3B82F6" name="Deliveries" />
                  <Bar dataKey="returns" fill="#EF4444" name="Returns" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-secondary p-4 rounded-lg border border-gray-700 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-primary">Efficiency Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={efficiencyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#F9FAFB' }} />
                  <Legend />
                  <Line type="monotone" dataKey="efficiency" stroke="#10B981" name="Efficiency %" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-secondary p-4 rounded-lg border border-gray-700">
              <h3 className="text-md font-semibold mb-2 text-primary">Total Deliveries</h3>
              <p className="text-3xl font-bold text-primary">1,248</p>
              <p className="text-sm text-green-500">↑ 12% from last month</p>
            </div>
            
            <div className="bg-secondary p-4 rounded-lg border border-gray-700">
              <h3 className="text-md font-semibold mb-2 text-primary">Average Delivery Time</h3>
              <p className="text-3xl font-bold text-primary">18 min</p>
              <p className="text-sm text-green-500">↓ 5% from last month</p>
            </div>
            
            <div className="bg-secondary p-4 rounded-lg border border-gray-700">
              <h3 className="text-md font-semibold mb-2 text-primary">Customer Satisfaction</h3>
              <p className="text-3xl font-bold text-primary">92%</p>
              <p className="text-sm text-green-500">↑ 3% from last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;