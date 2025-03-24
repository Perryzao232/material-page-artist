
import React from 'react';
import { Eye } from 'lucide-react';

const projects = [
  { id: '346157436', part: 'Table name', project: 'Project name', measurement: '123.4 m²', material: 'Maple' },
  { id: '12346232', part: 'Table name', project: 'Project name', measurement: '742.8 m²', material: 'Granite' },
  { id: '346157236', part: 'Table name', project: 'Project name', measurement: '24.1 m²', material: 'Onyx' }
];

const SchedulingCard = () => {
  return (
    <div className="dashboard-card h-full">
      <div className="dashboard-card-header">
        <div className="dashboard-card-title">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          Scheduling for the day
        </div>
        <div>
          <Eye size={18} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
      
      <div className="flex mb-6">
        <div className="w-1/2 stat-card">
          <div className="stat-value">36</div>
          <div className="stat-label">Total</div>
        </div>
        <div className="w-1/2 stat-card">
          <div className="stat-value">08</div>
          <div className="stat-label">Projects on going</div>
        </div>
      </div>
      
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Project Id</th>
            <th>Table name</th>
            <th>Project name</th>
            <th>Measurement</th>
            <th>Material</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.part}</td>
              <td>{item.project}</td>
              <td>{item.measurement}</td>
              <td>{item.material}</td>
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

export default SchedulingCard;
