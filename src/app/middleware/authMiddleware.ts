// src/app/middleware/authMiddleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getUser } from '../lib/auth';

export function middleware(req: NextRequest) {
    const user = getUser();
    const url = req.nextUrl.clone();

    if (!user) {
        url.pathname = '/auth/login';
        return NextResponse.redirect(url);
    }

    // Example of protecting a specific route
    if (url.pathname.startsWith('/company/financial') && user.role !== 'COMPANY_ADMIN') {
        url.pathname = '/auth/login';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}
