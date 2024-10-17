import { useState } from "react";
// import "./index.css";
import "../index.css"
import { MovieDetails } from "./MovieDetails";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Bid It To Win It",
    Date: "18/10/2024",
    Poster:
      "https://th.bing.com/th/id/OIP.YjTxWU-tgqvLpVzJvydi0AHaH5?rs=1&pid=ImgDetMain",
    Description:
      "A strategic auction-style event where participants bid on various items or experiences. The goal is to win by making smart, calculated bids while managing a limited budget. This event combines elements of competition, negotiation, and financial strategy.",
    Venue: "Smart Block",
    Time: "11:30 AM",
    Organisers: "Venatus",
  },
  {
    imdbID: "tt0133093",
    Title: "Cosmic Papercraft",
    Date: "18/10/2024",
    Poster:
      "https://th.bing.com/th/id/OIP.hio9hXmwZnkEawkRLwmOuAHaKe?rs=1&pid=ImgDetMain",
    Description:
      "A creative and fun-filled event where participants design and create cosmic-themed models and structures using paper and other materials. The event emphasizes artistic expression, craftsmanship, and space-related themes.",
    Venue: "Nesci Lawns",
    Time: "2:00 PM",
    Organisers: "Nakshatra",
  },
  {
    imdbID: "tt6751668",
    Title: "Poly Math",
    Date: "17/10/2024",
    Poster:
      "https://printmeposter.com/blog/wp-content/uploads/2016/08/A-Maths-Poster-510x510.jpg",
    Description:
      "A math competition or workshop aimed at challenging participants' problem-solving and analytical skills. This event may feature puzzles, equations, and mathematical games that require participants to think critically and collaborate to find solutions.",
    Venue: "Student Centre",
    Time: "4:00 PM",
    Organisers: "Cross Links",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt137566",
    Title: "Marketer Of The Year",
    Date: "19/10/2024",
    Poster:
      "https://www.shutterstock.com/shutterstock/photos/2260427441/display_1500/stock-photo-marketing-concept-with-people-scene-in-the-flat-cartoon-style-marketer-works-on-advertising-for-2260427441.jpg",
    Description:
      "A competitive event where participants showcase their marketing skills by creating innovative campaigns. The event challenges creativity, strategy, and communication, aiming to crown the best marketer of the year.",
    Venue: "Admin Block",
    Time: "1:00 PM",
    Organisers: "The Economic Society",
  },
  {
    imdbID: "tt0088763",
    Title: "Prom Night",
    Date: "18/10/2024",
    Poster:
      "https://th.bing.com/th/id/OIP.Jkwf47nOfNVztAMFe0OmPQHaHZ?w=501&h=500&rs=1&pid=ImgDetMain",
    Description:
      "A glamorous evening filled with music, dance, and celebration. Participants dress in their finest attire and enjoy a night of socializing, music, and entertainment, making unforgettable memories with friends.",
    Venue: "Student Centre",
    Time: "8:00 PM",
    Organisers: "Decode",
  },
];
export default function EventManager() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [selectedId, setSelectedId] = useState(null);
  const [error,setError]=useState("");

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }
  function handleCloseMovie() {
    setSelectedId(null);
  }
  function handleAddWatched(movie) {
    const alreadyWatched=watched.some((watchedMovie)=>watchedMovie.imdbID===movie.imdbID);
    if(alreadyWatched){
      setError("Event is already Registered")
    }else{
      setWatched([...watched, movie]);
      setError("");
    }
  }
  return (
    <>
      <Main>
        <Box>
          <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              movies={movies}
            />
          ) : (
            <>
              <WatchedMovieList watched={watched} />
              {error && (
                <p className="error-message">{error}</p>
              )}
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
function Main({ children }) {
  return (
    <>
      <main className="main">{children}</main>
    </>
  );
}
function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}
function MovieList({ movies, onSelectMovie }) {
  return (
    <>
      <h2 className="register-heading">Upcoming Events...</h2>
      <ul className="list list-movies">
        {movies?.map((movie) => (
          <Movie
            movie={movie}
            key={movie.imdbID}
            onSelectMovie={onSelectMovie}
          />
        ))}
      </ul>
    </>
  );
}
function Movie({ movie, onSelectMovie }) {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)} key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Date}</span>
        </p>
      </div>
    </li>
  );
}
function WatchedMovieList({ watched }) {
  return (
    <>
      <h2 className="register-heading">Registered Events</h2>
      <ul className="list">
        {watched.map((movie) => (
          <WatchedMovie movie={movie} key={movie.imdbID} />
        ))}
      </ul>
    </>
  );
}
function WatchedMovie({ movie }) {
  const [showDescription, setShowDescription] = useState(false);

  function handleToggleDescription() {
    setShowDescription(!showDescription);
  }

  return (
    <li
      onClick={handleToggleDescription}
      className={showDescription ? "show-description" : ""}
    >
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div className="watched-summary">
        <p>
          <em>{movie.Description}</em>
        </p>
      </div>
    </li>
  );
}
