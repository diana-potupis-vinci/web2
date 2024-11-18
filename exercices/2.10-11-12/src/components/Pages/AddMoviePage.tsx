import { useState, SyntheticEvent } from "react";
import {
  unstable_HistoryRouter,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import { MovieContext } from "../../types";

const AddMoviePage = () => {
  // TODO : Get the addPizza function
  const { addMovie }: MovieContext = useOutletContext();

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState<number>(1);
  const [description, setDescription] = useState<string | undefined>("");
  const [budget, setBudget] = useState<number | undefined>(undefined);
  const [link, setLink] = useState<string | undefined>("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
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
    setDuration(durationInput.value ? parseInt(durationInput.value) : 15);
  };

  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    console.log("change in descriptionInput:", descriptionInput.value);
    setDescription(descriptionInput.value);
  };

  const handleBudgetChange = (e: SyntheticEvent) => {
    const budgetInput = e.target as HTMLInputElement;
    console.log("change in budgetInput:", budgetInput.value);
    setBudget(budgetInput.value ? parseInt(budgetInput.value) : undefined);
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
          value={title}
          type="text"
          id="title"
          name="title"
          onChange={handleTitleChange}
          required
        />
        <label htmlFor="director">Director</label>
        <input
          value={director}
          type="text"
          id="director"
          name="director"
          onChange={handleDirectorChange}
          required
        />
        <label htmlFor="duration">Duration</label>
        <input
          value={duration}
          type="number"
          id="duration"
          name="duration"
          onChange={handleDurationChange}
          min="1"
          required
        />
        <label htmlFor="description">Description</label>
        <input
          value={description}
          type="text"
          id="description"
          name="description"
          onChange={handleDescriptionChange}
        />
        <label htmlFor="budget">Budget</label>
        <input
          value={budget}
          type="text"
          id="budget"
          name="budget"
          onChange={handleBudgetChange}
        />
        <label htmlFor="link">Link</label>
        <input
          value={link}
          type="text"
          id="link"
          name="link"
          onChange={handleLinkChange}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddMoviePage;
