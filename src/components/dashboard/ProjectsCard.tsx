
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Eye } from 'lucide-react';

const data = [
  { name: '200', value1: 300, value2: 250, value3: 200, value4: 100 },
  { name: '150', value1: 200, value2: 190, value3: 180, value4: 140 },
  { name: '100', value1: 100, value2: 150, value3: 120, value4: 80 },
  { name: '50', value1: 50, value2: 90, value3: 60, value4: 40 },
];

const projectTypes = [
  { name: 'Finished', color: '#4caf50' },
  { name: 'On-site', color: '#ab47bc' },
  { name: 'Waiting', color: '#ffc107' },
  { name: 'Waiting', color: '#42a5f5' },
];

const ProjectsCard = () => {
  return (
    <div className="dashboard-card h-full">
      <div className="dashboard-card-header">
        <div className="dashboard-card-title">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          Projects created
        </div>
        <div>
          <Eye size={18} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
      
      <div className="h-[150px] mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#666' }} />
            <YAxis hide />
            <Bar dataKey="value1" fill="#4caf50" radius={[4, 4, 0, 0]} />
            <Bar dataKey="value2" fill="#ab47bc" radius={[4, 4, 0, 0]} />
            <Bar dataKey="value3" fill="#ffc107" radius={[4, 4, 0, 0]} />
            <Bar dataKey="value4" fill="#42a5f5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex flex-wrap">
        {projectTypes.map((type, index) => (
          <div key={index} className="flex items-center mr-4 mb-2">
            <div 
              className="w-3 h-3 rounded-sm mr-2" 
              style={{ backgroundColor: type.color }}
            ></div>
            <div className="text-sm">{type.name}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-2 text-right">
        <span className="see-more">More details</span>
      </div>
    </div>
  );
};

export default ProjectsCard;
