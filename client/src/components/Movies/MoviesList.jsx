import { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import "./Movies.css";

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
        {movies.map((e) => {
            return <>
            <div className="container movieDiv" key={e._id}>
                <img src={e.Post} alt="" />
                <h1>{e.Name}</h1>
                <p>{e.Plot}</p>
                <p>Release Date : {e.Year}</p>
            </div>
            </>
        })}
        <div></div>
        </>
    )
}