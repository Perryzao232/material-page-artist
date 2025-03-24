
import React, { useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import QuotesCard from '@/components/dashboard/QuotesCard';
import PendingCard from '@/components/dashboard/PendingCard';
import ProjectsCard from '@/components/dashboard/ProjectsCard';
import SchedulingCard from '@/components/dashboard/SchedulingCard';
import PendenciesCard from '@/components/dashboard/PendenciesCard';
import InventoryCard from '@/components/dashboard/InventoryCard';
import PurchasesCard from '@/components/dashboard/PurchasesCard';

const Index = () => {
  useEffect(() => {
    // Animation sequence for dashboard cards
    const cards = document.querySelectorAll('.dashboard-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate-scale-in');
      }, 100 + index * 100);
    });
  }, []);

  return (
    <div className="min-h-screen bg-dashboard-background text-white">
      <Sidebar />
      
      <div className="ml-16">
        <Header />
        
        <main className="p-6">
          <h1 className="text-2xl font-semibold mb-6">Fusion dashboard</h1>
          
          <div className="grid grid-cols-12 gap-6">
            {/* First row */}
            <div className="col-span-12 md:col-span-5 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              <QuotesCard />
            </div>
            
            <div className="col-span-12 md:col-span-7 opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <ProjectsCard />
            </div>
            
            {/* Second row */}
            <div className="col-span-12 md:col-span-5 opacity-0 animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <PendingCard />
            </div>
            
            <div className="col-span-12 md:col-span-7 opacity-0 animate-fade-in" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              <PendenciesCard />
            </div>
            
            {/* Third row */}
            <div className="col-span-12 md:col-span-5 opacity-0 animate-fade-in" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
              <InventoryCard />
            </div>
            
            <div className="col-span-12 md:col-span-7 opacity-0 animate-fade-in" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
              <PurchasesCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
