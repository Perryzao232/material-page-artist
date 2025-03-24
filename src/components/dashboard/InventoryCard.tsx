
import React from 'react';
import { Eye } from 'lucide-react';

const inventoryData = [
  { name: 'Marble name', quantity: '34', value: '57' },
  { name: 'Sandstone name', quantity: '31', value: '47' },
  { name: 'Granite name', quantity: '28', value: '32' },
];

const InventoryCard = () => {
  return (
    <div className="dashboard-card h-full">
      <div className="dashboard-card-header">
        <div className="dashboard-card-title">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          Inventory
        </div>
        <div>
          <Eye size={18} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
      
      <div className="grid grid-cols-5 gap-4 mb-6">
        <div className="stat-card">
          <div className="stat-value">125</div>
          <div className="stat-label">Stones</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">3665.2 m²</div>
          <div className="stat-label">Slabs total area</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">45</div>
          <div className="stat-label">Remnants</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">415.5 m²</div>
          <div className="stat-label">Remnants total area</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">45</div>
          <div className="stat-label">Being processed</div>
        </div>
      </div>
      
      <div className="grid grid-cols-5 gap-4">
        <div className="stat-card">
          <div className="stat-value">24</div>
          <div className="stat-label">Pre process</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">16</div>
          <div className="stat-label">Arrived</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">05</div>
          <div className="stat-label">Delayed</div>
        </div>
      </div>
      
      <div className="mt-6">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Material name</th>
              <th>Build capacity</th>
              <th>Current value</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.value}</td>
                <td className="priority-low">Low threshold</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-right">
        <span className="see-more">See more</span>
      </div>
    </div>
  );
};

export default InventoryCard;
