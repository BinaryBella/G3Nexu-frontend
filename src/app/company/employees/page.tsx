"use client";

import React, { useState } from 'react';
import {Edit, FileSearch, Search, Settings, Trash} from 'lucide-react';
import Link from "next/link";

// Employee data (same fields as clients)
const employees = [
    {
        id: 1,
        employeeName: "John Doe",
        contactNo: "077 123 4567",
        emailAddress: "johndoe@example.com"
    },
    {
        id: 2,
        employeeName: "Jane Smith",
        contactNo: "078 987 6543",
        emailAddress: "janesmith@example.com"
    },
    {
        id: 3,
        employeeName: "Bob Johnson",
        contactNo: "076 555 1212",
        emailAddress: "bobjohnson@example.com"
    },
    {
        id: 4,
        employeeName: "Alice Brown",
        contactNo: "072 876 5432",
        emailAddress: "alicebrown@example.com"
    },
    {
        id: 5,
        employeeName: "Michael White",
        contactNo: "073 654 7890",
        emailAddress: "michaelwhite@example.com"
    }
];

const EmployeeTable = () => {
    const [searchText, setSearchText] = useState("");

    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold text-[#3450A3] mb-8">
                Employees
            </h1>
            <div className="flex justify-between mb-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="pl-8 pr-2 py-1 border rounded"
                    />
                    <Search className="absolute left-2 top-2 h-4 w-4 border rounded-lg text-gray-400"/>
                </div>
                <Link href="/company/employees/add-employee">
                    <button className="bg-[#3450A3] text-white px-4 py-2 rounded-lg hover:bg-[#2a4084]">
                        ADD NEW EMPLOYEE
                    </button>
                </Link>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow">
                <table className="w-full border-collapse">
                    <thead>
                    <tr className="bg-[#3450A3] text-white">
                        <th className="p-3 text-left">Employee Name</th>
                        <th className="p-3 text-left">Contact No</th>
                        <th className="p-3 text-left">Email Address</th>
                        <th className="p-3 text-left">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {employees
                        .filter((employee) =>
                            employee.employeeName.toLowerCase().includes(searchText.toLowerCase()) ||
                            employee.contactNo.includes(searchText) ||
                            employee.emailAddress.toLowerCase().includes(searchText.toLowerCase())
                        )
                        .map((employee) => (
                            <tr key={employee.id} className="border-b hover:bg-gray-50">
                                <td className="p-3">{employee.employeeName}</td>
                                <td className="p-3">{employee.contactNo}</td>
                                <td className="p-3">{employee.emailAddress}</td>
                                <td className="p-3 flex space-x-4">
                                    <button
                                        className="p-1 hover:bg-gray-100 rounded"
                                        title="More Details"
                                    >
                                        <FileSearch className="h-5 w-5 text-[#3450A3]"/>
                                    </button>
                                    <button
                                        className="p-1 hover:bg-gray-100 rounded"
                                        title="Edit"
                                    >
                                        <Edit className="h-5 w-5 text-[#3450A3]"/>
                                    </button>
                                    <button
                                        className="p-1 hover:bg-gray-100 rounded"
                                        title="Delete"
                                    >
                                        <Trash className="h-5 w-5 text-red-600"/>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>

            <div className="flex justify-end mt-4 gap-1">
                {[1, 2, 3, 4, 5, 6, 7].map((page) => (
                    <button
                        key={page}
                        className={`px-3 py-1 border rounded hover:bg-gray-100 ${
                            page === 1 ? 'bg-[#3450A3] text-white' : ''
                        }`}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default EmployeeTable;
