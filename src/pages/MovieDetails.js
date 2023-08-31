import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import backdropUrl from "../assets/images/jason.png";
import useTitle from "../hooks/useTitle";

export default function MovieDetails() {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : backdropUrl;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const json = await response.json();
      console.log(json);
      setMovie(json);
    }
    fetchMovies();
  }, [params.id]);

  const pageTitle = useTitle(movie.title);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <section className="flex justify-around flex-wrap py-14">
        <div className="max-w-sm">
          <img className="rounded-t-lg" src={imageUrl} alt={movie.title} />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h5 className="text-4xl font-bold my-3 text-center lg:text-left">
            {movie.title}
          </h5>
          <p className="mb-3 font-normal">{movie.overview}</p>
          {movie.genres ? (
            <p className="mb-3 font-normal">
              {movie.genres.map((genre) => (
                <span
                  className="mr-2 border border-grey-200 rounded dark: border-grey-700 p-2"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center">
            <svg
              className="w-5 h-5 my-2 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ml-2 text-sm text-gray-900 dark:text-white">
              {movie.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900  dark:text-white">
              {movie.vote_count}
            </span>
          </div>
          <p className="my-4 ">
            <span className="mr-2 font-bold">Runtime: </span>
            <span>{movie.runtime} min.</span>
          </p>
          <p className="my-4 ">
            <span className="mr-2 font-bold">Budget: </span>
            <span>{movie.budget}</span>
          </p>

          <p className="my-4 ">
            <span className="mr-2 font-bold">Revenue: </span>
            <span>{movie.revenue}</span>
          </p>
          <p className="my-4 ">
            <span className="mr-2 font-bold">Release Date: </span>
            <span>{movie.release_date}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">IMDB CODE: </span>
            <a
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              target="_blank"
              rel="noreferrer"
            >
              {movie.imdb_id}
            </a>
          </p>
          <div className="ml-4">
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() =>
                window.open(
                  `https://www.imdb.com/title/${movie.imdb_id}`,
                  "_blank"
                )
              }
            >
              &raquo; Watch Movie
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
