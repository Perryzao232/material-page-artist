
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Eye } from 'lucide-react';

const data = [
  { name: '200', finished: 200, canceled: 150, waiting: 98, working: 64 },
];

const projectTypes = [
  { name: 'Finished', color: '#4caf50' },
  { name: 'Canceled', color: '#ab47bc' },
  { name: 'Waiting', color: '#ffc107' },
  { name: 'Working', color: '#42a5f5' },
];

const ProjectsCard = () => {
  return (
    <div className="dashboard-card h-full border-2 border-blue-500">
      <div className="dashboard-card-header">
        <div className="dashboard-card-title">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          Match
        </div>
        <div className="flex items-center">
          <div className="avatar bg-pink-600 mr-2">V</div>
          <Eye size={18} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
      
      <div className="mb-2">
        <div className="text-sm text-gray-400">Projects created</div>
      </div>
      
      <div className="h-[150px] mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" hide />
            <Bar dataKey="finished" stackId="a" fill="#4caf50" radius={[4, 4, 0, 0]} />
            <Bar dataKey="canceled" stackId="a" fill="#ab47bc" radius={[4, 4, 0, 0]} />
            <Bar dataKey="waiting" stackId="a" fill="#ffc107" radius={[4, 4, 0, 0]} />
            <Bar dataKey="working" stackId="a" fill="#42a5f5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-4 gap-2 mb-4">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold">200</div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-sm mr-1" style={{ backgroundColor: "#4caf50" }}></div>
            <div className="text-xs">Finished</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold">150</div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-sm mr-1" style={{ backgroundColor: "#ab47bc" }}></div>
            <div className="text-xs">Canceled</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold">98</div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-sm mr-1" style={{ backgroundColor: "#ffc107" }}></div>
            <div className="text-xs">Waiting</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold">64</div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-sm mr-1" style={{ backgroundColor: "#42a5f5" }}></div>
            <div className="text-xs">Working</div>
          </div>
        </div>
      </div>
      
      <div className="mb-2">
        <div className="text-sm font-medium">Pending to sing</div>
      </div>
      
      <table className="dashboard-table mb-2">
        <thead>
          <tr>
            <th>Project ID</th>
            <th>Customer name</th>
            <th>Project name</th>
            <th>Date open</th>
            <th>Sign</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>33282132</td>
            <td>Customer n...</td>
            <td>Kitchen</td>
            <td>29 days</td>
            <td className="priority-urgent">Unsigned</td>
          </tr>
          <tr>
            <td>122151584</td>
            <td>Customer n...</td>
            <td>Fireplace</td>
            <td>34 days</td>
            <td className="priority-urgent">Unsigned</td>
          </tr>
          <tr>
            <td>82265155</td>
            <td>Customer n...</td>
            <td>Bathroom</td>
            <td>162 days</td>
            <td className="priority-urgent">Unsigned</td>
          </tr>
        </tbody>
      </table>
      
      <div className="mt-2 text-right">
        <span className="see-more">See more</span>
      </div>
    </div>
  );
};

export default ProjectsCard;
