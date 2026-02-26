// import { MapContainer, TileLayer, Polyline } from "react-leaflet";
// import polyline from "@mapbox/polyline";

// const RunMap = ({ encodedPolyline }) => {
//   if (!encodedPolyline) return null;

//   // Decode Strava polyline into coordinates
//   const decoded = polyline.decode(encodedPolyline);

//   // Convert to Leaflet format
//   const positions = decoded.map(([lat, lng]) => [lat, lng]);

//   return (
//     <MapContainer
//       center={positions[0]}
//       zoom={13}
//       style={{ height: "300px", width: "100%" }}
//       scrollWheelZoom={false}
//     >
//       <TileLayer
//         attribution='&copy; OpenStreetMap contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Polyline positions={positions} color="#FC4C02" weight={4} />
//     </MapContainer>
//   );
// };

// export default RunMap;

import polyline from "@mapbox/polyline";

const RunMap = ({ encodedPolyline }) => {
  if (!encodedPolyline) return null;

  // 1️⃣ Decode polyline into lat/lng pairs
  const points = polyline.decode(encodedPolyline);

  // 2️⃣ Convert to SVG coordinate space
  const lats = points.map(p => p[0]);
  const lngs = points.map(p => p[1]);

  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLng = Math.min(...lngs);
  const maxLng = Math.max(...lngs);

  const width = 250;
  const height = 250;

  const scaleX = width / (maxLng - minLng);
  const scaleY = height / (maxLat - minLat);
  const scale = Math.min(scaleX, scaleY);

  const svgPoints = points.map(([lat, lng]) => {
    const x = (lng - minLng) * scale;
    const y = height - (lat - minLat) * scale; // flip Y axis
    return `${x},${y}`;
  });

  return (
      // <svg viewBox="0 0 500 500" style={{ width: "100%", height: "auto" }}>
      <svg
      width={width}
      height={height}
      // style={{ border: "1px solid #ddd" }}
      padding="5px"
    >
      <polyline
        points={svgPoints.join(" ")}
        fill="none"
        stroke={ "#FC4C02"}
        strokeWidth="3"
      />
    </svg>
  );
};

export default RunMap;