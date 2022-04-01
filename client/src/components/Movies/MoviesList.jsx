import { useEffect, useState } from "react";

export const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    useEffect( () =>{
        getMovies();
    }, []);
    const getMovies =  () => {
        fetch("https://imdbbackendserver.herokuapp.com/movie").then((res) => res.json()).then((d) => setMovies(d));
    }
    return (
        <>
        <h1 className="display-4 text-center" style={{color : "white"}}>Movies</h1>
        <div></div>
        </>
    )
}