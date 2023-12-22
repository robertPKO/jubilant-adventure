"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { RoomModel } from "./RoomModel";
import { Preload } from "@react-three/drei";

export default function ModelSection() {
  return (
    <div className="w-full h-[100vh]">
      <Canvas>
        <Suspense>
          <RoomModel />
        </Suspense>
        <Preload all/>
      </Canvas>
    </div>
  );
}
