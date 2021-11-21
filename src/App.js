import "./styles.css";
import Header from "./Components/Header";
import WeatherCard from "./Components/WeatherCard";

export default function App() {
  return (
    <div className="App">
      <Header />
      <WeatherCard />
    </div>
  );
}
