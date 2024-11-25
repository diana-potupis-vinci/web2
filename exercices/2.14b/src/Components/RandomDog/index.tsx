import { useEffect, useState } from "react";
interface DogPhoto {
  message: string;
  status: string;
}

function RandomDog() {
  const [dogPhoto, setDogPhoto] = useState<DogPhoto | null>(null);
  useEffect(() => {
    fetchDogs();
  }, []);

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
  return (
    dogPhoto && (
      <img
        src={dogPhoto?.message}
        alt="Random dog"
        style={{ width: "300px", height: "auto" }}
      />
    )
  );
}

export default RandomDog;
