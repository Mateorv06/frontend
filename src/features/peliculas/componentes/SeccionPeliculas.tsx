import type Pelicula from "../modelos/pelicula.model";
import ListadoPeliculas from "./ListadoPeliculas";

interface SeccionPeliculasProps {
  titulo: string;
  peliculas: Pelicula[];
}

export default function SeccionPeliculas(props: SeccionPeliculasProps) {
  return (
    <>
      <h3>{props.titulo}</h3>
      <ListadoPeliculas peliculas={props.peliculas} />
    </>
  );
}