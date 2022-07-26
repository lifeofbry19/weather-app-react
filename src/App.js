import SearchBar from "./components/SearchBar";
import Location from "./components/Location";
import Date from "./components/Date";
import Weather from "./components/Weather";

function App() {
  return (
    <div
      className="main-wrapper"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "150px",
        gap: "20px",
      }}
    >
      <SearchBar />
      <Location />
      <Date />
      <Weather />
    </div>
  );
}

export default App;
