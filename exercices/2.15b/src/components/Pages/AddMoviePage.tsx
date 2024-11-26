import { useState, SyntheticEvent } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";

const AddMoviePage = () => {
  // TODO : Get the addPizza function
  const { addMovie }: MovieContext = useOutletContext();

  const navigate = useNavigate();
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [director, setDirector] = useState<string | undefined>(undefined);
  const [duration, setDuration] = useState<number | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [budget, setBudget] = useState<number | undefined>(undefined);
  const [link, setLink] = useState<string | undefined>(undefined);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!title || !director || !duration) {
      return;
    }
    addMovie({ title, director, duration, description, budget, link });
    navigate("/movielist");
  };

  const handleTitleChange = (e: SyntheticEvent) => {
    const titleInput = e.target as HTMLInputElement;
    console.log("change in titleInput:", titleInput.value);
    setTitle(titleInput.value);
  };

  const handleDirectorChange = (e: SyntheticEvent) => {
    const directorInput = e.target as HTMLInputElement;
    console.log("change in directorInput:", directorInput.value);
    setDirector(directorInput.value);
  };

  const handleDurationChange = (e: SyntheticEvent) => {
    const durationInput = e.target as HTMLInputElement;
    console.log("change in durationInput:", durationInput.value);
    const intValue = parseInt(durationInput.value);
    if (!isNaN(intValue) && intValue >= 60) {
      setDuration(intValue);
    }
  };

  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    console.log("change in descriptionInput:", descriptionInput.value);
    if (descriptionInput.value !== "") {
      setDescription(descriptionInput.value);
    }
    //setDescription(descriptionInput.value);
  };

  const handleBudgetChange = (e: SyntheticEvent) => {
    const budgetInput = e.target as HTMLInputElement;
    console.log("change in budgetInput:", budgetInput.value);
    const intValue = parseInt(budgetInput.value);
    if (!isNaN(intValue) && intValue >= 200000) {
      setBudget(intValue);
    }
  };

  const handleLinkChange = (e: SyntheticEvent) => {
    const linkInput = e.target as HTMLInputElement;
    console.log("change in linkInput:", linkInput.value);
    setLink(linkInput.value);
  };

  return (
    <div>
      <h1>Ajoutez movie</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="movie">Movie</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleTitleChange}
          required
        />
        <label htmlFor="director">Director</label>
        <input
          type="text"
          id="director"
          name="director"
          onChange={handleDirectorChange}
          required
        />
        <label htmlFor="duration">Duration</label>
        <input
          type="number"
          id="duration"
          name="duration"
          onChange={handleDurationChange}
          placeholder="60"
          min="60"
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={handleDescriptionChange}
        />
        <label htmlFor="budget">Budget</label>
        <input
          type="number"
          id="budget"
          name="budget"
          placeholder="200000"
          min="200000"
          onChange={handleBudgetChange}
        />
        <label htmlFor="link">Link</label>
        <input type="text" id="link" name="link" onChange={handleLinkChange} />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddMoviePage;
