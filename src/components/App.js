import pokemonArray from '../data/data.json';
import PokemonList from './PokemonList';
import '../styles/App.css';
function App() {
  console.log(pokemonArray);
  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <PokemonList itemsFromPokemonArray={pokemonArray}/>

      
    </div >
  );
}

export default App;
