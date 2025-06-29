"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { FC } from "react"; // Import FC (Functional Component) type

// สร้าง Type ขึ้นมาสำหรับ Link แต่ละอัน
type NavLink = {
    href: string;
    label: string;
};

// ไอคอน (เหมือนเดิม)
const MenuIcon: FC = () => (
    <svg className="w-6 h-6 text-gray-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);
const XIcon: FC = () => (
    <svg className="w-6 h-6 text-gray-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    // 1. กำหนด Type ให้กับ Array ของลิงก์
    const navLinks: NavLink[] = [
        { href: "#header", label: "Home" },
        { href: "#features", label: "Features" },
        { href: "#about", label: "About" },
        { href: "#explore", label: "Explore" },
    ];

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { rootMargin: '-30% 0px -70% 0px' });
        sections.forEach(section => observer.observe(section));
        return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header
                id="header"
                className="w-full px-4 sm:px-6 py-4 flex justify-between items-center bg-[#b60b0b] shadow-md sticky top-0 z-50"
            >
                <Link href="#header" onClick={handleLinkClick} className="text-3xl font-extrabold text-[#dadbdb] drop-shadow-sm tracking-wide">
                    ZURFRK
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 font-extrabold drop-shadow-sm tracking-wide text-gray-200">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href} 
                            // 2. ใส่ตรรกะแบบ Inline ตรงนี้
                            aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    aria-label="Toggle mobile navigation menu"
                    aria-expanded={menuOpen}
                    className="md:hidden z-50"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <XIcon /> : <MenuIcon />}
                </button>
            </header>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div
                    className="md:hidden bg-[#e5c4a5] px-4 py-3 space-y-2 text-gray-800 text-sm font-medium shadow-inner fixed top-0 left-0 w-full pt-20"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="block py-2"
                            onClick={handleLinkClick}
                            // 3. ใส่ตรรกะแบบ Inline ตรงนี้เช่นกัน
                            aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}