import type { Flight } from "../types/flight";

export const flights: Flight[] = [
    {
        id: "1",
        airline: "Air India",
        airlineCode: "AI",
        flightNumber: "AI-101",
        onTimePerformance: 88,
        departureTime: "08:00",
        departureDate: "Thu, 31 Oct 2024",
        origin: "Mumbai",
        originCode: "BOM",
        duration: "2h 40m",
        stops: "Non stop",
        arrivalTime: "10:40",
        arrivalDate: "Thu, 31 Oct 2024",
        destination: "Bangalore",
        destinationCode: "BLR",
        price: 6800,
        currency: "₹",
        refundable: true,
        refundableText: "Partially Refundable",
        fareDetails: {
            baseFare: 6000,
            taxes: 800,
            perPassenger: 6800,
            total: 6800,
            adultCount: 1,
            adultFare: 6800,
        },
    },
    {
        id: "2",
        airline: "IndiGo",
        airlineCode: "6E",
        flightNumber: "6E-234",
        onTimePerformance: 91,
        departureTime: "11:30",
        departureDate: "Thu, 31 Oct 2024",
        origin: "Bangalore",
        originCode: "BLR",
        duration: "2h 20m",
        stops: "Non stop",
        arrivalTime: "13:50",
        arrivalDate: "Thu, 31 Oct 2024",
        destination: "Chennai",
        destinationCode: "MAA",
        price: 5600,
        currency: "₹",
        refundable: false,
        refundableText: "Non-Refundable",
        fareDetails: {
            baseFare: 5000,
            taxes: 600,
            perPassenger: 5600,
            total: 5600,
            adultCount: 1,
            adultFare: 5600,
        },
    },
    {
        id: "3",
        airline: "SpiceJet",
        airlineCode: "SG",
        flightNumber: "SG-678",
        onTimePerformance: 84,
        departureTime: "15:45",
        departureDate: "Thu, 31 Oct 2024",
        origin: "Chennai",
        originCode: "MAA",
        duration: "1h 50m",
        stops: "Non stop",
        arrivalTime: "17:35",
        arrivalDate: "Thu, 31 Oct 2024",
        destination: "Hyderabad",
        destinationCode: "HYD",
        price: 5300,
        currency: "₹",
        refundable: true,
        refundableText: "Fully Refundable",
        fareDetails: {
            baseFare: 4600,
            taxes: 700,
            perPassenger: 5300,
            total: 5300,
            adultCount: 1,
            adultFare: 5300,
        },
    },
    {
        id: "4",
        airline: "Vistara",
        airlineCode: "UK",
        flightNumber: "UK-890",
        onTimePerformance: 93,
        departureTime: "20:10",
        departureDate: "Thu, 31 Oct 2024",
        origin: "Hyderabad",
        originCode: "HYD",
        duration: "2h 15m",
        stops: "Non stop",
        arrivalTime: "22:25",
        arrivalDate: "Thu, 31 Oct 2024",
        destination: "Kolkata",
        destinationCode: "CCU",
        price: 7700,
        currency: "₹",
        refundable: true,
        refundableText: "Fully Refundable",
        fareDetails: {
            baseFare: 6800,
            taxes: 900,
            perPassenger: 7700,
            total: 7700,
            adultCount: 1,
            adultFare: 7700,
        },
    }
];
