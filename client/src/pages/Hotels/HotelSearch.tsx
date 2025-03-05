import { useState } from "react";
import RoomTypeSelector from "./RoomTypeSelector";
import HotelSearchResult from "./HotelSearchResults";

const HotelSearch = () => {
    const [roomTypes, setRoomTypes] = useState<string>("four");

    return (
        <div className="w-full pb-5 flex flex-col items-center"> 
            <div className="w-full max-w-6xl px-2"> 
                <RoomTypeSelector roomTypes={roomTypes} setRoomTypes={setRoomTypes} />
                <div className="mt-2 mb-5 w-full">
                    <HotelSearchResult />
                </div>
            </div>
        </div>
    )
};

export default HotelSearch;