import pokemonArray from '../data/data.json';
import PokemonList from './PokemonList';
import '../styles/App.css';
function App() {
  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <PokemonList itemsFromPokemonArray={pokemonArray} />
    </div>
  );
}

export default App;
