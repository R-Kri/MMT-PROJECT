export interface City {
    code: string;
    name: string;
    airport: string;
  }
  
  export interface Travelers {
    adults: number;
    children: number;
    infants: number;
  }
  
  export interface Flight {
    id: number;
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
  