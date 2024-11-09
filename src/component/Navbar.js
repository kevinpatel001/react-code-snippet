// Navbar.js
import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600">
                    <a href="/">MyLogo</a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <a href="#home" className="text-white hover:text-blue-600">Home</a>
                    <a href="#about" className="text-white hover:text-blue-600">About</a>
                    <a href="#services" className="text-white hover:text-blue-600">Services</a>
                    <a href="#contact" className="text-white hover:text-blue-600">Contact</a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="text-gray-800 hover:text-blue-600 focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white px-4 pb-4 shadow-md">
                    <a href="#home" className="block text-gray-800 py-2 hover:text-blue-600">Home</a>
                    <a href="#about" className="block text-gray-800 py-2 hover:text-blue-600">About</a>
                    <a href="#services" className="block text-gray-800 py-2 hover:text-blue-600">Services</a>
                    <a href="#contact" className="block text-gray-800 py-2 hover:text-blue-600">Contact</a>
                    
                </div>
                
            )}
        </nav>
    );
}

export default Navbar;
