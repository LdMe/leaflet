import { useState } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import './App.css'
import 'leaflet/dist/leaflet.css';
const positions = {
  kuna: [43.25396735545403, -2.923154717518547],
  arenal: [43.26069371476616, -2.9242975364536976]
}
function App() {

  return (
    <MapContainer center={[43.25396735545403, -2.923154717518547]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        Object.keys(positions).map((key, index) => {
          return (
            <Marker key={index} position={positions[key]}>
              <Popup>
                {key}
              </Popup>
            </Marker>
          )
        }
        )
      }
    </MapContainer>
  )
}

export default App
