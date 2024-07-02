// cell tower tracking system implementation

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const phoneInputPopupClasses =
  "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 border border-gray-300 shadow-md z-50 max-w-sm w-full text-center";

let DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

L.Marker.prototype.options.icon = DefaultIcon;

// red icon for cell towers
let RedIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png",
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
  shadowSize: [41, 41], // size of the shadow
});

const cellTowers = [
  { lat: 19.117, lng: 72.856, signalStrength: 50 }, // Simulated cell tower data
  { lat: 19.112, lng: 72.855, signalStrength: 60 },
  { lat: 19.114, lng: 72.857, signalStrength: 70 },
];

// Simplified path loss model to estimate distance from signal strength
const calculateDistance = (signalStrength) => {
  // Assuming signal strength in dBm and a simplified path loss model
  const referenceSignal = 0; // Reference signal strength at 1 meter
  const pathLossExponent = 1; // Path loss exponent (free space)
  return Math.pow(
    10,
    (referenceSignal - signalStrength) / (10 * pathLossExponent)
  );
};

const triangulatePosition = (towers) => {
  // Using a simple geometric mean for triangulation
  let x = 0,
    y = 0;
  towers.forEach((tower) => {
    const distance = calculateDistance(tower.signalStrength);
    x += tower.lat + distance;
    y += tower.lng + distance;
  });
  x /= towers.length;
  y /= towers.length;
  return { lat: x, lng: y };
};

const TrackVehicle = () => {
  const [showPhoneNumberInput, setShowPhoneNumberInput] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [position, setPosition] = useState({ lat: 19.117, lng: 72.856 });

  const handlePhoneNumberSubmit = () => {
    // validate phoneNumber before proceeding
    setShowPhoneNumberInput(false);
    const estimatedPosition = triangulatePosition(cellTowers);
    setPosition(estimatedPosition);
  };

  return (
    <>
      {showPhoneNumberInput ? (
        <div className={phoneInputPopupClasses}>
          <h2 className="text-2xl font-bold mb-4">Enter Phone Number</h2>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm mb-4"
          />
          <button
            onClick={handlePhoneNumberSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-200"
          >
            Submit
          </button>
        </div>
      ) : (
        <MapContainer
          center={[position.lat, position.lng]}
          zoom={13}
          style={{ height: "100vh", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[position.lat, position.lng]}>
            <Popup>Estimated Position</Popup>
          </Marker>
          {cellTowers.map((tower, index) => (
            <Marker
              key={index}
              position={[tower.lat, tower.lng]}
              icon={RedIcon}
            >
              <Popup>Cell Tower {index + 1}</Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </>
  );
};

export default TrackVehicle;
