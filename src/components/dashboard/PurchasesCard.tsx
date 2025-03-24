
import React from 'react';
import { Eye } from 'lucide-react';

const purchasesData = [
  { vendor: 'Vendor name', material: 'Marble name', quantity: '63', date: '12/01/2020', status: 'Delivered' },
  { vendor: 'Vendor name', material: 'Sandstone name', quantity: '07', date: '12/02/2020', status: 'Delayed' },
  { vendor: 'Vendor name', material: 'Granite name', quantity: '23', date: '13/02/2020', status: 'Delayed' },
];

const PurchasesCard = () => {
  return (
    <div className="dashboard-card h-full">
      <div className="dashboard-card-header">
        <div className="dashboard-card-title">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          Purchases
        </div>
        <div>
          <Eye size={18} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
      
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Vendor name</th>
            <th>Material name</th>
            <th>Quantity</th>
            <th>Arrival date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {purchasesData.map((item, index) => (
            <tr key={index}>
              <td>{item.vendor}</td>
              <td>{item.material}</td>
              <td>{item.quantity}</td>
              <td>{item.date}</td>
              <td className={item.status === 'Delayed' ? 'priority-urgent' : ''}>{item.status}</td>
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

export default PurchasesCard;
