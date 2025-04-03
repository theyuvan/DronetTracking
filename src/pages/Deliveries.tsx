import React from 'react';
import DroneSidebar from '@/components/DroneSidebar';

// Mock data for deliveries
const deliveryData = [
  { id: 'DEL-001', customer: 'John Smith', status: 'In Transit', eta: '15 min', address: '123 Main St' },
  { id: 'DEL-002', customer: 'Maria Garcia', status: 'Delivered', eta: '-', address: '456 Oak Ave' },
  { id: 'DEL-003', customer: 'Robert Chen', status: 'Preparing', eta: '40 min', address: '789 Pine Rd' },
  { id: 'DEL-004', customer: 'Sarah Johnson', status: 'In Transit', eta: '10 min', address: '101 Cedar Ln' },
  { id: 'DEL-005', customer: 'Michael Brown', status: 'Delayed', eta: '55 min', address: '202 Maple Dr' },
];

const Deliveries = () => {
  return (
    <div className="drone-tracker-grid">
      <div className="drone-sidebar">
        <DroneSidebar />
      </div>
      
      <div className="drone-main overflow-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-primary">Deliveries Management</h2>
          
          <div className="bg-secondary rounded-lg border border-gray-700 shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-secondary/50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">ID</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">Customer</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">ETA</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">Address</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-secondary divide-y divide-gray-700">
                {deliveryData.map((delivery) => (
                  <tr key={delivery.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">{delivery.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">{delivery.customer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        delivery.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        delivery.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                        delivery.status === 'Delayed' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {delivery.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">{delivery.eta}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">{delivery.address}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-2">View</a>
                      <a href="#" className="text-green-600 hover:text-green-900">Track</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliveries;