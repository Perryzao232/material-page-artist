
import React from 'react';
import { Eye } from 'lucide-react';

const pendingData = [
  { id: '07127456', customer: 'Customer name', location: 'Kitchen', days: '29 days', priority: 'Unsigned' },
  { id: '46915746', customer: 'Customer name', location: 'Bathroom', days: '34 days', priority: 'Unsigned' },
  { id: '28114522', customer: 'Customer name', location: 'Stairs', days: '162 days', priority: 'Unsigned' }
];

const PendingCard = () => {
  return (
    <div className="dashboard-card h-full">
      <div className="dashboard-card-header">
        <div className="dashboard-card-title">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          Pending to sing
        </div>
        <div className="flex items-center">
          <div className="avatar bg-pink-600 mr-2">V</div>
          <Eye size={18} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
      
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Project Id</th>
            <th>Customer name</th>
            <th>Location</th>
            <th>Days</th>
            <th>Sign</th>
          </tr>
        </thead>
        <tbody>
          {pendingData.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.customer}</td>
              <td>{item.location}</td>
              <td>{item.days}</td>
              <td className="priority-urgent">{item.priority}</td>
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
