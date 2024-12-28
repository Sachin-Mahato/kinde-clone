"use client";
import { useState } from "react";
import Image from "next/image";
export default function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    className="flex items-center justify-center w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    aria-expanded={isOpen}
                    onClick={toggleMenu}
                >
                    <Image
                        className="rounded-full"
                        src="https://avatars.githubusercontent.com/u/93040506?v=4"
                        alt="Sachin Mahato avatar"
                        width={40}
                        height={40}
                    />
                </button>
            </div>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <div className="p-4 flex items-center">
                        <Image
                            className="rounded-full"
                            src="https://avatars.githubusercontent.com/u/93040506?v=4"
                            alt="Sachin Mahato avatar"
                            width={40}
                            height={40}
                        />
                        <div className="ml-3">
                            <div className="text-sm font-medium text-gray-900">
                                Sachin Mahato
                            </div>
                            <a
                                className="text-sm text-gray-500"
                                href="mailto:sachin333777@outlook.com"
                            >
                                sachin333777@outlook.com
                            </a>
                        </div>
                    </div>
                    <div className="border-t border-gray-100"></div>
                    <nav aria-label="User menu" className="py-1">
                        <ul>
                            <li>
                                <a
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    href="https://app.kinde.com/account/cx/_:nav&m:manage_business&org_code:org_85036a1337868f85::_:submenu&s:list"
                                >
                                    Account details
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    href="/admin-logout"
                                >
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
}
