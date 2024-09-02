// app/dashboard/layout.tsx
import AdminNav from '@/components/AdminNav';
import React from 'react';
import type { ReactNode } from 'react';


interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col ">
     
      <main className="flex-grow container mx-auto flex gap-2 p-0 my-0 " >
        <AdminNav/>
        {children}
      </main>
     
    </div>
  );
};

export default DashboardLayout;
