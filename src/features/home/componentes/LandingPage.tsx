import { useEffect, useState } from "react";
import ListadoPeliculas from "../../peliculas/componentes/ListadoPeliculas";
import type Pelicula from "../../peliculas/modelos/pelicula.model";

interface AppState {
  cines?: Pelicula[];
  proximosEstrenos?: Pelicula[];
  clasicos?: Pelicula[];
}

export default function LandingPage() {
  const [peliculas, setPeliculas] = useState<AppState>({});

  useEffect(() => {
    // Carga de Cines y Clásicos en 1 segundo (1000ms)
    setTimeout(() => {
      const cines: Pelicula[] = [
        {
          id: 1,
          titulo: "Sonic 3",
          poster: "https://upload.wikimedia.org/wikipedia/en/f/f2/Sonic_the_Hedgehog_3_film_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
        },
        {
          id: 2,
          titulo: "John Wick: Chapter 2",
          poster: "https://upload.wikimedia.org/wikipedia/en/3/31/John_Wick_Chapter_Two.png",
        },
      ];

      const clasicos: Pelicula[] = [
        {
          id: 4,
          titulo: "The Matrix",
          poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb34K0Qn7pPn8NtiCArzWeZDCHbURJ7vQYG77nK5wnPw&s",
        },
      ];

      setPeliculas((estadoAnterior) => ({ ...estadoAnterior, cines, clasicos }));
    }, 1000);

    // Carga de Próximos Estrenos en 2.5 segundos (2500ms)
    setTimeout(() => {
      const proximosEstrenos: Pelicula[] = [
        {
          id: 3,
          titulo: "Spider-Man: Far From Home",
          poster: "https://upload.wikimedia.org/wikipedia/commons/a/aa/SpidermanFH.IMG_0607.jpg",
        },
      ];

      setPeliculas((estadoAnterior) => ({ ...estadoAnterior, proximosEstrenos }));
    }, 2500);
  }, []); // <-- El arreglo vacío es clave para que solo se ejecute una vez

  return (
    <>
      <h2>En Cines</h2>
      <ListadoPeliculas peliculas={peliculas.cines} />

      <h2>Próximos Estrenos</h2>
      <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />

      <h2>Clásicos</h2>
      <ListadoPeliculas peliculas={peliculas.clasicos} />
    </>
  );
}
