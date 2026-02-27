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
      className="map"
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