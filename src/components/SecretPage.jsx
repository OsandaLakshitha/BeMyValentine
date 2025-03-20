import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function SecretPage() {
  const navigate = useNavigate();
  const [randomMessage, setRandomMessage] = useState("");

  // Funny romantic messages
  const messages = [
    "Are you a magician? Because whenever I look at you, everyone else disappears! 😍✨",
    "Do you have a map? Because I just got lost in your eyes... again! 😘💖",
    "If kisses were snowflakes, I'd send you a blizzard! ☃️💋",
    "You're like a WiFi signal—strong, irresistible, and I need the password to your heart! 🔐📶",
    "If beauty were time, you’d be an eternity. ⏳💘",
    "Are you French? Because Eiffel for you! 🇫🇷❤️😂",
    "Even Google can’t find someone like you! 🔍💖",
    "Do you believe in love at first sight, or should I walk by again? 😆💞",
    "Are you a bank loan? Because you have my interest! 💸😍",
    "If you were a vegetable, you'd be a cute-cumber! 🥒💚😂",
    "If you were a song, you'd be the sweetest melody! 🎶💘",
    "Do you know what would look great on you? Me! 😜❤️",
    "I must be a snowflake, because I've fallen for you! ❄️🥰",
    "Are you made of copper and tellurium? Because you’re Cu-Te! 🧪😆💖",
  ];

  useEffect(() => {
    setRandomMessage(messages[Math.floor(Math.random() * messages.length)]);
  }, []);

  return (
    <div className="secret-wrapper">
      <div className="secret-container">
        <h1>💖 Secret Romantic Message 💖</h1>
        <p className="intro">Shhh... You found the hidden love vault! Here’s something special just for you: 💌</p>
        <p className="romantic-message">{randomMessage}</p>
        <div className="heart-animation">💘💘💘</div>
        <button onClick={() => navigate("/")}>Go Back to Safety! 😆</button>
      </div>
    </div>
  );
}

export default SecretPage;
