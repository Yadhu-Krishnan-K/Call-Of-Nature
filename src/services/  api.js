import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY

export const getCoordinates = async (location) => {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`
  )
  const data = await res.json()
  return data[0]
}

export const getWeather = async (lat, lon) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  )
  return res.data
}