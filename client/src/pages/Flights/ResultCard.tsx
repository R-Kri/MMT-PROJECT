import React from "react";
import { Clock } from "lucide-react";
import img1 from "../../assets/logo/Indigo.png";
import img2 from "../../assets/logo/spicejet.png";
import img3 from "../../assets/logo/vistara.svg";

// Define types for flight data
interface Flight {
    airline: string;
    onTimePerformance: number;
    departureTime: string;
    origin: string;
    duration: string;
    stops: string;
    arrivalTime: string;
    destination: string;
    price: number;
}

interface FlightCardProps {
    flight: Flight;
    isSelected: boolean;
    onSelect: () => void;
}

// Mapping of airline names to their logo URLs
const airlineLogos: Record<string, string> = {
    IndiGo: img1,
    SpiceJet: img2,
    Vistara: img3,
};

export const ResultCard: React.FC<FlightCardProps> = ({ flight, isSelected, onSelect }) => {
    return (
        <div
            onClick={onSelect}
            className={`rounded-lg border bg-white p-4 shadow-xl px-12 transition-transform duration-300 cursor-pointer 
    ${isSelected ? "border-2 border-blue-700 transform scale-95" : "border border-gray-200"}`}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-1">
                        <img
                            src={airlineLogos[flight.airline] || img1}
                            alt={flight.airline}
                            className="rounded-full h-8 w-8 object-contain"
                        />
                    </div>
                    <span className="font-medium">{flight.airline}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{flight.onTimePerformance}% on time</span>
                </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold">{flight.departureTime}</span>
                    <span className="text-sm text-gray-500">{flight.origin}</span>
                </div>

                <div className="flex flex-col items-center">
                    <span className="text-sm text-gray-500">{flight.duration}</span>
                    <div className="my-1 h-[2px] w-24 bg-gray-300" />
                    <span className="text-xs text-gray-500">{flight.stops}</span>
                </div>

                <div className="flex flex-col items-end">
                    <span className="text-2xl font-bold">{flight.arrivalTime}</span>
                    <span className="text-sm text-gray-500">{flight.destination}</span>
                </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold">₹{flight.price.toLocaleString()}</span>
                <span className="text-sm text-gray-500">per adult</span>
            </div>
        </div>
    );
};
