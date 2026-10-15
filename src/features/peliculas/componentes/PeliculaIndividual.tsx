import type Pelicula from "../modelos/pelicula.model";
import styles from "./PeliculaIndividual.module.css";

interface PeliculaIndividualProps {
  pelicula: Pelicula;
}

export default function PeliculaIndividual(props: PeliculaIndividualProps) {
  const construirLink = () => `/pelicula/${props.pelicula.id}`;

  return (
    <div className={styles.div}>
      <a href={construirLink()}>
        <img src={props.pelicula.poster} alt="Poster" />
      </a>
      <p>
        <a href={construirLink()}>{props.pelicula.titulo}</a>
      </p>
    </div>
  );
}