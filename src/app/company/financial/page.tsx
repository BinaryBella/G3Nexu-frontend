// src/pages/company/finance.tsx
import ProtectedRoute from '@/app/components/ProtectedRoute';
import { ROLES } from '@/app/lib/roles';

const CompanyFinance = () => {
    return (
        <ProtectedRoute allowedRoles={[ROLES.COMPANY_ADMIN]}>
            <div>
                <h1>Company Finance</h1>
                {/* Your content goes here */}
            </div>
        </ProtectedRoute>
    );
};

export default CompanyFinance;
