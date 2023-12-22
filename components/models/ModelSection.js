"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { RoomModel } from "./RoomModel";
import { Html, Preload } from "@react-three/drei";
import tunnel from "tunnel-rat";

/* Create a tunnel. */
const ui = tunnel();

export default function ModelSection() {
  return (
    <div className="w-full h-[100vh]">
      <div>
        <ui.In>
          {" "}
          <ambientLight intensity={1.5} />
          <directionalLight
            castShadow
            position={[5, 5, 5]}
            shadow-mapSize-width={2048} // Increasing shadow map width
            shadow-mapSize-height={2048} // Increasing shadow map height
          />{" "}
          <Suspense>
            <RoomModel ui={ui} />
          </Suspense>
          <Preload all />{" "}
        </ui.In>
      </div>
      <Canvas>
        <ui.Out />
      </Canvas>
    </div>
  );
}
