'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';

interface PasswordState {
    value: string;
    visible: boolean;
}

export default function NewPasswordPage() {
    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [newPassword, setNewPassword] = useState<PasswordState>({
        value: '',
        visible: false,
    });
    const [confirmPassword, setConfirmPassword] = useState<PasswordState>({
        value: '',
        visible: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        // Get email from sessionStorage
        const storedEmail = sessionStorage.getItem('resetEmail');
        if (!storedEmail) {
            // Redirect back to reset password page if no email is found
            router.push('/auth/reset-password');
            return;
        }
        setEmail(storedEmail);
    }, [router]);

    const togglePasswordVisibility = (field: 'new' | 'confirm') => {
        if (field === 'new') {
            setNewPassword(prev => ({ ...prev, visible: !prev.visible }));
        } else {
            setConfirmPassword(prev => ({ ...prev, visible: !prev.visible }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (newPassword.value !== confirmPassword.value) {
            setError('Passwords do not match');
            return;
        }

        if (newPassword.value.length < 8) {
            setError('Password must be at least 8 characters long');
            return;
        }

        setIsSubmitting(true);
        try {
            // Add your password update API call here
            console.log('Updating password for email:', email);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call

            // Clear stored email
            sessionStorage.removeItem('resetEmail');

            // Redirect to login page
            router.push('/auth/login');
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to update password. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-row">
            {/* Left Section - Illustration */}
            <div className="hidden lg:flex lg:w-1/2 bg-white px-20 py-12 flex-col">
                {/* Logo Container */}
                <div className="h-20 flex justify-center items-start max-w-[600px] mx-auto w-full">
                    <Image
                        src="/images/logo.png"
                        alt="G3NEXUS"
                        width={200}
                        height={50}
                        className="w-auto h-8"
                        priority
                    />
                </div>
                {/* Illustration Container */}
                <div className="flex-1 flex items-center justify-center">
                    <Image
                        src="/images/reset-password-illustration.png"
                        alt="Reset Password Illustration"
                        width={600}
                        height={600}
                        className="w-full max-w-[600px] object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Right Section - New Password Form */}
            <div className="w-full lg:w-1/2 bg-[#2B4B93] p-8 lg:p-12 flex flex-col">
                {/* Mobile Logo */}
                <div className="lg:hidden h-20">
                    <Image
                        src="/images/logo-white.png"
                        alt="G3NEXUS"
                        width={150}
                        height={40}
                        className="w-auto h-8"
                        priority
                    />
                </div>

                {/* New Password Form */}
                <div className="flex-1 flex flex-col justify-center max-w-[440px] mx-auto w-full">
                    <h1 className="text-white text-4xl font-semibold mb-16 text-center">
                        Reset Password Verification
                    </h1>

                    <p className="text-white text-center mb-12">
                        Create new password
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                                {error}
                            </div>
                        )}

                        <div className="space-y-6">
                            {/* New Password Input */}
                            <div className="space-y-2">
                                <label htmlFor="newPassword" className="block text-white text-sm font-medium">
                                    New Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={newPassword.visible ? "text" : "password"}
                                        id="newPassword"
                                        value={newPassword.value}
                                        onChange={(e) => setNewPassword(prev => ({ ...prev, value: e.target.value }))}
                                        className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none"
                                        placeholder="New Password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => togglePasswordVisibility('new')}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
                                    >
                                        {newPassword.visible ? (
                                            <EyeOff className="h-5 w-5" />
                                        ) : (
                                            <Eye className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password Input */}
                            <div className="space-y-2">
                                <label htmlFor="confirmPassword" className="block text-white text-sm font-medium">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={confirmPassword.visible ? "text" : "password"}
                                        id="confirmPassword"
                                        value={confirmPassword.value}
                                        onChange={(e) => setConfirmPassword(prev => ({ ...prev, value: e.target.value }))}
                                        className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none"
                                        placeholder="Confirm Password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => togglePasswordVisibility('confirm')}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
                                    >
                                        {confirmPassword.visible ? (
                                            <EyeOff className="h-5 w-5" />
                                        ) : (
                                            <Eye className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting || !newPassword.value || !confirmPassword.value}
                            className="w-full bg-[#F5B316] text-white py-3 rounded-lg font-medium hover:bg-[#E5A714] transition-colors"
                        >
                            {isSubmitting ? 'Creating...' : 'Create'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
