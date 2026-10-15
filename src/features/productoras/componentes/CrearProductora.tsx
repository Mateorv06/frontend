import type { SubmitHandler } from "react-hook-form";
import type ProductoraCreacion from "../modelos/ProductoraCreacion.model";
import FormularioProductora from "./FormularioProductora";

export default function CrearProductora() {
  const onSubmit: SubmitHandler<ProductoraCreacion> = async (data) => {
    console.log('creando productora...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <>
      <h3>Crear Productora</h3>
      <FormularioProductora onSubmit={onSubmit} />
    </>
  );
}
