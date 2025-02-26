import React from "react";
import logo from "../assets/images/logo.png";
import { SignedIn, SignedOut, useClerk } from "@clerk/clerk-react";
import CustomUserButton from "./CustomUserButton"; 

const Header: React.FC = () => {
    const { openSignIn } = useClerk();

    return (
        <div className="w-full max-w-7xl mx-auto px-0">
            <header className="flex items-center justify-between py-2 mb-4">
                <a href="/" className="flex items-center">
                    <img className="h-10" src={logo} alt="makemytrip" />
                </a>

                <div className="ml-auto">
                    <SignedIn>
                        <CustomUserButton />
                    </SignedIn>
                    <SignedOut>
                        <button
                            onClick={() => openSignIn({ redirectUrl: "/" })}
                            className="bg-gradient-to-r from-indigo-500 to-blue-900 font-medium px-2 sm:px-4 md:px-6 py-1 sm:py-2 rounded-lg text-center cursor-pointer text-white text-xs sm:text-sm md:text-base transition"
                        >
                            SignIn
                        </button>
                    </SignedOut>
                </div>
            </header>
        </div>
    );
};

export default Header;
