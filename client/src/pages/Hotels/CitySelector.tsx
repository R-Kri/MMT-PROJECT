import type React from "react"
import { MapPin } from "lucide-react"
import type { City } from "../../types/hotel"

interface CitySelectorProps {
  city: City
  cities: City[]
  showDropdown: boolean
  onToggleDropdown: () => void
  onCitySelect: (city: City) => void
}

export const CitySelector: React.FC<CitySelectorProps> = ({
  city,
  cities,
  showDropdown,
  onToggleDropdown,
  onCitySelect,
}) => {
  return (
    <div className="relative z-3">
      <label className="block text-xs font-medium text-gray-600 mb-1">CITY OR PROPERTY</label>
      <div className="relative flex-1 h-16 min-w-[180px]  p-2 border rounded-lg cursor-pointer hover:border-blue-500" onClick={onToggleDropdown}>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-bold">{city.name}</div>
            <div className="text-xs text-gray-600">{city.address}</div>
          </div>
          <MapPin className="text-blue-500 h-4 w-4" />
        </div>
      </div>
      {showDropdown && (
        <div className="absolute z-20 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-96 overflow-y-auto">
          <div className="p-2 bg-gray-50 border-b">
            <div className="text-sm font-medium text-gray-600">Trending Destinations</div>
          </div>
          {cities.map((cityItem) => (
            <div
              key={cityItem.name}
              className="p-3 cursor-pointer hover:bg-blue-50 flex items-center justify-between"
              onClick={() => onCitySelect(cityItem)}
            >
              <div>
                <div className="font-bold">{cityItem.name}</div>
                <div className="text-xs text-gray-600">{cityItem.address}</div>
              </div>
              {cityItem.trending && (
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Trending</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

