
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Eye } from 'lucide-react';

const data = [
  { name: 'Testing (143 quotes)', value: 45, color: '#4caf50' },
  { name: 'Won (273 quotes)', value: 27, color: '#e25563' },
  { name: 'Lost (722 quotes)', value: 28, color: '#ffc107' }
];

const QuotesCard = () => {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card-header">
        <div className="dashboard-card-title">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          Easy quote
        </div>
        <div>
          <Eye size={18} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
      
      <div className="mb-4">
        <div className="text-sm text-gray-400 mb-2">Quotes created</div>
      </div>
      
      <div className="flex items-center">
        <div className="w-1/2 h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ background: '#333', border: 'none', borderRadius: '4px' }}
                itemStyle={{ color: '#fff' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="w-1/2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center mb-3">
              <div 
                className="w-3 h-3 rounded-sm mr-2" 
                style={{ backgroundColor: item.color }}
              ></div>
              <div className="text-sm">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuotesCard;
