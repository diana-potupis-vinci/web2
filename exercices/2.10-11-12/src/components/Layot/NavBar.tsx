import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/cinema")}>Cinema</button>
      <button onClick={() => navigate("/movielist")}>My Favorite Movies</button>
      <button onClick={() => navigate("/addmovie")}>Add movie</button>
    </nav>
  );
};

export default NavBar;
