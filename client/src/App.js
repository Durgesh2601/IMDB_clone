import './App.css';
import { MoviesList } from './components/Movies/MoviesList';
import { Navbar } from './components/Navbar/Navbar';
import { SignIn } from './components/SignIn/SignIn';
import { SignUp } from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MoviesList/>
      <SignIn/>
      <SignUp/>
    </div>
  );
}

export default App;
