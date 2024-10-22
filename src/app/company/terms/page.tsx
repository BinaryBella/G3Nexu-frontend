"use client";

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTerms, addTerms, updateTerms } from '../../lib/api';
import { TermsConditions } from '../../lib/types';

const TermsAndConditionsPage = () => {
    const queryClient = useQueryClient();

    // Fetching the terms data
    const { data: termsData, isLoading } = useQuery<TermsConditions>(['terms'], fetchTerms);

    // State for the terms text
    const [termsText, setTermsText] = useState<string>(termsData?.content || '');

    // Mutation for adding new terms
    const createMutation = useMutation((content: string) => addTerms(content), {
        onSuccess: () => {
            queryClient.invalidateQueries(['terms']);
        },
    });

    // Mutation for updating existing terms
    const updateMutation = useMutation((updatedTerms: { tcId: number, content: string }) =>
        updateTerms(updatedTerms.tcId, updatedTerms.content), {
        onSuccess: () => {
            queryClient.invalidateQueries(['terms']);
        },
    });

    // Handle save logic
    const handleSave = () => {
        if (termsData?.tcId) {
            updateMutation.mutate({ tcId: termsData.tcId, content: termsText });
        } else {
            createMutation.mutate(termsText);
        }
    };
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
            <div className="flex justify-end mt-16 gap-x-6">
                <button
                    className="w-28 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Cancel
                </button>
                <button
                    onClick={handleSave}
                    className="w-28 bg-[#FFBF00] hover:bg-[#FFBF00] text-black font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default TermsAndConditionsPage;
