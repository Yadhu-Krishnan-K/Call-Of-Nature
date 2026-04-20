export default function WeatherCard({ data }) {
  if (!data) return <h1>How is the weather today</h1>

  return (
    <div className="top">
      <div className="location">
        <p>{data.name}</p>
      </div>
      <div className="temp">
        <h1>{(data.main.temp-273.15).toFixed(2)}°C</h1>
      </div>
      <div className="description">
        <p>{data.weather[0].main}</p>
      </div>
    </div>
  )
}