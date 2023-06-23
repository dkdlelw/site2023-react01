import React, { useEffect, useState } from "react";
import Contents from "../layout/Contents";
import MovieTag from "../movie/MovieTag";
import MovieSlider from "../movie/MovieSlider";
import MovieCont from "../movie/MovieCont";
import ContTitle from "../layout/ContTitle";

const MoviePage = () => {
    const [movies, setMovies] = useState([]);

    const search = async (query) => {
        await fetch(
            `${query}?api_key=37bef2f4ca3f23b3e4f635f2ec51d2a4&language=ko-KR`
        )
            .then((response) => response.json())
            .then((result) => setMovies(result.results))
            .catch((error) => console.log("error", error));
    };
    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=37bef2f4ca3f23b3e4f635f2ec51d2a4&language=ko-KR&limit=18`
        )
            .then((response) => response.json())
            .then((result) => setMovies(result.results))
            .catch((error) => console.log("error", error));
    }, []);
    return (
        <>
            <Contents>
                <ContTitle title="Movie" />
                <MovieSlider movies={movies} />
                <MovieTag onSearch={search} />
                <MovieCont movies={movies} />
            </Contents>
        </>
    );
};

export default MoviePage;
