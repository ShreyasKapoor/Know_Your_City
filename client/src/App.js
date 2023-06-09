import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Weather from "./pages/Weather";
import Concerts from "./pages/concerts";
import News from "./pages/news";
import Dashboard from "./pages/Dashboard";
import PlacesToVisit from './pages/placesToVisit';
// Import the Navbar, Nav and Container components from Bootstrap for a nice layout
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "./components/KYCLogo.png"; // import your logo image

function App() {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
            Know Your City
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather/:city" element={<Weather />} />
        <Route path="/concerts/:city" element={<Concerts />} />
        <Route path="/news/:city" element={<News />} />
        <Route path="/dashboard/:city" element={<Dashboard />} />
        <Route path="/placesToVisit/:city" element={<PlacesToVisit />} />
      </Routes>
    </>
  );
}

export default App;
