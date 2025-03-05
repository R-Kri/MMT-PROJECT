import { useState, useEffect } from "react"
import { cities } from "../../data/hotel"
import { CitySelector } from "./CitySelector"
import { DateSelector } from "./DatePicker"
import { GuestSelector } from "./GuestSelector"
import type { City, Room } from "../../types/hotel"

const HotelSearchResult = () => {
  const [showCityDropdown, setShowCityDropdown] = useState(false)
  const [showGuestDropdown, setShowGuestDropdown] = useState(false)
  const [city, setCity] = useState<City>(cities[1]) // Default to Delhi
  const [checkIn, setCheckIn] = useState<Date | null>(null)
  const [checkOut, setCheckOut] = useState<Date | null>(null)
  const [rooms, setRooms] = useState<Room[]>([{ adults: 2, children: 0, childrenAges: [] }])

  useEffect(() => {
    const today = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(today.getDate() + 1)
    handleCheckInChange(today)
    setCheckOut(tomorrow)
  }, [])

  const handleCityClick = (selectedCity: City) => {
    setCity(selectedCity)
    setShowCityDropdown(false)
  }

  const handleCheckInChange = (date: Date | null) => {
    if (!date) return; 
    setCheckIn(date);
    if (checkOut && date >= checkOut) {
      const nextDay = new Date(date);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOut(nextDay);
    }
  };
  
  const updateRoom = (roomIndex: number, field: keyof Room, value: number) => {
    setRooms((prevRooms) => {
      const newRooms = [...prevRooms]
      if (field === "children") {
        const prevChildren = newRooms[roomIndex].children
        newRooms[roomIndex] = {
          ...newRooms[roomIndex],
          children: value,
          childrenAges:
            value > prevChildren
              ? [...newRooms[roomIndex].childrenAges, 0]
              : newRooms[roomIndex].childrenAges.slice(0, value),
        }
      } else {
        newRooms[roomIndex] = {
          ...newRooms[roomIndex],
          [field]: value,
        }
      }
      return newRooms
    })
  }

  const addRoom = () => {
    if (rooms.length < 4) {
      setRooms([...rooms, { adults: 1, children: 0, childrenAges: [] }])
    }
  }

  const removeRoom = (index: number) => {
    if (rooms.length > 1) {
      setRooms(rooms.filter((_, i) => i !== index))
    }
  }

  const getTotalGuests = () => {
    return rooms.reduce((total, room) => total + room.adults + room.children, 0)
  }

  const getRoomSummary = () => {
    const totalRooms = rooms.length
    const totalGuests = getTotalGuests()
    return `${totalRooms} Room${totalRooms > 1 ? "s" : ""}, ${totalGuests} Guest${totalGuests > 1 ? "s" : ""}`
  }

  const toggleCityDropdown = () => {
    setShowCityDropdown(!showCityDropdown)
    setShowGuestDropdown(false)
  }

  const toggleGuestDropdown = () => {
    setShowGuestDropdown(!showGuestDropdown)
    setShowCityDropdown(false)
  }

  return (
    <div className="py-10 w-[95%] flex justify-center"> 
      <div className="bg-white w-full max-w-6xl rounded-xl -mt-10 -mb-10 shadow-lg p-4 sm:p-6 md:p-8 lg:p-10"> {/* Added max-w-6xl to control width */}
        <div className="flex flex-wrap gap-1 sm:flex-row justify-between items-center">
          <CitySelector
            city={city}
            cities={cities}
            showDropdown={showCityDropdown}
            onToggleDropdown={toggleCityDropdown}
            onCitySelect={handleCityClick}
          />

          <DateSelector label="CHECK IN" selectedDate={checkIn} onDateChange={handleCheckInChange} minDate={new Date()} />

          <DateSelector
            label="CHECK OUT"
            selectedDate={checkOut}
            onDateChange={setCheckOut}
            minDate={checkIn || new Date()}
          />

          <GuestSelector
            rooms={rooms}
            showDropdown={showGuestDropdown}
            roomSummary={getRoomSummary()}
            onToggleDropdown={toggleGuestDropdown}
            onUpdateRoom={updateRoom}
            onAddRoom={addRoom}
            onRemoveRoom={removeRoom}
          />
        </div>
      </div>
    </div>
  )
}

export default HotelSearchResult;