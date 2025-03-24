
import React from 'react';
import { Eye } from 'lucide-react';

const pendencies = [
  { id: '346157436', part: 'Broken part', location: 'Kitchen sink', days: '14 days', status: 'Pending' },
  { id: '12346232', part: 'Process stopped', location: 'Fireplace veneer', days: '48 days', status: 'Waiting' },
  { id: '346157236', part: 'Scratch', location: 'Bathroom closet', days: '96 days', status: 'Manufacturing' }
];

const PendenciesCard = () => {
  return (
    <div className="dashboard-card h-full">
      <div className="dashboard-card-header">
        <div className="dashboard-card-title">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          Pendencies
        </div>
        <div>
          <Eye size={18} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
      
      <div className="flex mb-6">
        <div className="w-1/2 stat-card">
          <div className="stat-value text-dashboard-urgent">08</div>
          <div className="stat-label">Total</div>
        </div>
        <div className="w-1/2 stat-card">
          <div className="flex items-center justify-center">
            <div className="text-2xl font-bold mr-1">Alarming number of</div>
          </div>
          <div className="stat-label">pendencies</div>
        </div>
      </div>
      
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Project Id</th>
            <th>Part</th>
            <th>Location</th>
            <th>Days</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {pendencies.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.part}</td>
              <td>{item.location}</td>
              <td>{item.days}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="mt-4 text-right">
        <span className="see-more">See more</span>
      </div>
    </div>
  );
};

export default PendenciesCard;
