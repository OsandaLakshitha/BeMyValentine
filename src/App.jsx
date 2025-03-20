import { Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import DateRequestPage from "./components/DateRequestPage";
import SuccessPage from "./components/SuccessPage";
import SecretPage from "./components/SecretPage"; // Import the new secret page

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/ask" element={<DateRequestPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/secret" element={<SecretPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;