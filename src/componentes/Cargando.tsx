import styles from "./Cargando.module.css";

export default function Cargando() {
  return <div className={styles.spinner} role="status" aria-label="Cargando" />;
}
