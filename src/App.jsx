import { useEffect } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import WeatherDetails from './components/WeatherDetails'
import { useWeather } from './hooks/  useWeather'
import { getWeather } from './services/  api'

function App() {
  const { data, error, fetchWeather } = useWeather()


  return (
    <div className="app">
      <SearchBar onSearch={fetchWeather} />

      <div className="container">
        {error && <p>{error}</p>}
        <WeatherCard data={data} />
        <WeatherDetails data={data} />
      </div>
    </div>
  )
}

export default App