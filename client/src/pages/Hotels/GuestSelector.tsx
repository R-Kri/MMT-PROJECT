import type React from "react"
import { Users } from "lucide-react"
import type { Room } from "../../types/hotel"

interface GuestSelectorProps {
  rooms: Room[]
  showDropdown: boolean
  roomSummary: string
  onToggleDropdown: () => void
  onUpdateRoom: (roomIndex: number, field: keyof Room, value: number) => void
  onAddRoom: () => void
  onRemoveRoom: (index: number) => void
}

export const GuestSelector: React.FC<GuestSelectorProps> = ({
  rooms,
  showDropdown,
  roomSummary,
  onToggleDropdown,
  onUpdateRoom,
  onAddRoom,
  onRemoveRoom,
}) => {
  return (
    <div className="relative z-10">
      <label className="block text-xs font-medium text-gray-600 mb-1">GUESTS</label>
      <div className="p-2 border min-w-[180px] rounded-lg cursor-pointer hover:border-blue-500" onClick={onToggleDropdown}>
        <div className="flex justify-between items-center">
          <div className="text-sm">{roomSummary}</div>
          <Users className="text-blue-500 h-4 w-4" />
        </div>
      </div>
      {showDropdown && (
        <div className="absolute z-20 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-96 overflow-y-auto">
          {rooms.map((room, index) => (
            <div key={index} className="p-4 border-b">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">Room {index + 1}</h3>
                {index > 0 && (
                  <button onClick={() => onRemoveRoom(index)} className="text-red-500 text-sm">
                    Remove
                  </button>
                )}
              </div>
              <div className="space-y-2">
                <RoomOccupancyControl
                  label="Adults"
                  value={room.adults}
                  min={1}
                  max={4}
                  onChange={(value) => onUpdateRoom(index, "adults", value)}
                />
                <RoomOccupancyControl
                  label="Children"
                  value={room.children}
                  min={0}
                  max={2}
                  onChange={(value) => onUpdateRoom(index, "children", value)}
                />
              </div>
            </div>
          ))}
          {rooms.length < 4 && (
            <div className="p-4 text-blue-600 cursor-pointer hover:bg-blue-50" onClick={onAddRoom}>
              + Add Room
            </div>
          )}
        </div>
      )}
    </div>
  )
}

interface RoomOccupancyControlProps {
  label: string
  value: number
  min: number
  max: number
  onChange: (value: number) => void
}

const RoomOccupancyControl: React.FC<RoomOccupancyControlProps> = ({ label, value, min, max, onChange }) => {
  return (
    <div className="flex justify-between items-center">
      <span>{label}</span>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          className="px-2 py-1 border rounded"
          aria-label={`Decrease ${label}`}
        >
          -
        </button>
        <span>{value}</span>
        <button
          onClick={() => onChange(Math.min(max, value + 1))}
          className="px-2 py-1 border rounded"
          aria-label={`Increase ${label}`}
        >
          +
        </button>
      </div>
    </div>
  )
}

