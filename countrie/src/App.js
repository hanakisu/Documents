import React, { useState, useEffect } from "react";

import Card from "./Card";
import CountriesAll from "./countriesAll.json";
import "./App.css";

function App() {
  const regions = [...new Set(CountriesAll.map((country) => country.region))];
  const [countries, setCountries] = useState(CountriesAll);
  const [regionsFilter, setRegionsFilter] = useState("Regions");
  const [countriesFilter, setCountriesFilter] = useState("");

  useEffect((url) => {
    console.log(countriesFilter);
    setCountries(
      CountriesAll.filter(
        (country) =>
          (regionsFilter === "Regions"
            || country.region
              .toLocaleLowerCase()
              .includes(regionsFilter.toLocaleLowerCase()))
          && (countriesFilter === ""
            || country.name
              .toLocaleLowerCase()
              .includes(countriesFilter.toLocaleLowerCase()))
      )
    );
  }, [regionsFilter, countriesFilter]);

  return (
    <>
      <Heading />
      <div className="form-row m-5">
        <input
          id="input"
          className="form-control col-md-9 m-2"
          type="search"
          placeholder="Search..."
          onChange={(e) => setCountriesFilter(e.target.value)}
        />

        <select
          id="select"
          onChange={(e) => setRegionsFilter(e.target.value)}
          className="form-control col-md-2 m-2"
        >
          <option>All regions</option>
          {regions.map((region) => (
            <option>{region}</option>
          ))}
        </select>
      </div>
      <div className="card-deck p-1">
        {countries.map((country, index) => (
          <Card data={country} index={index} />
        ))}
      </div>
    </>
  );
}

const Heading = () => {
  return (
    <div className="App">
      <header className="App-header">Where in the world?</header>
    </div>
  );
};

export default App;