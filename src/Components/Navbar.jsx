import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from '../Photos/download (1).png'
import { TiThMenu } from "react-icons/ti";
import { IoClose, IoChevronDownSharp } from "react-icons/io5";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="flex items-center justify-between px-4 py-4 bg-blue-600 shadow-md">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>

            <div className="hidden md:flex flex-1 justify-center space-x-6 items-center">
                <div className="relative" ref={dropdownRef}>
                    <button
                        className="flex items-center text-gray-700 hover:text-gray-900"
                        onClick={toggleDropdown}
                    >
                        Products <IoChevronDownSharp className="ml-1" />
                    </button>
                    {dropdownOpen && (
                        <div className="absolute top-8 left-0 bg-white shadow-md border rounded-lg w-48">
                            <Link
                                to="/"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Motor Insurance Policies
                            </Link>
                            <Link
                                to="/"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Travel Policies
                            </Link>
                            <Link
                                to="/"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Health Policies
                            </Link>
                            <Link
                                to="/"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Marine Policies
                            </Link>
                            <Link
                                to="/"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Rural Policies
                            </Link>
                        </div>
                    )}
                </div>
                <Link to="/" className="text-gray-700 hover:text-gray-900">
                    Quick Renewal
                </Link>
                <Link to="/" className="text-gray-700 hover:text-gray-900">
                    Quick Pay
                </Link>
                <Link to="/" className="text-gray-700 hover:text-gray-900">
                    Services
                </Link>

            </div>

            <div className="hidden md:flex space-x-4 items-center">
               
                <button className="px-4 py-2 bg-white text-black rounded ">
                    Login
                </button>
            </div>

            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-2xl text-gray-700">
                    {menuOpen ? <IoClose /> : <TiThMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-md flex flex-col items-start p-4 space-y-4 md:hidden">
                    
                    <div className="w-full" ref={dropdownRef}>
                        <button
                            className="flex justify-between items-center w-full text-gray-700 hover:text-gray-900"
                            onClick={toggleDropdown}
                        >
                            Products <IoChevronDownSharp />
                        </button>
                        {dropdownOpen && (
                            <div className="flex flex-col bg-white shadow-md border rounded-lg">
                                <Link
                                    to="/"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => {
                                        setDropdownOpen(false);
                                        setMenuOpen(false);
                                    }}
                                >
                                    Motor Insurance Policies
                                </Link>
                                <Link
                                    to="/"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => {
                                        setDropdownOpen(false);
                                        setMenuOpen(false);
                                    }}
                                >
                                    Travel Policies
                                </Link>
                                <Link
                                    to="/"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => {
                                        setDropdownOpen(false);
                                        setMenuOpen(false);
                                    }}
                                >
                                    Health Policies
                                </Link>
                                <Link
                                    to="/jacket-dry-cleaning-services"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => {
                                        setDropdownOpen(false);
                                        setMenuOpen(false);
                                    }}
                                >
                                    Marine Policies
                                </Link>
                                <Link
                                    to="/"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => {
                                        setDropdownOpen(false);
                                        setMenuOpen(false);
                                    }}
                                >
                                    Rural Policies
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link to="/" className="text-gray-700 hover:text-gray-900">
                    Quick Renewal
                </Link>
                <Link to="/" className="text-gray-700 hover:text-gray-900">
                    Quick Pay
                </Link>
                <Link to="/" className="text-gray-700 hover:text-gray-900">
                    Services
                </Link>
                    
                    <button className="px-4 py-2 bg-white text-black rounded">
                        Login
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;





