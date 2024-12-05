import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
  // Set the coordinates for the office location
  const officeLocation = {
    lat: 51.5074, // Replace with your latitude
    lng: -0.1278, // Replace with your longitude
  };

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = officeLocation;

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15} // Adjust the zoom level as per your needs
      >
        <Marker position={officeLocation} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
