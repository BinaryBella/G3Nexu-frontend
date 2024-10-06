// src/app/components/DashboardLayout.tsx
import React from 'react';
import Navbar from './Navbar';
import SideMenu from './SideMenu';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <SideMenu />
            <main className="pl-64 pt-16">
                <div className="max-w-full p-6">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
