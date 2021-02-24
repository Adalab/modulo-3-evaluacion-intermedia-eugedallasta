import "../styles/Pokemon.css";

function Pokemon(props) {
  return (
    <li key={props.key} className="pokeCard">
      <h3> Pokemon name: {props.name}</h3>
      <img src={props.url} alt={props.name} />
      <p>
        Type {props.types[0]} {props.types[1]}
      </p>{" "}
    </li>
  );
}

export default Pokemon;
