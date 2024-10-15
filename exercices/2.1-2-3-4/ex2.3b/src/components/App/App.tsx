import PageTitle from "../PageTitle";
import Cartes from "../Cartes";
import FooterText from "../Footer";
const pageTitle = "Welcome to My App";

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

const footerText = "© 2023 My App";

const App = () => {
  return (
    <div>
      <PageTitle title={pageTitle} />
      <Cartes cartesUtulisateurs={cartesUtulisateurs} />
      <FooterText text={footerText} />
    </div>
  );
};

export default App;
