import { useNavigate } from "react-router-dom";

function SuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>You won’t regret this! 🥳💞</h1>
      <img src="/bye.gif" alt="Cute Background" className="bg-image" />
      <p>
        Thank you for saying yes! Looking forward to our date! 🎉  
        You have no idea how happy this makes me. From the moment I met you, I knew 
        there was something special about you. Your smile, your laughter, and the way 
        you light up a room—it's all just mesmerizing.  
        I promise to make this the best date ever, filled with laughter, joy, and maybe 
        even a little bit of magic. So get ready, because this is just the beginning 
        of something amazing! 💖✨
      </p>
      <button onClick={() => navigate("/")}>Go Back ⬅️</button>
    </div>
  );
}

export default SuccessPage;
