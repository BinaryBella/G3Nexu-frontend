"use client";

import React, {useState} from 'react';
import {FileSearch, Search} from 'lucide-react';
import Link from "next/link";

const requirements = [
    {
        id: 1,
        title: "The name or brief summary of the task",
        priority: "Low",
        description: "A detailed description of what the task entails."
    },
    {
        id: 2,
        title: "The name or brief summary of the task",
        priority: "Medium",
        description: "A detailed description of what the task entails."
    },
    {
        id: 3,
        title: "The name or brief summary of the task",
        priority: "Low",
        description: "A detailed description of what the task entails."
    },
    {
        id: 4,
        title: "The name or brief summary of the task",
        priority: "Medium",
        description: "A detailed description of what the task entails."
    },
    {
        id: 5,
        title: "The name or brief summary of the task",
        priority: "High",
        description: "A detailed description of what the task entails."
    },
];

const PriorityBadge = ({priority}) => {
    const colorClass = {
        Low: "bg-yellow-200 text-yellow-800",
        Medium: "bg-green-200 text-green-800",
        High: "bg-red-200 text-red-800"
    }[priority] || "bg-gray-200 text-gray-800";

    return (
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${colorClass}`}>
            {priority}
        </span>
    );
};

const Table = () => {
    const [searchText, setSearchText] = useState("");

    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold text-[#3450A3] mb-8">
                Requirements
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
                <Link href="/client/requirements/add-requirement">
                    <button className="bg-[#3450A3] text-white px-4 py-2 rounded-lg hover:bg-[#3450A3]">
                        ADD NEW REQUIREMENT
                    </button>
                </Link>
            </div>
                <table className="w-full border-collapse rounded-lg overflow-hidden">
                    <thead>
                    <tr className="bg-[#3450A3] text-white"> {/* Blue background for the header */}
                        <th className="border p-2 text-left">Title</th>
                        <th className="border p-2 text-left">Priority</th>
                        <th className="border p-2 text-left">Description</th>
                        <th className="border p-2 text-left">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {requirements.map((req) => (
                        <tr key={req.id} className="border-b">
                            <td className="p-2">{req.title}</td>
                            <td className="p-2">
                                <PriorityBadge priority={req.priority}/>
                            </td>
                            <td className="p-2">{req.description}</td>
                            <td className="p-3 flex space-x-4">
                                <button
                                    className="p-1 hover:bg-gray-100 rounded"
                                    title="More Details"
                                >
                                    <FileSearch className="h-5 w-5 text-[#3450A3]"/>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            <div className="flex justify-end mt-4 gap-1">
                {[1, 2, 3, 4, 5, 6, 7].map((page) => (
                    <button key={page} className="px-3 py-1 border rounded hover:bg-gray-100">
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Table;
