import { useState } from "react";
import RoomTypeSelector from "./RoomTypeSelector";

const HotelSearch = () => {
    const [roomTypes, setRoomTypes] = useState<string>("four");

    return (
        <div className="flex justify-start">
            <RoomTypeSelector roomTypes={roomTypes} setRoomTypes={setRoomTypes} />
        </div>
    )
};

export default HotelSearch;
