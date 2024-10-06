// src/app/components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import { User } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-5 px-10 bg-white shadow-md fixed top-0 left-0 right-0 z-10 h-16">
            {/* Logo Section */}
            <Link href="/client/projects" className="flex items-center">
                <Image src="/images/logo.png" alt="Logo" width={150} height={40} />
            </Link>

            {/* User and Logout Section */}
            <div className="flex items-center space-x-4">
                {/* User Icon */}
                <button className="text-blue-500">
                    <User className="w-6 h-6 mr-2" />
                </button>

                {/* Logout Button */}
                <button
                    type="button"
                    className="w-28 bg-[#3450A3] h-10 text-white py-2 rounded-md font-medium hover:bg-[#2a4086] transition-colors"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
