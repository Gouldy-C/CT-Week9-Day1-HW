import { Container } from "react-bootstrap";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AlertComp from "./components/AlertComp";
import { useState } from "react";


//const userState = new UserState

function App() {
  const [alertHeading, setAlertHeading] = useState("");
  const [alertColor, setAlertColor] = useState("");
  const [alertMes, setAlertMes] = useState("");


  return (
    <Container fluid className="main-container d-flex flex-column">
      <NavbarComp loggedIn={false} />

      {alertMes && (
        <AlertComp
          alertHeading={alertHeading}
          alertMes={alertMes}
          color={alertColor}
        />
      )}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>

      <FooterComp />
    </Container>
  );
}

export default App;
