// lib/api.ts

import axios from 'axios';
import {Client, Employee, Requirement, Bug, Payment} from './types'; // Import the Client type

// Adjust the fetch function to map the API data to match the Client type
export const fetchClients = async (): Promise<Client[]> => {
    const response = await axios.get<{data: Array<Client>, error: string | null, status: boolean, message: string | null }>('https://localhost:7289/api/Client');
    console.log(response.data.data)
    // Transform the API response to match your expected structure
    return response.data.data.map((client: Client) => ({
        id: client.id,
        organizationName: client.organizationName,
        name: client.name,
        role: client.role,
        contactNo: client.contactNo,
        email: client.email,
        address: client.address,
    }));
};


export const fetchEmployees = async (): Promise<Employee[]> => {
    const response = await axios.get<{data: Array<Employee>, error: string | null, status: boolean, message: string | null }>('https://localhost:7289/api/Employee');
    console.log(response.data.data)
    // Transform the API response to match your expected structure
    return response.data.data.map((employee: Employee) => ({
        id: employee.id,
        name: employee.name,
        role: employee.role,
        contactNo: employee.contactNo,
        email: employee.email,
        address: employee.address,
    }));
};

export const fetchRequirements = async (): Promise<Requirement[]> => {
    const response = await axios.get<{data: Array<Requirement>, error: string | null, status: boolean, message: string | null }>('https://localhost:7289/api/Requirement');
    console.log(response.data.data)
    // Transform the API response to match your expected structure
    return response.data.data.map((requirement: Requirement) => ({
        requirementTitle: requirement.requirementTitle,
        priority: requirement.priority,
        requirementDescription: requirement.requirementDescription,
        attachment: requirement.attachment,
        isActive: requirement.isActive,
        clientId: requirement.clientId,
        projectId: requirement.projectId
    }));
};


export const fetchBugs = async (): Promise<Bug[]> => {
    const response = await axios.get<{data: Array<Bug>, error: string | null, status: boolean, message: string | null }>('https://localhost:7289/api/Bug');
    console.log(response.data.data)
    // Transform the API response to match your expected structure
    return response.data.data.map((payment: Bug) => ({
        bugTitle: payment.bugTitle,
        severity: payment.severity,
        bugDescription: payment.bugDescription,
        attachment: payment.attachment,
        isActive: payment.isActive,
        clientId: payment.clientId,
        projectId: payment.projectId
    }));
};

export const fetchPayments = async (): Promise<Payment[]> => {
    const response = await axios.get<{data: Array<Payment>, error: string | null, status: boolean, message: string | null }>('https://localhost:7289/api/Payment');
    console.log(response.data.data)
    // Transform the API response to match your expected structure
    return response.data.data.map((payment: Payment) => ({
        paymentId: payment.paymentId,
        paymentAmount: payment.paymentAmount,
        paymentType: payment.paymentType,
        paymentDescription: payment.paymentDescription,
        paymentDate: payment.paymentDate,
        attachment: payment.attachment,
    }));
};
