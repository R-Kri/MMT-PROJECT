import { FC } from "react";
import { Building2, Users } from "lucide-react";

interface RoomTypeSelectorProps {
    roomTypes: string;
    setRoomTypes: (type: string) => void;
}

const RoomTypeSelector: FC<RoomTypeSelectorProps> = ({ roomTypes, setRoomTypes }) => {
    const options = [
        { value: "four", label: "Up to 4 Rooms", icon: <Building2 className="h-4 w-4 mr-2" /> },
        { value: "group", label: "Group Deals", icon: <Users className="h-4 w-4 mr-2" /> },
    ];

    return (
        <ul className="flex flex-wrap gap-4 justify-start sm:justify-start mt-10 px-4 py-3">
            {options.map(({ value, label, icon }) => (
                <li
                    key={value}
                    className={`rounded-full pr-2 cursor-pointer transition-colors duration-200 ${roomTypes === value ? "bg-blue-300 font-semibold" : ""}`}
                    onClick={() => setRoomTypes(value)}
                >
                    <span className="flex items-center px-2 py-2">
                        <input
                            type="radio"
                            checked={roomTypes === value}
                            onChange={() => setRoomTypes(value)}
                            className="mr-2"
                        />
                        {icon}
                        {label}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default RoomTypeSelector;
