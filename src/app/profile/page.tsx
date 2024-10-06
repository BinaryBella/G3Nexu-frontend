'use client';

import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
import Image from 'next/image';
import { Camera, Save } from 'lucide-react';
import {router} from "next/client";

interface UserProfile {
    name: string;
    contactNo: string;
    emailAddress: string;
    address: string;
    password?: string;
    role: string;
    image?: string;
}

interface ProfileFormData {
    name: string;
    contactNo: string;
    emailAddress: string;
    address: string;
    image?: string;
    newPassword?: string;
    confirmPassword?: string;
}

export default function ProfilePage() {
    const [formData, setFormData] = useState<ProfileFormData | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                // TODO: Replace with actual API call
                const mockProfile: ProfileFormData = {
                    name: 'John Doe',
                    contactNo: '+1234567890',
                    emailAddress: 'john@example.com',
                    address: '123 Main St',
                    image: null,
                };
                setFormData(mockProfile);
                setPreviewImage(mockProfile.image);
            } catch (error) {
                setError('Failed to load profile data');
                console.error('Error fetching profile:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!formData) return;

        const { name, value } = e.target;
        setFormData((prev) => prev ? ({
            ...prev,
            [name]: value,
        }) : null);
    };

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
                setFormData((prev) => prev ? ({
                    ...prev,
                    image: reader.result as string,
                }) : null);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData) return;

        try {
            setIsSaving(true);
            setError(null);

            if (formData.newPassword || formData.confirmPassword) {
                if (formData.newPassword !== formData.confirmPassword) {
                    setError('Passwords do not match');
                    return;
                }
                if (formData.newPassword.length < 8) {
                    setError('Password must be at least 8 characters long');
                    return;
                }
            }

            // TODO: Replace with actual API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Updating profile with:', formData);

        } catch (error) {
            setError('Failed to update profile');
            console.error('Error updating profile:', error);
        } finally {
            setIsSaving(false);
        }
    };

    const handleCancel = () => {
        // You can customize this to go back to a specific page
        router.back();
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#3450A3]" />
            </div>
        );
    }

    if (!formData) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-red-500">Error loading profile</p>
            </div>
        );
    }

    return (
        <div className="p-4">
            {/* Header section matching your table component */}
            <h1 className="text-4xl font-bold text-[#3450A3] mb-8">
                Profile Settings
            </h1>

            {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-600">{error}</p>
                </div>
            )}

            <div className="bg-white">
                <form onSubmit={handleSubmit} className="p-6">
                    {/* Profile Image Upload */}
                    <div className="flex flex-col items-center space-y-4 mb-8">
                        <div className="relative">
                            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100">
                                {previewImage ? (
                                    <Image
                                        src={previewImage}
                                        alt="Profile"
                                        width={128}
                                        height={128}
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                        <Camera className="w-8 h-8 text-gray-400"/>
                                    </div>
                                )}
                            </div>
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="absolute bottom-0 right-0 bg-[#3450A3] p-2 rounded-full text-white hover:bg-[#2a4086] transition-colors"
                            >
                                <Camera className="w-4 h-4"/>
                            </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                                accept="image/*"
                                className="hidden"
                            />
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3450A3] focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700 mb-1">
                                Contact Number
                            </label>
                            <input
                                type="tel"
                                id="contactNo"
                                name="contactNo"
                                value={formData.contactNo}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3450A3] focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="emailAddress"
                                name="emailAddress"
                                value={formData.emailAddress}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3450A3] focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3450A3] focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                New Password
                            </label>
                            <input
                                type="password"
                                id="newPassword"
                                name="newPassword"
                                value={formData.newPassword || ''}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3450A3] focus:border-transparent"
                                minLength={8}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword || ''}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3450A3] focus:border-transparent"
                                minLength={8}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-end mt-16 gap-x-6">
                        <button
                            className="w-28 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleCancel}
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
                </form>
            </div>
        </div>
    );
}
