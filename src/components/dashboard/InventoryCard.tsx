
import React from 'react';
import { Eye } from 'lucide-react';

const inventoryData = [
  { name: 'Marble name', quantity: '321', value: '321', status: 'Low stock' },
  { name: 'Sandstone name', quantity: '34', value: '37', status: 'Low stock' },
  { name: 'Granite name', quantity: '45', value: '32', status: 'Medium level' },
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
      
      <div className="flex mb-6">
        <div className="w-1/5 stat-card">
          <div className="stat-value">125</div>
          <div className="stat-label">Slabs</div>
        </div>
        <div className="w-1/5 stat-card">
          <div className="stat-value">3665.2 m²</div>
          <div className="stat-label">Slabs total area</div>
        </div>
        <div className="w-1/5 stat-card">
          <div className="stat-value">45</div>
          <div className="stat-label">Remnants</div>
        </div>
        <div className="w-1/5 stat-card">
          <div className="stat-value">415.5 m²</div>
          <div className="stat-label">Remnants total area</div>
        </div>
        <div className="w-1/5 stat-card">
          <div className="stat-value">45</div>
          <div className="stat-label">Slabs ordered</div>
        </div>
      </div>
      
      <div className="flex mb-6">
        <div className="w-1/3 stat-card">
          <div className="stat-value">24</div>
          <div className="stat-label">Pre ordered</div>
        </div>
        <div className="w-1/3 stat-card">
          <div className="stat-value">16</div>
          <div className="stat-label">Arrived</div>
        </div>
        <div className="w-1/3 stat-card">
          <div className="stat-value">05</div>
          <div className="stat-label">Delayed</div>
        </div>
      </div>
      
      <div className="mt-6">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Product name</th>
              <th>Stock quantity</th>
              <th>Quantity reserved</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.value}</td>
                <td className={item.status === 'Low stock' ? 'priority-urgent' : 'priority-medium'}>{item.status}</td>
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
