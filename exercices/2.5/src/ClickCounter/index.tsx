import { useState } from 'react';

interface ClickCounterProps {
  title: string;
  message: string;
  hoverMessage: string;
}

const ClickCounter= ({ title, message, hoverMessage }: ClickCounterProps) => {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleMouse = () => {
    setIsHovered(isHovered => !isHovered);
  };

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={handleClick} onMouseEnter={handleMouse} onMouseLeave={handleMouse}>count is {count}
        
      </button>
      {count >= 10 && <p>{message}</p>}
        {isHovered && <p>{hoverMessage}</p>}
    </div>
  );
};

export default ClickCounter;