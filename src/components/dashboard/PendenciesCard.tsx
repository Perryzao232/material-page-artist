
import React from 'react';
import { Eye } from 'lucide-react';

const pendencies = [
  { id: '11298326', cause: 'Broken part', location: 'Kitchen sink', customer: 'Silvia Maria', project: 'Kitchen sink' },
  { id: '15485232', cause: 'Process stopped', location: 'Fireplace warm', customer: 'Tom Hanks', project: 'Fireplace warm' },
  { id: '36987526', cause: 'Scratch', location: 'Bathroom clean', customer: 'Maria Teodora', project: 'Bathroom clean' }
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
            <div className="text-lg font-bold">Alarming number of</div>
          </div>
          <div className="stat-label">pendencies</div>
        </div>
      </div>
      
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Project Id</th>
            <th>Cause</th>
            <th>Project name</th>
            <th>Customer name</th>
          </tr>
        </thead>
        <tbody>
          {pendencies.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.cause}</td>
              <td>{item.project}</td>
              <td>{item.customer}</td>
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
