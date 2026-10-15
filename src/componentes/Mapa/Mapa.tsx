import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from "react-leaflet";
import { Icon } from "leaflet";
import marcadorIcono from "leaflet/dist/images/marker-icon.png";
import marcadorIconoRetina from "leaflet/dist/images/marker-icon-2x.png";
import marcadorSombra from "leaflet/dist/images/marker-shadow.png";
import type Coordenada from "./Coordenada.model";
import { useState } from "react";

// Con Vite, los iconos por defecto de Leaflet no se resuelven solos:
// se define el icono explícitamente para que el marcador se vea.
const iconoMarcador = new Icon({
  iconUrl: marcadorIcono,
  iconRetinaUrl: marcadorIconoRetina,
  shadowUrl: marcadorSombra,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function Mapa(props: MapaProps) {
  const [coordenadas, setCoordenadas] = useState<Coordenada[] | undefined>(props.coordenadas);

  return (
    <MapContainer center={[18.473166289625198, -69.9359689952855]} zoom={14}
      scrollWheelZoom={true} style={{ height: '500px' }}>
      <TileLayer
        attribution='React Películas'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ClickMapa setPunto={coordenada => {
        setCoordenadas([coordenada]);
        if (props.lugarSeleccionado) {
          props.lugarSeleccionado(coordenada);
        }
      }} />

      {coordenadas?.map(coordenada => <Marker key={coordenada.lat + coordenada.lng}
        position={[coordenada.lat, coordenada.lng]}
        icon={iconoMarcador}
      >
        {coordenada.mensaje ? <Popup>{coordenada.mensaje}</Popup> : undefined}
      </Marker>)}
    </MapContainer>
  );
}

interface MapaProps {
  lugarSeleccionado?: (coordenada: Coordenada) => void;
  coordenadas?: Coordenada[];
}

function ClickMapa(props: ClickMapaProps) {
  useMapEvent('click', e => {
    props.setPunto({ lat: e.latlng.lat, lng: e.latlng.lng });
  });

  return null;
}

interface ClickMapaProps {
  setPunto: (coordenada: Coordenada) => void;
}
