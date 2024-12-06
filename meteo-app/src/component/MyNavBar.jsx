import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const MyNavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-navbar">
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            Scardigno Weather
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Climate Change
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light ">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyNavBar;
