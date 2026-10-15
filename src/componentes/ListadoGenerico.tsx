import type React from "react";
import styles from "./ListadoGenerico.module.css";

export default function ListadoGenerico<T>(props: ListadoGenericoProps<T>) {
  if (!props.listado) {
    return <div className={styles.spinner} role="status" aria-label="Cargando" />;
  } else if (props.listado.length === 0) {
    return "No hay elementos para mostrar...";
  } else {
    return props.children;
  }
}

interface ListadoGenericoProps<T> {
  listado: T[] | undefined;
  children: React.ReactNode;
}
