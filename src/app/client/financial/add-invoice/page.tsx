"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FinancialDetailsForm = () => {
    const [projectName, setProjectName] = useState("");
    const [amount, setAmount] = useState("");
    const [paymentType, setPaymentType] = useState("");
    const [paymentDescription, setPaymentDescription] = useState("");
    const [paymentDate, setPaymentDate] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here (could be an API call)
        console.log({
            projectName,
            amount,
            paymentType,
            paymentDescription,
            paymentDate,
            file,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white px-8 pt-6 h-screen">
            <h1 className="text-4xl font-bold text-[#3450A3] mb-8">
                Project Payment Information
            </h1>

            {/* Project Name */}
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="projectName"
                >
                    Project Name
                </label>
                <select
                    className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                >
                    <option value="">Select project type</option>
                    <option value="Project Alpha">Project Alpha</option>
                    <option value="Project Beta">Project Beta</option>
                    <option value="Project Gamma">Project Gamma</option>
                </select>
            </div>

            {/* Payment Amount */}
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="amount"
                >
                    Payment Amount
                </label>
                <input
                    className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="amount"
                    type="text"
                    placeholder="Enter Payment Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>

            {/* Payment Type */}
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="paymentType"
                >
                    Payment Type
                </label>
                <select
                    className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="paymentType"
                    value={paymentType}
                    onChange={(e) => setPaymentType(e.target.value)}
                >
                    <option value="">Select payment type</option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>
            </div>

            {/* Payment Description */}
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="paymentDescription"
                >
                    Payment Description
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="paymentDescription"
                    placeholder="Describe the payment in detail"
                    rows={4}
                    value={paymentDescription}
                    onChange={(e) => setPaymentDescription(e.target.value)}
                />
            </div>

            {/* Payment Date and Time */}
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="paymentDate"
                >
                    Payment Date and Time
                </label>
                <input
                    className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="paymentDate"
                    type="datetime-local"
                    value={paymentDate}
                    onChange={(e) => setPaymentDate(e.target.value)}
                />
            </div>

            {/* File Upload */}
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="file"
                >
                    Attach Payment Slip
                </label>
                <input
                    className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="file"
                    type="file"
                    onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                />
            </div>

            {/* Buttons */}
            <div className="w-3/6 flex items-center justify-between mt-16">
                <button
                    className="w-28 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={() => router.push("/financial-details")}
                >
                    CANCEL
                </button>
                <button
                    className="w-28 bg-[#FFBF00] hover:bg-[#FFBF00] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    SUBMIT
                </button>
            </div>

            {/* Illustration */}
            <div className="hidden lg:block absolute bottom-0 right-0 mb-10 mr-10">
                <Image
                    src="/images/financial.png"
                    alt="Payment illustration"
                    width={400}
                    height={320}
                />
            </div>
        </form>
    );
};

export default FinancialDetailsForm;
