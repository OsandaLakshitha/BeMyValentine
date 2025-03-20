import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Hi! 😊</h1>
      <p>Welcome to the funniest way of asking you out! 🥰</p>
      <img src="/cutepuppy.png" alt="Cute Background" className="bg-image" />
      <button onClick={() => navigate("/ask")}>Next ➡️</button>
    </div>
  );
}

export default WelcomePage;
