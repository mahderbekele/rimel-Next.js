"use client";
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { Poppins } from 'next/font/google';


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-poppins",
});
const Signup = () => {
    const [name, setName] = useState('');
    const [emailPhone, setEmailPhone] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailPhoneError, setEmailPhoneError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let valid = true;
        if (!name.trim()) {
            setNameError('Please enter your name');
            valid = false;
        } else {
            setNameError('');
        }
        if (!emailPhone.trim()) {
            setEmailPhoneError('Please enter your email or phone number');
            valid = false;
        } else {
            setEmailPhoneError('');
        }
        if (!password.trim()) {
            setPasswordError('Please enter your password');
            valid = false;
        } else {
            setPasswordError('');
        }
        if (valid) {
            window.location.href = '/sign-in';
        }
    };

    return (
        <main className={`${poppins.className} flex h-[calc(100vh-100px)] relative`}>
            <div className="flex-1flex items-center justify-center">
                <div className="half-page-background-container">
                    <Image
                        src="/images/Side Image.png"
                        alt="Phone and cart"
                        width={750}
                        height={650}
                        className="object-cover object-left pt-17"
                    />
                </div>
            </div>
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5" />
            <div className="flex-1 mt-1 flex items-center justify-center bg-white">
                <div className="w-100">
                    <h1 className="text-4xl mt-45 mb-12">Create an account</h1>
                    <p className="mb-12">Enter your details below</p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full mb-1 border-b-2 border-gray-500 text-gray-700 focus:outline-none"
                                placeholder='Name'
                            />
                            {nameError && <p className="text-red-600 text-sm mb-4">Enter correct name</p>}
                        </div>
                        <div>
                            <input
                                type="text"
                                value={emailPhone}
                                onChange={(e) => setEmailPhone(e.target.value)}
                                className="w-full mb-1 border-b-2 border-gray-500 text-gray-700 focus:outline-none"
                                placeholder='Email or Phone Number'
                            />
                            {emailPhoneError && <p className="text-red-600 text-sm mb-4">Enter correct email address</p>}
                        </div>
                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full mb-1 border-b-2 border-gray-500 text-gray-700 focus:outline-none"
                                placeholder='Password'
                            />
                            {passwordError && <p className="text-red-600 text-sm mb-4">Enter correct password</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full p-4 bg-red-600 text-white rounded hover:bg-pink-700 transition-colors duration-200"
                        >
                            Create Account
                        </button>
                    </form>
                    <button
                        className="w-full p-3 border border-gray-300 flex items-center justify-center mt-4 mb-10"
                    >
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z" fill="#4285F4" />
                            <path d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z" fill="#34A853" />
                            <path d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z" fill="#FBBC04" />
                            <path d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z" fill="#EA4335" />
                        </svg>
                        {' '}  Sign up with Google
                    </button>
                    <p className="mt-4 text-center">
                        Already have account? {' '}
                        <Link href="/signin" className="text-blue-600 hover:underline">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
};
export default Signup;