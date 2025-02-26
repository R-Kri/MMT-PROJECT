import { useState, useEffect } from "react";
import CustomDatePicker from "../../components/CustomDatePicker";

const HotelDates = () => {
    const [dates, setDates] = useState<{ startDate: Date | null; endDate: Date | null }>({
        startDate: null,
        endDate: null,
    });

    useEffect(() => {
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        setDates({ startDate: today, endDate: tomorrow });
    }, []);

    const handleDateChange = (newDates: { startDate: Date | null; endDate?: Date | null }) => {
        setDates({
            startDate: newDates.startDate,
            endDate: newDates.endDate ?? null,
        });
    };

    return (
        <div>
            <CustomDatePicker
                mode="round-trip"
                startDate={dates.startDate}
                endDate={dates.endDate}
                onChange={handleDateChange}
                startLabel="Check-in"
                endLabel="Check-out"
                isEndDateMandatory={true}
            />
        </div>
    );
};

export default HotelDates;
