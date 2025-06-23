"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header
                id="header"
                className="w-full px-4 sm:px-6 py-4 flex justify-between items-center bg-[#b60b0b] shadow-md"
            >
                <h1 className="text-3xl font-extrabold text-[#dadbdb] drop-shadow-sm tracking-wide">
                    ZURFRK
                </h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 font-extrabold drop-shadow-sm tracking-wide">
                    <Link href="#header">Home</Link>
                    <Link href="#features">Features</Link>
                    <Link href="#about">About</Link>
                    <Link href="#explore">Explore</Link>
                    <button aria-label="Sign in to your account" className="bg-white text-black px-4 py-1 rounded-full shadow hover:bg-gray-100 transition">
                        Sign in
                    </button>
                    <button aria-label="Create a new account" className="bg-black text-white px-4 py-1 rounded-full shadow hover:opacity-90 transition">
                        Register
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    aria-label="Toggle mobile navigation menu"
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        className="w-6 h-6 text-gray-200"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </header>

            {/* Mobile Dropdown Menu */}
            {
                menuOpen && (
                    <div className="md:hidden bg-[#e5c4a5] px-4 py-3 space-y-2 text-gray-800 text-sm font-medium shadow-inner">
                        <Link href="#header" className="block">
                            Home
                        </Link>
                        <Link href="#features" className="block">
                            Features
                        </Link>
                        <Link href="#about" className="block">
                            About
                        </Link>
                        <Link href="#explore" className="block">
                            Explore
                        </Link>
                        <button aria-label="Sign in (mobile navigation)" className="block w-full text-left bg-white text-black px-4 py-1 rounded-full shadow">
                            Sign in
                        </button>
                        <button aria-label="Register a new account (mobile navigation)" className="block w-full text-left bg-black text-white px-4 py-1 rounded-full shadow">
                            Register
                        </button>
                    </div>
                )}
        </>
    );
}