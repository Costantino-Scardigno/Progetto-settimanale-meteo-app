import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./component/MyNavBar";
import HomePage from "./component/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetWeather from "./component/GetWeather";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/city-details" element={<GetWeather />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
