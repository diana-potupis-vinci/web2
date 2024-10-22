import { useState } from "react";

interface ChangeColorProps {
  colors: string[];
}

const ChangeColor = ({ colors }: ChangeColorProps) => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleClick = () => {
    setCurrentColorIndex((currentColorIndex + 1) % colors.length);
  };

  return (
    <div style={{ backgroundColor: colors[currentColorIndex] }}>
      <button onClick={handleClick}>
        {colors[(currentColorIndex + 1) % colors.length]}
      </button>
      <p> {colors[currentColorIndex]}</p>
    </div>
  );
};

export default ChangeColor;
