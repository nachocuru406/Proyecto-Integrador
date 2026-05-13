import { useState, useEffect } from 'react';
import Card from '../Card/Card';


function SeccionSeriesPopulares (){
  const [series, setSeries] = useState([]);
	useEffect(() => {
        const apiKey = "8ec38789ad70cc9e9d12c6e963cc77be";
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`)
            .then(res => res.json())
            .then((data) => {
                let seriesFiltradas = data.results.filter(function(item, idx) {
                    return idx < 5;
                });
                setSeries(seriesFiltradas);
            })
            .catch(function(error) {
                console.log("El error fue: " + error);
            });
}, []);

return (
  <div className='container'>
    <section className="row cards cards5">
      {series.length > 0 ? (
      series.map(serie => (
        <Card
          key={serie.id}
          image={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
          title={serie.title}
          description={serie.overview}
          id={serie.id}
          type="serie"
        />
        ))
        ) : (
          <p>Cargando...</p>
        )}
      </section>
    </div>
  );
}

export default SeccionSeriesPopulares;