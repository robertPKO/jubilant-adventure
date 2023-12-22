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
      <ui.In>          <Html position={[0, 0, 0]} transform={true}>
            <div className="bg-white w-[5000px] h-[5000px] rounded-[16%] cursor-pointer group overflow-hidden relative border-collapse">
              {" "}
              <div className="bg-red w-full h-full -z-1 absolute transform left-0 top-[100%] rounded-[16%] transition-all duration-2000 ease-in group-hover:top-0 group-hover:opacity-100 opacity-0 " />
              <p className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[1000px] z-1 group-hover:text-white font-bold transition-all duration-500 ease-out">
                Play
              </p>
            </div>
          </Html></ui.In>
      <Canvas>
        {" "}
        <ambientLight intensity={1.5} />
        <directionalLight
          castShadow
          position={[5, 5, 5]}
          shadow-mapSize-width={2048} // Increasing shadow map width
          shadow-mapSize-height={2048} // Increasing shadow map height
        />{" "}
        <Suspense>
          <RoomModel ui={ui}/>
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
