import { useEffect, useState } from "react";
interface DogPhoto {
  message: string;
  status: string;
}

function RandomDog() {
  const [dogPhoto, setDogPhoto] = useState<DogPhoto | null>(null);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `fetch error : ${response.status} : ${response.statusText}`
          );
        return response.json();
      })
      .then((dogPhoto) => setDogPhoto(dogPhoto))
      .catch((err) => {
        console.error("HomePage::error: ", err);
      });
  }, []);
  return (
    <img
      src={dogPhoto?.message}
      alt="Random dog"
      style={{ width: "300px", height: "auto" }}
    />
  );
}

export default RandomDog;