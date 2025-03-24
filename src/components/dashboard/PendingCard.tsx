
import React from 'react';
import { Eye } from 'lucide-react';

const pendingData = [
  { id: '12871310', customer: 'Customer name', location: 'Kitchen', days: '14 days', priority: 'Urgent' },
  { id: '42861316', customer: 'Customer name', location: 'Bathroom', days: '14 days', priority: 'Urgent' },
  { id: '21346232', customer: 'Customer name', location: 'Stairs', days: '152 days', priority: 'Medium' }
];

const PendingCard = () => {
  return (
    <div className="dashboard-card h-full">
      <div className="dashboard-card-header">
        <div className="dashboard-card-title">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          Pending to ship
        </div>
        <div>
          <Eye size={18} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
      
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Project Id</th>
            <th>Customer</th>
            <th>Location</th>
            <th>Time</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {pendingData.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.customer}</td>
              <td>{item.location}</td>
              <td>{item.days}</td>
              <td className={`priority-${item.priority.toLowerCase()}`}>{item.priority}</td>
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

export default PendingCard;
