import { useState } from "react";

const ProgressBar = ({ done }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      width: `${done}`,
      height: "100%",
      backgroundColor: "#005c4b",
      transition: "1s ease 0.3s"
    };
    setStyle(newStyle);
  }, 1500);

  return (
    <div className="progress-bar">
      <div className="progress" style={style} data-done={100}></div>
    </div>
  );
};

export default ProgressBar;
