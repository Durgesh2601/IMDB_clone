import './App.css';
import { Homepage } from './components/Home/Homepgae';
import { MoviesList } from './components/Movies/MoviesList';
import { SignIn } from './components/SignIn/SignIn';
import { SignUp } from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Homepage/>
      <MoviesList/>
      <SignIn/>
      <SignUp/>
    </div>
  );
}

export default App;
