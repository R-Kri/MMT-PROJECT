import React from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { ROUTES } from "../routes"; // ✅ Import route constants

interface SearchButtonProps {
    activeTab: "flights" | "hotels" | "tours";
}

const SearchButton: React.FC<SearchButtonProps> = ({ activeTab }) => {
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(ROUTES[activeTab]); // ✅ Dynamically navigate based on active tab
    };

    return (
        <div
            className="bg-gradient-to-r from-blue-500 to-blue-600 -mt-12 text-white font-bold text-center py-2 rounded-full w-48 mx-auto cursor-pointer z-20 text-2xl flex items-center justify-center gap-2 transform translate-y-1/2"
            onClick={handleSearch}
        >
            <Search className="h-5 w-5" />
            <span>Search</span>
        </div>
    );
};

export default SearchButton;
