import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet'
import { Position } from "../Tracker/LocationTracker";

export default function TripPath({data}:{data: Position[]}) {

    const [first, setFirst] = useState<Array<number>>([])
    const [last, setLast] = useState<Array<number>>([])

    useEffect(() => {
        setFirst([data[0].Latitude as number, data[0].Longitude as number])
        setLast([data[data.length -1].Latitude as number, data[data.length -1].Longitude as number])
    },[data])

    // const polyline = [
    //     [53.3152793, -6.2516687], [53.3352793, -6.2716687], [53.3552793, -6.2416687], [53.3552793, -6.2916687]
    // ]
    
    const colorOptions = { color: 'blue' }

    const getRoute = () => {
        let route: Array<Array<number>> = []
        data.map((point) => {
            const curr = [point.Latitude as number, point.Longitude as number];
            route.push(curr)
        })
        return route
    }

    return (
        <MapContainer center={[53.3352793, -6.2716687]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline pathOptions={colorOptions} positions={getRoute()} />
        <Marker position={first}></Marker>
        <Marker position={last}></Marker>
        </MapContainer>
    );
}