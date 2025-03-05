import FlightSearch from '../pages/Flights/FlightSearch';
import HotelSearch from '../pages/Hotels/HotelSearch';
import TourSearch from '../pages/TourPackages/TourSearch';
import { TabType } from "../utils/types"; 

interface ContainerProps {
  activeTab: TabType;
}

const Container: React.FC<ContainerProps> = ({ activeTab }) => {
  return (
    <div className="w-full -mt-8 bg-white flex relative rounded-xl">
      {activeTab === 'flights' && <FlightSearch />}
      {activeTab === 'hotels' && <HotelSearch/>}
      {activeTab === 'tours' && <TourSearch />}
    </div>
  );
};

export default Container;
