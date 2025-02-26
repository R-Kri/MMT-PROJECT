import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ResultCard } from "./ResultCard";
import {flights} from "../../data/flight"

const FlightSearchResults: React.FC = () => {
    const navigate = useNavigate();
    const [selectedFlight, setSelectedFlight] = useState<string | null>(null);

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8">
            <h1 className="text-3xl font-bold text-blue-600">Flight Search Results</h1>
            <p className="text-gray-700 mt-4">Here are your flight search results...</p>

            <div className="mt-6 grid gap-4 w-full max-w-4xl">
                {flights.map((flight) => (
                    <ResultCard
                        key={flight.id}
                        flight={flight}
                        isSelected={selectedFlight === flight.id}
                        onSelect={() => setSelectedFlight(flight.id)}
                    />
                ))}
            </div>

            <button
                className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={() => navigate("/")}
            >
                Back to Home
            </button>
        </div>
    );
};

export default FlightSearchResults;
