import Cartes from "../Cartes";
import Header from "../Header";
import headerimage from "../assets/maksim-samuilionak-_BR3-t7VRrw-unsplash.jpg";

const cartesUtulisateurs=[
  {
    name: "Alice",
    age: 25,
    isOnline: true,
  },
  {
    name: "Bob",
    age: 30,
    isOnline: false,
  },
  {
    name: "Charlie",
    age: 35,
    isOnline: true,
  },
];
const App = () => {
  return (
    <div>
      <Header image={headerimage}>
        <h1>Welcome to my App</h1>
      </Header>
      <Cartes cartesUtulisateurs={cartesUtulisateurs} />
    </div>
  );
};

export default App;

