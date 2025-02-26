"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { useClerk, useUser } from "@clerk/clerk-react"

const CustomUserButton: React.FC = () => {
    const { openUserProfile, signOut } = useClerk()
    const { user, isLoaded } = useUser()
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement | null>(null)

    const displayName: string =
        isLoaded && user ? user.username || user.firstName || user.fullName || "User" : "Loading..."

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev)
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && e.target instanceof Node && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div className="relative inline-block">
            <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 bg-white rounded-lg p-2 shadow-md hover:bg-gray-50 transition"
            >
                {isLoaded && user ? (
                    <img src={user.imageUrl || ""} alt="User Avatar" className="h-8 w-8 rounded-full object-cover" />
                ) : (
                    <div className="h-8 w-8 rounded-full bg-indigo-500 text-white flex items-center justify-center">
                        {displayName.charAt(0).toUpperCase()}
                    </div>
                )}
                <span className="text-sm font-medium text-gray-700">{displayName}</span>
            </button>

            {dropdownOpen && isLoaded && user && (
                <div
                    ref={dropdownRef}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50 transition-opacity duration-200 ease-in-out"
                >
                    <button
                        onClick={() => {
                            openUserProfile()
                            setDropdownOpen(false)
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    >
                        Manage Account
                    </button>
                    <button
                        onClick={async () => {
                            await signOut({ redirectUrl: "/" })
                            setDropdownOpen(false)
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    )
}

export default CustomUserButton

