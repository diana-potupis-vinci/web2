import { Outlet } from "react-router-dom";
import Header from "../Layot/Header.tsx";
import NavBar from "../Layot/NavBar.tsx";
import Footer from "../Layot/Footer.tsx";

const App = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
