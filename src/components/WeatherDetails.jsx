export default function WeatherDetails({ data }) {
  if (!data) return null

  return (
    <div className="bottom">
      <div className="feels">
        <p>{(data.main.feels_like-273.15).toFixed(2)}°C</p>
        <p>feels like</p>
      </div>
      <div className="humidity">
        <p>{data.main.humidity}%</p>
        <p>Humidity</p>
      </div>
      <div className="wind">
        <p>{data.wind.speed} MPH</p>
        <p>wind speed</p>
      </div>
    </div>
  )
}