import Pokemon from './Pokemon'



function PokemonList(props) {
;
    const pokemonList = props.itemsFromPokemonArray.map((eachItem, i) => {
        return (
          <ul key={i}>
            <Pokemon name={eachItem.name} url={eachItem.url} types={eachItem.types} />
          </ul>
        );
    });

    return (
      <div>
        <ul>{pokemonList}</ul>
      </div>
    );

}

export default PokemonList;