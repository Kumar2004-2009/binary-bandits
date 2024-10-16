export function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatched,
  movies,
}) {
  const movie = movies.find((movie) => movie.imdbID === selectedId) || {};
  const {
    Title: title,
    Date: date,
    Poster: poster,
    Description: desc,
    Time: time,
    Organisers: organisers,
    Venue: venue,
  } = movie;

  function handleAdd() {
    const newMovie = {
      imdbID: selectedId,
      Title: title, // Use "Title" instead of "title"
      Date: date, // Use "Date" instead of "date"
      Poster: poster,
      Description: desc, // Use "Description" instead of "desc"
      Time: time,
      Venue: venue,
      Organisers: organisers,
    };
    onAddWatched(newMovie);
    onCloseMovie();
  }

  return (
    <div className="details">
      <header>
        <button className="btn-back" onClick={onCloseMovie}>
          ⬅
        </button>
        <img src={poster} alt={`Poster of ${title} movie`} />
        <div className="details-overview">
          <h2>{title}</h2>
          <p>Organised By: {organisers}</p>
          <p>
            Schedule: {date} <br />
            Time: {time}
          </p>
        </div>
      </header>

      <section>
        <div className="rating">
          <button className="btn-add" onClick={handleAdd}>
            +Register
          </button>
        </div>
        <div>
          <p>
            <em>{desc}</em>
          </p>
          <br />
          <p>
            Venue: <strong>{venue}</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
