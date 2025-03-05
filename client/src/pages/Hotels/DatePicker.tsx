import type React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react";

interface DateSelectorProps {
  label: string;
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void; // Allow null values
  minDate: Date;
}

export const DateSelector: React.FC<DateSelectorProps> = ({
  label,
  selectedDate,
  onDateChange,
  minDate,
}) => {
  return (
    <div className="relative z-20">
      <label className="block text-xs font-medium text-gray-600 mb-1">
        {label}
      </label>
      <div className="relative">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => onDateChange(date)} // Now properly typed
          minDate={minDate}
          placeholderText="Select date"
          className="w-full p-2 border rounded-lg cursor-pointer hover:border-blue-500 text-sm"
          dateFormat="dd MMM yyyy"
        />
        <Calendar className="absolute right-2 top-2 text-blue-500 h-4 w-4" />
      </div>
    </div>
  );
};
