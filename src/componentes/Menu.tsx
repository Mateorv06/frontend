import { NavLink } from "react-router";
import styles from "./Menu.module.css";

export default function Menu() {
  const claseEnlace = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.enlace} ${styles.enlaceActivo}` : styles.enlace;

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.marca}>Películas OnLine TdeA</NavLink>
      <ul className={styles.lista}>
        <li>
          <NavLink to="/peliculas/filtrar" className={claseEnlace}>Filtrar Películas</NavLink>
        </li>
        <li>
          <NavLink to="/generos" className={claseEnlace}>Géneros</NavLink>
        </li>
        <li>
          <NavLink to="/actores" className={claseEnlace}>Actores</NavLink>
        </li>
        <li>
          <NavLink to="/cines" className={claseEnlace}>Cines</NavLink>
        </li>
        <li>
          <NavLink to="/productoras" className={claseEnlace}>Productoras</NavLink>
        </li>
        <li>
          <NavLink
            to="/peliculas/crear"
            className={({ isActive }) =>
              isActive
                ? `${styles.enlace} ${styles.enlaceActivo} ${styles.botonCrear}`
                : `${styles.enlace} ${styles.botonCrear}`
            }
          >
            Crear Película
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
