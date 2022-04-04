import './App.css';
import { MoviesList } from './components/Movies/MoviesList';
import { Navbar } from './components/Navbar/Navbar';
import { SignIn } from './components/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MoviesList/>
      <SignIn/>
    </div>
  );
}

export default App;
