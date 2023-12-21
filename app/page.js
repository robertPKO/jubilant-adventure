"use client";
import { Suspense } from "react";
import { RoomModel } from "../components/models/RoomModel";
import { Canvas } from "@react-three/fiber";

export default function Home() {


  return (
    <div className="w-full h-[100vh]">
      <Canvas>
        <ambientLight intensity={1.5} />
        <directionalLight
          castShadow
          position={[5,5,5]}
          shadow-mapSize-width={2048} // Increasing shadow map width
          shadow-mapSize-height={2048} // Increasing shadow map height
        />{" "}
        <Suspense>
          <RoomModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
