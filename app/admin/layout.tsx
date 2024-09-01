// app/dashboard/layout.tsx
import React from 'react';
import type { ReactNode } from 'react';


interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
     
      <main className="flex-grow container mx-auto px-4">
        {children}
      </main>
     
    </div>
  );
};

export default DashboardLayout;
