import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/LocationCity';
import TourIcon from '@mui/icons-material/Luggage';
import { TabType } from "../utils/types"; 


// Define props for Navbar
interface NavbarProps {
    setActiveTab: (tab: TabType) => void;
    activeTab: TabType;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveTab, activeTab }) => {
    return (
        <nav className="bg-white w-[80%] z-10 md:w-[50%] lg:w-[40%] mx-auto rounded-lg border-gray-300 shadow-2xl flex justify-around px-5 py-3">
            {[
                { name: 'flights', icon: <FlightIcon className="text-blue-500 text-3xl sm:text-4xl" />, label: 'Flights' },
                { name: 'hotels', icon: <HotelIcon className="text-blue-500 text-3xl sm:text-4xl" />, label: 'Hotels' },
                { name: 'tours', icon: <TourIcon className="text-blue-500 text-3xl sm:text-4xl" />, label: 'Tours' }
            ].map((tab) => (
                <span
                    key={tab.name}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => setActiveTab(tab.name as TabType)}
                >
                    {tab.icon}
                    <span className={`text-xs sm:text-sm md:text-base font-normal ${activeTab === tab.name ? "text-blue-500 font-semibold" : ""}`}>
                        {tab.label}
                    </span>
                    {activeTab === tab.name && <div className="w-10 h-1 bg-blue-500 mt-1 rounded-full"></div>}
                </span>
            ))}
        </nav>
    );
};

export default Navbar;
