"use client";

import { useState, useEffect } from "react";
import type { FC, MouseEvent } from "react";

type NavLink = {
    href: string;
    label: string;
};

// ไอคอนต่างๆ ยังใช้สีเข้มเหมือนเดิม
const MenuIcon: FC = () => (
    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);
const XIcon: FC = () => (
    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks: NavLink[] = [
        { href: "#header", label: "Home" },
        { href: "#features", label: "Features" },
        { href: "#about", label: "About" },
        { href: "#explore", label: "Explore" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            // เราจะเปลี่ยนสถานะเมื่อ scroll เกิน 50px
            setIsScrolled(window.scrollY > 50); 
        };

        window.addEventListener('scroll', handleScroll);
        
        // --- Intersection Observer (โค้ดเดิม) ---
        const sections = document.querySelectorAll('section[id], header[id]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { rootMargin: '-30% 0px -70% 0px' });
        sections.forEach(section => observer.observe(section));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');

        if (!href) return;

        const targetId = href.substring(1);

        // จัดการกรณีพิเศษสำหรับ #header หรือลิงก์ Home
        if (targetId === 'header') {
             window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }

        if (menuOpen) setMenuOpen(false);
    };

    return (
        <>
            <header
                id="header"
                // ✅ FIX: เปลี่ยนจากการใช้ isScrolled แค่สี เป็นการสลับระหว่าง absolute และ sticky
                className={`w-full px-4 sm:px-6 py-4 flex justify-between items-center top-0 z-50 transition-all duration-300 
                ${isScrolled 
                    ? 'sticky bg-gradient-to-r from-[#d17314] to-[#1365cf] backdrop-blur-sm shadow-md' 
                    : 'absolute bg-transparent'
                }`}
            >
                {/* FIX: เปลี่ยนสีตัวหนังสือและไอคอนให้เป็นสีเข้มเมื่อ scroll และสีขาวเมื่อโปร่งใส */}
                <h1
                    className={`text-3xl font-extrabold drop-shadow-sm tracking-wide transition-colors ${isScrolled ? 'text-gray-1000' : 'text-white'}`}
                >
                    ZURFRK
                </h1>

                {/* Desktop Navigation */}
                <nav 
                    className={`hidden md:flex items-center gap-6 font-bold drop-shadow-sm tracking-wide transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                >
                    {navLinks.map((link) => (
                        <a 
                            key={link.href} 
                            href={link.href} 
                            onClick={handleSmoothScroll}
                            aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
                            className={`hover:opacity-80 ${activeSection === link.href.substring(1) && isScrolled ? 'text-red-700' : ''}`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
                
                {/* Mobile Menu Button - เปลี่ยนสีไอคอนตามสถานะ scroll */}
                <button
                    aria-label="Toggle mobile navigation menu"
                    aria-expanded={menuOpen}
                    className={`md:hidden z-50 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <XIcon /> : <MenuIcon />}
                </button>
            </header>

            {/* Mobile Dropdown Menu (เหมือนเดิม) */}
            {menuOpen && (
                <div className="md:hidden bg-[#e5c4a5] px-4 py-3 space-y-2 text-gray-800 text-sm font-medium shadow-inner fixed top-0 left-0 w-full pt-20">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="block py-2"
                            onClick={handleSmoothScroll}
                            aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </>
    );
}