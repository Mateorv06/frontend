import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { SubmitHandler } from "react-hook-form";
import type ActorCreacion from "../modelos/ActorCreacion.model";
import FormularioActor from "./FormularioActor";
import Cargando from "../../../componentes/Cargando";

export default function EditarActor() {
  const { id } = useParams();
  const [modelo, setModelo] = useState<ActorCreacion | undefined>(undefined);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setModelo({
        nombre: 'Tom Holland ' + id,
        fechaNacimiento: '1996-06-01',
        foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/800px-Tom_Holland_by_Gage_Skidmore.jpg'
      });
    }, 1000);

    return () => clearTimeout(timerId);
  }, [id]);

  const onSubmit: SubmitHandler<ActorCreacion> = async (data) => {
    console.log('editando el actor...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <>
      <h3>Editar Actor</h3>
      {modelo ? <FormularioActor modelo={modelo} onSubmit={onSubmit} /> : <Cargando />}
    </>
  );
}
