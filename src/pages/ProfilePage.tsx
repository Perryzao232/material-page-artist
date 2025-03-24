
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-dashboard-background text-white">
      <Sidebar />
      
      <div className="ml-16">
        <Header />
        
        <main className="p-6">
          <div className="bg-dashboard-card p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-6">Perfil do Usuário</h1>
            
            <div className="space-y-6">
              <p>Esta é a página de perfil. Aqui você pode adicionar o conteúdo específico para esta seção.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
