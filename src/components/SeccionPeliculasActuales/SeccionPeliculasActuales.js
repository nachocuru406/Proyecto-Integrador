import { useState, useEffect } from 'react';
import Card from '../Card/Card';


function SeccionPeliculasActuales() {
	const [peliculas, setPeliculas] = useState([]);
  useEffect(() => {
        const apiKey = "8ec38789ad70cc9e9d12c6e963cc77be";
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
            .then(res => res.json())
            .then((data) => {
              let peliculasFiltradas = data.results.filter(function(item, idx) {
                  return idx < 6;
              });
              setPeliculas(peliculasFiltradas);
            })
            .catch(function(error) {
                console.log("El error fue: " + error);
            });
}, []);

return (
  <div className='container'>
    <section className="row cards cards6">
      {peliculas.length > 0 ? (
      peliculas.map(pelicula => (
        <Card
          key={pelicula.id}
          image={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
          title={pelicula.title}
          description={pelicula.overview}
          id={pelicula.id}
          type="pelicula"
        />
      ))
      ) : (
        <p>Cargando...</p>
      )}
      </section>
    </div>
  );
}

export default SeccionPeliculasActuales;