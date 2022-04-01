import './App.css';
import { MoviesList } from './components/MoviesList/MoviesList';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MoviesList/>
    </div>
  );
}

export default App;
