
import React from 'react';
import { Eye } from 'lucide-react';

const purchasesData = [
  { supplier: 'Stones max', material: 'Marble name', quantity: '12', date: '01/01/2025', status: 'Overdue' },
  { supplier: 'Stones max', material: 'Sandstone name', quantity: '02', date: '12/02/2025', status: 'Overdue' },
  { supplier: 'The machine', material: 'Granite name', quantity: '05', date: '15/02/2025', status: 'Overdue' },
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
            <th>Supplier name</th>
            <th>Material name</th>
            <th>Quantity</th>
            <th>Arrival date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {purchasesData.map((item, index) => (
            <tr key={index}>
              <td>{item.supplier}</td>
              <td>{item.material}</td>
              <td>{item.quantity}</td>
              <td>{item.date}</td>
              <td className="priority-urgent">{item.status}</td>
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
