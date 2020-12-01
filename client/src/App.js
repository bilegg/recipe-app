import "./App.css";
import RandomMeal from "./components/RandomMeal";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">Recipe App</header>
      <RandomMeal />
    </div>
  );
}

export default App;
