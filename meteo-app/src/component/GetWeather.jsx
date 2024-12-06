import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Alert } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const GetWeather = () => {
  const location = useLocation();
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const result = location.state?.result;

  const apikey = "819e26124cb5722059cb02d2e5df8df6";

  useEffect(() => {
    if (result) {
      const lat = result[0].lat;
      const lon = result[0].lon;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => setCurrentWeather(data))
        .catch((error) =>
          console.error("Errore nella chiamata al meteo corrente:", error)
        );

      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => setForecast(data.list))
        .catch((error) =>
          console.error("Errore nella chiamata alle previsioni:", error)
        );
    }
  }, [result]);

  if (!currentWeather || forecast.length === 0) {
    return <Alert variant="danger">Errore nella chiamata</Alert>;
  }

  return (
    <Container className="mt-5">
      {/* Meteo Corrente */}
      <Card className="card-custom">
        <Card.Img
          variant="top"
          src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`} // Icona del meteo
          alt="Weather icon"
        />
        <Card.Body>
          <Card.Title className="display-1">
            Meteo Attuale a: {currentWeather.name}
          </Card.Title>
          <Card.Text>
            <strong>Stato:</strong> {currentWeather.state}
            <br />
            <strong>Temperatura:</strong> {currentWeather.main.temp}°C
            <br />
            <strong>Descrizione:</strong>{" "}
            {currentWeather.weather[0].description}
            <br />
            <strong>Vento:</strong> {currentWeather.wind.speed} m/s
            <br />
            <strong>Umidità:</strong> {currentWeather.main.humidity}%
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted card-footer">
          Ultimo aggiornamento:{" "}
          {new Date(currentWeather.dt * 1000).toLocaleTimeString()}
        </Card.Footer>
      </Card>

      {/* Previsioni a 5 Giorni */}
      <h3 className="mt-5 display-4 text-white">
        Previsioni per i prossimi 5 giorni
      </h3>
      <Row>
        {forecast.map((forecastItem, index) => {
          if (index % 8 === 0) {
            return (
              <Col key={index} md={4} className="mb-4">
                <Card className="card-custom">
                  <Card.Body>
                    <Card.Title>
                      {new Date(forecastItem.dt * 1000).toLocaleDateString()}
                    </Card.Title>
                    <Card.Img
                      variant="top"
                      src={`http://openweathermap.org/img/wn/${forecastItem.weather[0].icon}.png`}
                      alt="Weather icon"
                    />
                    <Card.Text>
                      <strong>Temperatura:</strong> {forecastItem.main.temp}°C
                      <br />
                      <strong>Descrizione:</strong>{" "}
                      {forecastItem.weather[0].description}
                      <br />
                      <strong>Vento:</strong> {forecastItem.wind.speed} m/s
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          }
          return null;
        })}
      </Row>
    </Container>
  );
};

export default GetWeather;
