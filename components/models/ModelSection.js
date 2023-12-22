"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { RoomModel } from "./RoomModel";
import { Preload } from "@react-three/drei";

export default function ModelSection() {
  return (
    <div className="w-full h-[100vh]">
      <Canvas>
        <ambientLight intensity={1.5} />
        <directionalLight
          castShadow
          position={[5, 5, 5]}
          shadow-mapSize-width={2048} // Increasing shadow map width
          shadow-mapSize-height={2048} // Increasing shadow map height
        />{" "}
        <Suspense fallback={null}>
          <RoomModel />
        </Suspense>
        <Preload all/>
      </Canvas>
    </div>
  );
}
