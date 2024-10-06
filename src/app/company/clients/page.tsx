"use client";

import React, { useState } from 'react';
import {Search, Edit, Trash, FileSearch} from 'lucide-react'; // Import the necessary icons
import Link from "next/link";

const clients = [
    {
        id: 1,
        clientName: "TechRetail Inc",
        contactNo: "077 987 6543",
        emailAddress: "techretail@example.com"
    },
    {
        id: 2,
        clientName: "HealthTrack Solutions",
        contactNo: "078 456 7890",
        emailAddress: "healthtrack@example.com"
    },
    {
        id: 3,
        clientName: "SalesForce Dynamics",
        contactNo: "076 321 0987",
        emailAddress: "salesforcedynamics@example.com"
    },
    {
        id: 4,
        clientName: "SmartHome Technologies",
        contactNo: "072 878 5432",
        emailAddress: "smarthome@example.com"
    },
    {
        id: 5,
        clientName: "HealthTrack Solutions",
        contactNo: "073 444 5554",
        emailAddress: "healthtracksolutions@example.com"
    }
];

const ClientTable = () => {
    const [searchText, setSearchText] = useState("");

    const handleEdit = (id: number) => {
        // Handle edit logic here, e.g., redirecting to the edit form
        console.log(`Edit client with id: ${id}`);
    };

    const handleDelete = (id: number) => {
        // Handle delete logic here, e.g., making an API call to delete
        console.log(`Delete client with id: ${id}`);
    };

    const handleDetails = (id: number) => {
        // Handle viewing more details here, e.g., redirecting to a details page
        console.log(`View more details for client with id: ${id}`);
    };

    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold text-[#3450A3] mb-8">
                Clients
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
                <Link href="/company/clients/add-client">
                    <button className="bg-[#3450A3] text-white px-4 py-2 rounded-lg hover:bg-[#2a4084]">
                        ADD NEW CLIENT
                    </button>
                </Link>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow">
                <table className="w-full border-collapse">
                    <thead>
                    <tr className="bg-[#3450A3] text-white">
                        <th className="p-3 text-left">Client Name</th>
                        <th className="p-3 text-left">Contact No</th>
                        <th className="p-3 text-left">Email Address</th>
                        <th className="p-3 text-center">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {clients.map((client) => (
                        <tr key={client.id} className="border-b hover:bg-gray-50">
                            <td className="p-3">{client.clientName}</td>
                            <td className="p-3">{client.contactNo}</td>
                            <td className="p-3">{client.emailAddress}</td>
                            <td className="p-3 flex justify-center space-x-4 align-middle">
                                <button
                                    className="p-1 hover:bg-gray-100 rounded"
                                    title="More Details"
                                    onClick={() => handleDetails(client.id)}
                                >
                                    <FileSearch className="h-5 w-5 text-[#3450A3]"/>
                                </button>
                                <button
                                    className="p-1 hover:bg-gray-100 rounded"
                                    title="Edit"
                                    onClick={() => handleEdit(client.id)}
                                >
                                    <Edit className="h-5 w-5 text-[#3450A3]"/>
                                </button>
                                <button
                                    className="p-1 hover:bg-gray-100 rounded"
                                    title="Delete"
                                    onClick={() => handleDelete(client.id)}
                                >
                                    <Trash className="h-5 w-5 text-red-600"/>
                                </button>
                            </td>
                        </tr>
                    ))}
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

export default ClientTable;
