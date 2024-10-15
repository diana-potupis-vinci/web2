import Header from "../Header";
import PageTitle from "../PageTitle";
import Cartes from "../Cartes";
import Footer from "../Footer";
const pageTitle = "Welcome to My App";
import footerImage from "../../assets/img/michiel-annaert-fQEbXEPDYOE-unsplash.jpg";
import headerimage from "../../assets/img/maksim-samuilionak-_BR3-t7VRrw-unsplash.jpg";

const cartesUtulisateurs = [
  {
    name: "Alice",
    age: 25,
  },
  {
    name: "Bob",
    age: 30,
  },
  {
    name: "Charlie",
    age: 35,
  },
];

const App = () => {
  return (
    <div>
      <Header image={headerimage}>
        <h1>Welcome to my App</h1>
      </Header>
      <PageTitle title={pageTitle} />
      <Cartes cartesUtulisateurs={cartesUtulisateurs} />
      <Footer logo={footerImage}>
        <p>© 2023 My App | Designed by Me</p>
      </Footer>
    </div>
  );
};

export default App;
