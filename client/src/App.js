import './App.css';
import { Homepage } from './components/Home/Homepgae';
import { MoviesList } from './components/Movies/MoviesList';
import { SignInActor } from './components/SignInActor/SignInActor';
import { SignInProducer } from './components/SignInProducer/SignInProducer';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/movies' element={<MoviesList/>}></Route>
        <Route path='/signin' element={<SignInActor/>}></Route>
        <Route path='/signup' element={<SignInProducer/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
