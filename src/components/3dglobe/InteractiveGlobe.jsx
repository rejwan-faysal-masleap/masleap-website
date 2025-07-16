"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

const bangladesh = { lat: 23.6850, lon: 90.3563 };

const connections = [
  // West
  { name: "USA", lat: 37.0902, lon: -95.7129 },
  { name: "Canada", lat: 56.1304, lon: -106.3468 },
  { name: "Brazil", lat: -14.2350, lon: -51.9253 },

  // Northwest
  { name: "UK", lat: 55.3781, lon: -3.4360 },
  { name: "Germany", lat: 51.1657, lon: 10.4515 },
  { name: "France", lat: 46.6034, lon: 1.8883 },

  // East
  { name: "China", lat: 35.8617, lon: 104.1954 },
  { name: "Japan", lat: 36.2048, lon: 138.2529 },
  { name: "South Korea", lat: 35.9078, lon: 127.7669 },

  // South
  { name: "Australia", lat: -25.2744, lon: 133.7751 },
  { name: "South Africa", lat: -30.5595, lon: 22.9375 },
];

function latLonToVec3(lat, lon, radius = 1.01) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function ConnectionLine({ from, to }) {
  const curve = new THREE.QuadraticBezierCurve3(
    from,
    from.clone().add(to).normalize().multiplyScalar(1.5), // Control point for arc
    to
  );

  const points = curve.getPoints(50);
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial attach="material" color="white" linewidth={2} />
    </line>
  );
}

function Globe() {
  const texture = new THREE.TextureLoader().load("/images/earth-color.jpg"); // Ensure this is in /public

  return (
    <>
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      {connections.map((country, idx) => (
        <ConnectionLine
          key={idx}
          from={latLonToVec3(bangladesh.lat, bangladesh.lon)}
          to={latLonToVec3(country.lat, country.lon)}
        />
      ))}
    </>
  );
}

export default function InteractiveGlobe() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 2, 2]} intensity={1.2} />
        <OrbitControls enableZoom={true} enablePan={false} />
        <Globe />
      </Canvas>
    </div>
  );
}
