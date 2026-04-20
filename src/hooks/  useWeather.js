import { useState } from 'react'
import { getCoordinates, getWeather } from '../services/  api'

export const useWeather = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const fetchWeather = async (location) => {
    try {
      const { lat, lon } = await getCoordinates(location)
      const weather = await getWeather(lat, lon)
      setData(weather)
    } catch (err) {
      setError('Something went wrong')
    }
  }

  return { data, error, fetchWeather }
}