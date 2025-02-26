import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ROUTES } from "./routes"; 
import backgroundImage from "./assets/images/background.jpg";
import "./App.css";
import FlightSearchResults from "./pages/Flights/flightSearchResults";
import HotelSearchResults from "./pages/Hotels/HotelSearchResults";
import TourSearchResults from "./pages/TourPackages/TourSearchResults";

function App() {
  return (
    <Router>
      <div
        className="app-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.flights} element={<FlightSearchResults />} />
          <Route path={ROUTES.hotels} element={<HotelSearchResults />} />
          <Route path={ROUTES.tours} element={<TourSearchResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
