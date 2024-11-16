// src/app/lib/auth.ts
import { UserRole } from './roles';

interface User {
    email: string;
    role: UserRole;
}

let mockUser: User | null = null; // Replace with real authentication logic (e.g., JWT)

export const login = async (email: string, password: string): Promise<User | null> => {
    // Replace this with your actual authentication logic
    if (email === 'clientadmin@example.com' && password === 'password123') {
        mockUser = { email, role: 'CLIENT_ADMIN' };
    } else if (email === 'companyadmin@example.com' && password === 'password123') {
        mockUser = { email, role: 'COMPANY_ADMIN' };
    } else {
        mockUser = { email, role: 'CLIENT_USER' };
    }
    return mockUser;
};

export const getUser = (): User | null => mockUser;

export const logout = () => {
    mockUser = null;
};
