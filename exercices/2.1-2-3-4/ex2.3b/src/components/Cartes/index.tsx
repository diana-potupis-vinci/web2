interface Utilisateurs {
  name: string;
  age: number;
}

interface CartesUtulisateurs {
  cartesUtulisateurs: Utilisateurs[];
}

const Cartes = (props: CartesUtulisateurs) => {
  return (
    <div>
      <ul>
        {props.cartesUtulisateurs.map((carte, index) => (
          <li key={index}>
            <h2>{carte.name}</h2>
            <p>Age: {carte.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cartes;