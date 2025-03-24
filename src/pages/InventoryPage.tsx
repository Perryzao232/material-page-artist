
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

const InventoryPage = () => {
  return (
    <div className="min-h-screen bg-dashboard-background text-white">
      <Sidebar />
      
      <div className="ml-16">
        <Header />
        
        <main className="p-6">
          <div className="bg-dashboard-card p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-6">Inventário</h1>
            
            <div className="space-y-6">
              <p>Esta é a página de inventário. Aqui você pode gerenciar produtos e estoque.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InventoryPage;
