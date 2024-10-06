// src/types/project.ts
export interface Project {
    id: string;
    title: string;
    description: string;
    status: string;
    createdAt: string;
    clientName: string;
    projectType: string;
    projectSize: string;
    estimatedBudget: string;
    actualStartDate: string;
    actualEndDate: string;
    totalBudget: string;
    paymentType: string;
    paymentStatus: string;
}
