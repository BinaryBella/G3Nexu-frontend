// src/app/lib/roles.ts
export const ROLES = {
    CLIENT_ADMIN: 'CLIENT_ADMIN',
    CLIENT_USER: 'CLIENT_USER',
    COMPANY_ADMIN: 'COMPANY_ADMIN',
    COMPANY_DEVELOPER: 'COMPANY_DEVELOPER',
};

export type UserRole = keyof typeof ROLES;
