// // src/app/auth/login/page.tsx
// 'use client';
//
// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Eye, EyeOff } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import {LoginFormData} from "@/app/lib/types";
//
//
// export default function LoginPage() {
//     const [formData, setFormData] = useState<LoginFormData>({
//         email: '',
//         password: ''
//     });
//     const [showPassword, setShowPassword] = useState(false);
//     const router = useRouter();
//
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         // Add your login logic here
//         console.log('Form submitted:', formData);
//
//         // Simulate a login process
//         try {
//             // Replace this with your actual authentication logic
//             const response = await fakeAuthenticationCall(formData);
//
//             if (response.success) {
//                 // Redirect to the projects page on successful login
//                 router.push('/client/projects');
//             } else {
//                 // Handle login failure (e.g., show an error message)
//                 console.error('Login failed');
//             }
//         } catch (error) {
//             console.error('An error occurred during login:', error);
//         }
//     };
//
// // This is a placeholder function. Replace it with your actual authentication logic.
//     const fakeAuthenticationCall = async (credentials: LoginFormData): Promise<{ success: boolean }> => {
//         // Simulate an API call
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         // For this example, always return success. In a real app, you'd validate the credentials.
//         return { success: true };
//     };
//
//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };
//
//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };
//
//     return (
//         <div className="min-h-screen flex flex-row">
//             {/* Left Section - Illustration */}
//             <div className="hidden lg:flex lg:w-1/2 bg-white px-20 py-12 flex-col">
//                 {/* Logo Container */}
//                 <div className="h-20 flex justify-center items-start max-w-[600px] mx-auto w-full">
//                     <Image
//                         src="/images/logo.png"
//                         alt="G3NEXUS"
//                         width={200}
//                         height={50}
//                         className="w-auto h-8"
//                         priority
//                     />
//                 </div>
//                 {/* Illustration Container */}
//                 <div className="flex-1 flex items-center justify-center">
//                     <Image
//                         src="/images/login-illustration.png"
//                         alt="Login Illustration"
//                         width={600}
//                         height={600}
//                         className="w-full max-w-[600px] object-contain"
//                         priority
//                     />
//                 </div>
//             </div>
//
//             {/* Right Section - Login Form */}
//             <div className="w-full lg:w-1/2 bg-[#2B4B93] p-8 lg:p-12 flex flex-col">
//                 {/* Mobile Logo */}
//                 <div className="lg:hidden h-20">
//                     <Image
//                         src="/images/logo-white.png"
//                         alt="G3NEXUS"
//                         width={150}
//                         height={40}
//                         className="w-auto h-8"
//                         priority
//                     />
//                 </div>
//
//                 {/* Login Form */}
//                 <div className="flex-1 flex flex-col justify-center max-w-[440px] mx-auto w-full">
//                     <h1 className="text-white text-4xl font-semibold mb-16 text-center">Login</h1>
//
//                     <form onSubmit={handleSubmit} className="space-y-8">
//                         <div className="space-y-2">
//                             <label htmlFor="email" className="block text-white text-sm font-medium mb-1">
//                                 Email Address
//                             </label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleInputChange}
//                                 placeholder="Email Address"
//                                 className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none"
//                                 required
//                             />
//                         </div>
//
//                         <div className="space-y-2">
//                             <label htmlFor="password" className="block text-white text-sm font-medium mb-1">
//                                 Password
//                             </label>
//                             <div className="relative">
//                                 <input
//                                     type={showPassword ? "text" : "password"}
//                                     id="password"
//                                     name="password"
//                                     value={formData.password}
//                                     onChange={handleInputChange}
//                                     placeholder="Password"
//                                     className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none"
//                                     required
//                                 />
//                                 <button
//                                     type="button"
//                                     onClick={togglePasswordVisibility}
//                                     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 focus:outline-none"
//                                 >
//                                     {showPassword ? (
//                                         <EyeOff className="h-5 w-5" />
//                                     ) : (
//                                         <Eye className="h-5 w-5" />
//                                     )}
//                                 </button>
//                             </div>
//                         </div>
//
//                         <div className="pt-8">
//                             <button
//                                 type="submit"
//                                 className="w-full bg-[#F5B316] text-white py-3 rounded-lg font-medium hover:bg-[#E5A714] transition-colors"
//                             >
//                                 Login
//                             </button>
//
//                             <div className="text-center mt-4">
//                                 <Link
//                                     href="/auth/reset-password"
//                                     className="text-white text-sm hover:underline"
//                                 >
//                                     Forgot Password
//                                 </Link>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }


// src/app/auth/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/app/lib/auth';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const user = await login(email, password);
        if (user) {
            if (user.role === 'CLIENT_ADMIN') {
                router.push('/client/projects');
            } else if (user.role === 'COMPANY_ADMIN') {
                router.push('/company/financial');
            } else {
                router.push('/'); // Fallback route
            }
        } else {
            alert('Invalid login credentials');
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
