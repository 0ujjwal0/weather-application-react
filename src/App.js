import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="phagwara" />
        <footer>
          This project was coded by Ujjwal and is{" "}
          <a
            href="https://github.com/0ujjwal0/weather-application-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div> 
  );
}
