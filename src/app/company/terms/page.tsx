"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';  // Import the Quill stylesheet

// Dynamically load react-quill to avoid SSR issues (Next.js)
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const TermsAndConditionsPage = () => {
    const [termsText, setTermsText] = useState(`
        <h2>Terms and Conditions</h2>
        <p>Welcome to our platform. These terms and conditions outline the rules and regulations for the use of our services.</p>
        <h3>1. Introduction</h3>
        <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use the site if you do not agree to all of the terms and conditions stated on this page.</p>
        <h3>2. Cookies</h3>
        <p>We employ the use of cookies. By using the website, you consent to the use of cookies in accordance with our privacy policy.</p>
        <h3>3. License</h3>
        <p>Unless otherwise stated, we own the intellectual property rights for all material on the website.</p>
        <p>You must not:</p>
        <ul>
            <li>Republish material from the website</li>
            <li>Sell, rent or sub-license material from the website</li>
            <li>Reproduce, duplicate or copy material from the website</li>
        </ul>
    `);

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold text-[#3450A3] mb-8">Terms and Conditions</h1>
            <ReactQuill
                value={termsText}
                onChange={setTermsText}
                className="bg-white rounded-lg p-4"
                modules={{
                    toolbar: [
                        [{'header': '1'}, {'header': '2'}, {'font': []}],
                        [{'list': 'ordered'}, {'list': 'bullet'}],
                        ['bold', 'italic', 'underline'],
                        ['link', 'image'],
                        [{'align': []}],
                        ['clean']  // Remove formatting button
                    ]
                }}
                formats={[
                    'header', 'font', 'list', 'bullet', 'bold', 'italic', 'underline', 'link', 'image', 'align'
                ]}
            />
            <div className=" flex justify-end mt-16 gap-x-6">
                <button
                    className="w-28 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Cancel
                </button>
                <button
                    className="w-28 bg-[#FFBF00] hover:bg-[#FFBF00] text-black font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default TermsAndConditionsPage;
