import React, {useEffect} from 'react'
import {MapContainer, TileLayer, Marker} from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import Axios from 'axios'
import styled from 'styled-components'

const MapBlock = ({location}) => {
    const markerIcon = new L.Icon({
        iconUrl: '/img/geo.svg',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null
    })

    const [coordinates, setCoordinates] = React.useState([
        61.258407260825145,
        73.42514905758011
    ])
    useEffect(() => {
        Axios.get('https://nominatim.openstreetmap.org/search', {
            params: {
                city: 'surgut',
                format: 'json',
                street: location
            }
        }).then(response => {
            if (response.data.length > 0) {
                setCoordinates([response.data[0].lat, response?.data[0].lon])
            }
        })
    }, [])

    return (
        <MapStyle center={coordinates} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coordinates} icon={markerIcon}/>
        </MapStyle>
    )
}

const MapStyle = styled(MapContainer)`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    height: 500px;
    max-width: 90%;
    margin: 100px auto;
  }
`

export default MapBlock
