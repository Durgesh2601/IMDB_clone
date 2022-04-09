import { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";

export const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    useEffect( () =>{
        getMovies();
    }, []);
    const getMovies =  () => {
        fetch("https://imdbbackendserver.herokuapp.com/movie").then((res) => res.json()).then((d) => setMovies(d));
    }
    console.log(movies);
    return (
        <>
        <Navbar/>
        <h1 className="display-4 text-center" style={{color : "white"}}>Movies</h1>
        <div></div>
        </>
    )
}