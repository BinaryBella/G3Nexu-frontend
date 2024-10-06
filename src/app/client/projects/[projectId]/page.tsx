// src/app/client/projects/[projectId]/page.tsx
import DashboardLayout from '@/app/components/DashboardLayout';
import ProjectForm from './components/ProjectForm';

export default function ProjectPage({ params }: { params: { projectId: string } }) {
    return (
        <DashboardLayout>
            <ProjectForm projectId={params.projectId} />
        </DashboardLayout>
    );
}
