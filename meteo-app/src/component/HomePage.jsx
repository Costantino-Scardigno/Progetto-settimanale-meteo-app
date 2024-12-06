import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const fetchData = (event) => {
    event.preventDefault();

    const apikey = "819e26124cb5722059cb02d2e5df8df6";
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apikey}`
    )
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .then((result) => {
        console.log("Risultato della ricerca:", result);

        if (result) {
          navigate("/city-details", { state: { result } });
        } else {
          throw new Error("Città non trovata");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-5 background">
      <div className="row justify-content-center">
        <div className="col-xl-6">
          <h1 className="display-1 text-white">
            Climate Change Weather Forecast
          </h1>
          <p className="text-white fs-4 mt-4">Cerca Località</p>
          <form className="d-flex" role="search" onSubmit={fetchData}>
            <input
              value={city}
              onChange={handleInputChange}
              className="form-control me-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
