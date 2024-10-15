'use client';

import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
import Image from 'next/image';
import { Camera } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Fixed router import

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
    const router = useRouter();
    const [formData, setFormData] = useState<ProfileFormData>({
        name: '',
        contactNo: '',
        emailAddress: '',
        address: '',
        image: '',
        newPassword: '',
        confirmPassword: ''
    });
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
                    image: '',
                    newPassword: '',
                    confirmPassword: ''
                };
                setFormData(mockProfile);
                setPreviewImage(mockProfile.image || null);
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
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                setPreviewImage(result);
                setFormData((prev) => ({
                    ...prev,
                    image: result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

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
        router.back();
    };

    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold text-[#3450A3] mb-8">
                Profile Settings
            </h1>

            {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-600">{error}</p>
                </div>
            )}

            <div className="bg-white">
                <form onSubmit={handleSubmit} className="p-6 w-4/6">
                    <div className="flex flex-row gap-8">
                        {/* Left side - Profile Image */}
                        <div className="flex items-start pt-4">
                            <div className="relative">
                                <div className="w-32 h-32 ml-16 rounded-full overflow-hidden bg-gray-100">
                                    {previewImage ? (
                                        <Image
                                            src={previewImage}
                                            alt="Profile"
                                            width={192}
                                            height={192}
                                            className="object-cover w-full h-full"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                            <Camera className="w-12 h-12 text-gray-400"/>
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

                        {/* Right side - Form Fields */}
                        <div className="flex-1">
                            <div className="space-y-4 w-3/4 ml-20">
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
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Buttons */}
                    <div className="flex justify-end mt-8 gap-x-6 mr-28">
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

                {/* Illustration */}
                <div className="hidden lg:block absolute bottom-0 right-0 mb-10 mr-10">
                    <Image
                        src="/images/profile.png"
                        alt="Client illustration"
                        width={400}
                        height={320}
                    />
                </div>
            </div>
        </div>

    );
}
