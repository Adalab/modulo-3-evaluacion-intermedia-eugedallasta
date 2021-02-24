import "../styles/Pokemon.css";

function Pokemon(props) {
  const pokeType = props.types.map((type, i) => {
    return (
      <li key={ i }>{ type }</li>
    )
  });

  
  return (
    <article className="pokeCard">
      <h3> Pokemon name: {props.name}</h3>
      <img src={props.url} alt={props.name} />
      <ul>Type:{pokeType}</ul>
    </article>
  );
}

export default Pokemon;
