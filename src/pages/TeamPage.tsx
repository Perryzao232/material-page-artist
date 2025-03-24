
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-dashboard-background text-white">
      <Sidebar />
      
      <div className="ml-16">
        <Header />
        
        <main className="p-6">
          <h1 className="text-2xl font-semibold mb-6">Equipe</h1>
          
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 bg-dashboard-card p-6 rounded-lg shadow-lg">
              <div className="space-y-6">
                <p>Esta é a página da equipe. Aqui você pode gerenciar membros e suas funções.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeamPage;
