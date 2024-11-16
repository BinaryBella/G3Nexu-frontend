// src/app/components/ProtectedRoute.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getUser } from '../lib/auth';
import { UserRole } from '../lib/roles';

interface ProtectedRouteProps {
    allowedRoles: UserRole[];
    children: React.ReactNode;
}

const ProtectedRoute = ({ allowedRoles, children }: ProtectedRouteProps) => {
    const router = useRouter();
    const user = getUser();

    useEffect(() => {
        if (!user || !allowedRoles.includes(user.role)) {
            router.push('/auth/login');
        }
    }, [router, user, allowedRoles]);

    if (!user || !allowedRoles.includes(user.role)) {
        return null; // Optionally, render a loading spinner
    }

    return <>{children}</>;
};

export default ProtectedRoute;
