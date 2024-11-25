import { useEffect, useState } from "react";
interface DogPhoto {
  message: string;
  status: string;
}

function RandomDog() {
  const [dogPhoto, setDogPhoto] = useState<DogPhoto | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      fetchDogs();
      const interval = setInterval(() => {
        if (!isPaused) {
          fetchDogs();
        }
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const fetchDogs = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );
      const data = await response.json();
      setDogPhoto(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    dogPhoto && (
      <img
        src={dogPhoto?.message}
        alt="Random dog"
        style={{ width: "300px", height: "auto" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    )
  );
}

export default RandomDog;
