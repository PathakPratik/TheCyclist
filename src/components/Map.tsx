import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Position } from "../Tracker/LocationTracker";

export default function Map({location}:{location: Position}) {
    return (
        <MapContainer center={[location.latitude, location.longitude]} zoom={12}scrollWheelZoom={false}>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.latitude, location.longitude]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>
    );
}