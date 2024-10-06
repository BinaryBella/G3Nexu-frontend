"use client";

import React, { useState } from 'react';
import {Search, FileSearch, Edit, Trash} from 'lucide-react';
import Link from "next/link"; // Import Eye icon

// Sample financial details data
const financialDetails = [
    { id: 1, projectName: "Project Alpha", amount: "$10,000", type: "Income", dateTime: "2024-10-01 14:30" },
    { id: 2, projectName: "Project Beta", amount: "$2,500", type: "Expense", dateTime: "2024-10-03 09:00" },
    { id: 3, projectName: "Project Gamma", amount: "$7,800", type: "Income", dateTime: "2024-10-05 16:00" },
    { id: 4, projectName: "Project Delta", amount: "$5,000", type: "Expense", dateTime: "2024-10-06 12:15" },
];

const FinancialDetailsTable = () => {
    const [searchText, setSearchText] = useState("");

    const filteredDetails = financialDetails.filter((detail) =>
        detail.projectName.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold text-[#3450A3] mb-8">
                Financial Details
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
                    <Search className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
                </div>
                <Link href="/client/financial/add-invoice">
                    <button className="bg-[#3450A3] text-white px-4 py-2 rounded-lg hover:bg-[#3450A3]">
                        ADD NEW FINANCIAL DETAILS
                    </button>
                </Link>
            </div>
            <table className="w-full border-collapse rounded-lg overflow-hidden">
                <thead>
                <tr className="bg-[#3450A3] text-white">
                    <th className="border p-2 text-left">Project Name</th>
                    <th className="border p-2 text-left">Amount</th>
                    <th className="border p-2 text-left">Type</th>
                    <th className="border p-2 text-left">Date and Time</th>
                    <th className="border p-2 text-left">Actions</th>
                </tr>
                </thead>
                <tbody>
                {filteredDetails.map((detail) => (
                    <tr key={detail.id} className="border-b">
                        <td className="p-2">{detail.projectName}</td>
                        <td className="p-2">{detail.amount}</td>
                        <td className="p-2">{detail.type}</td>
                        <td className="p-2">{detail.dateTime}</td>
                        <td className="p-2">
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

                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="flex justify-end mt-4 gap-1">
                {/* Pagination buttons can be added here if needed */}
                {[1, 2, 3].map((page) => (
                    <button key={page} className="px-3 py-1 border rounded hover:bg-gray-100">
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FinancialDetailsTable;
