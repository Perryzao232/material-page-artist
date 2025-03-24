
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import InventoryCard from '@/components/dashboard/InventoryCard';

const InventoryPage = () => {
  return (
    <div className="min-h-screen bg-dashboard-background text-white">
      <Sidebar />
      
      <div className="ml-16">
        <Header />
        
        <main className="p-6">
          <h1 className="text-2xl font-semibold mb-6">Inventário</h1>
          
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <InventoryCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InventoryPage;
