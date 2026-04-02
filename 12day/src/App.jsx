import { useState, useEffect } from "react";

function App() {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!search) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=69fc7e67846efb97007345071fc5a3f2&units=metric`
        );
        if (!res.ok) {
          throw new Error("City not found");
        }
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [search]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Weather App 🌦️</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={() => setSearch(city)}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>Temperature: {data.main.temp}°C</p>
          <p>Condition: {data.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;