import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DateRequestPage() {
  const [noClicks, setNoClicks] = useState(0);
  const [yesSize, setYesSize] = useState(16);
  const navigate = useNavigate();

  const handleNoClick = () => {
    if (noClicks < 9) {
      setYesSize((prevSize) => prevSize + 5); // Increase YES button size
      setNoClicks(noClicks + 1);
    } else {
      setYesSize(16); // Reset YES button size
      setNoClicks(10); // Make sure noClicks doesn't exceed 10
    }
  };

  return (
    <div className="container">
        <img src="/cutie.gif" alt="Cute Background" className="bg-image" />
      <h1>Do you wanna go on a Date with me? 😍</h1>

      {/* YES Button (grows, then resets) */}
      <button
        style={{ fontSize: `${yesSize}px` }}
        onClick={() => navigate("/success")}
      >
        Yes! 💖
      </button>

      {/* NO Button (turns into YES after 10 clicks) */}
      {noClicks < 10 ? (
        <button onClick={handleNoClick}>No 🙄</button>
      ) : (
        <button onClick={() => navigate("/success")}>Yes! 💖</button> // No turns into Yes
      )}
    </div>
  );
}

export default DateRequestPage;
