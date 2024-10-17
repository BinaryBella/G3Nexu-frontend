export interface Client {
    id: number;
    organizationName: string;
    contactNo: string;
    email: string;
    address: string;
    isActive: boolean;
    name: string;
    password: string;
    role: string;
}

export interface Employee {
    id: number;
    contactNo: string;
    email: string;
    address: string;
    isActive: boolean;
    name: string;
    password: string;
    role: string;
}


export interface Requirement {
    requirementId: number;
    requirementTitle: string;
    priority: string;
    requirementDescription: string;
    attachment: string;
    isActive: boolean;
    clientId: number;
    projectId: number;
}

export interface Bug {
    bugId: number;
    bugTitle: string;
    severity: string;
    bugDescription: string;
    attachment: string;
    isActive: boolean;
    clientId: number;
    projectId: number;
}

export interface Payment {
    paymentId: number;
    projectId: number;
    paymentAmount: string;
    paymentType: string;
    paymentDescription: string;
    paymentDate: string;
    attachment: string;
    isActive: boolean;
}
