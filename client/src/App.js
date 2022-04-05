import './App.css';
import { Homepage } from './components/Home/Homepgae';
import { MoviesList } from './components/Movies/MoviesList';
import { SignIn } from './components/SignIn/SignIn';
import { SignUp } from './components/SignUp/SignUp';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/movies' element={<MoviesList/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
