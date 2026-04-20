import { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [location, setLocation] = useState('')

  return (
    <div className="search">
      <div className="inside">
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter Location"
        />
        <button onClick={() => onSearch(location)}>Search</button>
      </div>
    </div>
  )
}